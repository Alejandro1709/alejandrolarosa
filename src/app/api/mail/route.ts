import { contactRequestValidator } from "@/validators/validator";
import { NextResponse } from "next/server";

const mail = require('@sendgrid/mail')

mail.setApiKey(process.env.SENDGRID_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()

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

    try {
      await mail.send(data)

      return NextResponse.json({ message: 'Mail Sent!' })
    } catch (err) {
      console.log(err)
    }

  } catch (error) {
    console.log(error)
    return new NextResponse('Unprocessessable entity')
  }

  return NextResponse.json({ message: 'Hello Mail' })
}