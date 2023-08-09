import { Resend } from 'resend';

export async function POST(req: Request) {
  const body = await req.json();

  const resend = new Resend(process.env.RESEND_API_KEY);

  await resend.emails.send({
    from: 'contacto@alejandrolarosa.com',
    to: 'alejandro.lr.developer@hotmail.com',
    subject: body.subject,
    html: `
    <h1>Message from ${body.name}</h1>

    <div>
      <span>From: ${body.email}</span>
      <br />
      <span>Subject: ${body.subject}</span>
      <br />
      <p>${body.message}</p>
    </div>`,
  });

  return new Response('Email sent!', { status: 200 });
}
