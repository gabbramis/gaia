import * as nodemailer from 'nodemailer';
import { cookies } from 'next/headers';
import { sanityClient } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import type { Resource } from '@/lib/types/resource';

const resourceBySlugQuery = groq`
  *[_type == "resource" && slug.current == $slug][0] {
    _id,
    title,
    resourceUrl,
    canvaUrl,
    "downloadableFileUrl": downloadableFile.asset->url,
    requiresEmail,
  }
`;

const RESOURCE_EMAIL_COOKIE = 'gaia_resource_email';
const COOKIE_MAX_AGE = 60 * 60 * 24 * 30; // 30 days

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

async function sendLeadNotification(
  name: string,
  email: string,
  resourceTitle: string,
  resourceSlug: string
): Promise<void> {
  if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
    console.error('Missing email configuration for lead notification');
    return;
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  const now = new Date();
  const formattedDate = now.toLocaleDateString('es-UY', {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
  });
  const formattedTime = now.toLocaleTimeString('es-UY', {
    hour: '2-digit',
    minute: '2-digit',
  });

  await transporter.sendMail({
    from: `"GAIA Recursos" <${process.env.MAIL_USER}>`,
    to: process.env.MAIL_USER,
    subject: `Nueva lead en Recursos: ${resourceTitle}`,
    html: `
      <div style="font-family: sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #500712; font-size: 20px; margin-bottom: 16px;">Nueva Lead de Recursos!!!!!</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 14px;">Nombre:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${name || 'No proporcionado'}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 14px;">Email:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${email}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 14px;">Recurso:</td>
            <td style="padding: 8px 0; font-weight: 600; font-size: 14px;">${resourceTitle}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 14px;">Slug:</td>
            <td style="padding: 8px 0; font-size: 14px;">${resourceSlug}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; color: #666; font-size: 14px;">Fecha:</td>
            <td style="padding: 8px 0; font-size: 14px;">${formattedDate} ${formattedTime}</td>
          </tr>
        </table>
      </div>
    `,
  });
}

export async function POST(req: Request) {
  try {
    const { name, email, resourceSlug } = await req.json();

    if (!email || !resourceSlug) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Missing required fields' }),
        { status: 400 }
      );
    }

    const sanitizedName = name ? name.trim() : '';
    const sanitizedEmail = email.trim().toLowerCase();

    if (!isValidEmail(sanitizedEmail)) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Invalid email format' }),
        { status: 400 }
      );
    }

    const resource = await sanityClient?.fetch<Resource>(resourceBySlugQuery, {
      slug: resourceSlug,
    });

    if (!resource) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Resource not found' }),
        { status: 404 }
      );
    }

    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    if (!supabaseUrl || !supabaseServiceKey) {
      console.error('Missing Supabase server-side configuration');
      return new Response(
        JSON.stringify({ ok: false, error: 'Server configuration error' }),
        { status: 500 }
      );
    }

    const { createClient } = await import('@supabase/supabase-js');
    const supabaseAdmin = createClient(supabaseUrl, supabaseServiceKey);

    const { error: upsertError } = await supabaseAdmin
      .from('resource_leads')
      .upsert(
        {
          name: sanitizedName || null,
          email: sanitizedEmail,
          resource_id: resource._id,
          resource_slug: resourceSlug,
        },
        { onConflict: 'email,resource_id', ignoreDuplicates: true }
      );

    if (upsertError) {
      console.error('Supabase upsert error:', upsertError);
      return new Response(
        JSON.stringify({ ok: false, error: 'Failed to store lead' }),
        { status: 500 }
      );
    }

    const cookieStore = await cookies();
    const existingEmail = cookieStore.get(RESOURCE_EMAIL_COOKIE)?.value;

    if (!existingEmail || existingEmail !== sanitizedEmail) {
      cookieStore.set(RESOURCE_EMAIL_COOKIE, sanitizedEmail, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: COOKIE_MAX_AGE,
        path: '/',
      });
    }

    await sendLeadNotification(sanitizedName, sanitizedEmail, resource.title, resourceSlug);

    return new Response(
      JSON.stringify({
        ok: true,
        resourceUrl: resource.resourceUrl || null,
        canvaUrl: resource.canvaUrl || null,
        downloadableFile: resource.downloadableFileUrl || null,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing resource lead:', error);
    return new Response(
      JSON.stringify({ ok: false, error: 'Internal server error' }),
      { status: 500 }
    );
  }
}
