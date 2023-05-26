import { contactRequestValidator } from "@/validators/validator";
import { NextResponse } from "next/server";

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request: Request) {
  const body = await request.json()

  try {
    const { name, email, subject, message } = contactRequestValidator.parse(body)

    const messagee = `
      From: ${name}\r\n
      Email: ${email}\r\n
      Subject: ${subject}\r\n
      Message: ${message}
    `;

    const data = {
      to: 'contacto@alejandrolarosa.com',
      from: 'hola@alejandrolarosa.com',
      subject: 'Nuevo correo del formulario de contacto!',
      text: messagee,
      html: messagee.replace(/\r\n/g, '<br>')
    }

    mail.send(data)

  } catch (error) {
    console.log(error)
    return new NextResponse('Unprocessessable entity')
  }

  return NextResponse.json({ message: 'Hello Mail' })
}