import * as nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, email, message } = await req.json();

        // Validate environment variables
        if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
            console.error("Missing email configuration");
            return new Response(
                JSON.stringify({ ok: false, error: "Email configuration error" }),
                { status: 500 }
            );
        }

        // Validate request body
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({ ok: false, error: "Missing required fields" }),
                { status: 400 }
            );
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

        await transporter.sendMail({
            from: `"Formulario Web" <${process.env.MAIL_USER}>`,
            to: process.env.MAIL_USER,
            subject: "Nuevo mensaje desde el formulario",
            html: `
      <p><strong>Nombre:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mensaje:</strong> ${message}</p>
    `,
        });

        return new Response(JSON.stringify({ ok: true }), { status: 200 });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(
            JSON.stringify({ ok: false, error: "Failed to send email" }),
            { status: 500 }
        );
    }
}
