const nodemailer = require("nodemailer");


export async function POST(req: Request) {
    const { name, email, message } = await req.json();

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
}
