import { createTransport } from 'nodemailer'

require('dotenv').config()

function makeANiceEmail({ email, message, name, telephone }) {
  return `
  <div style="
    border: 1px solid black;
    padding: 20px;
    font-family: sans-serif;
    line-height: 2;
    font-size: 20px;
  ">
    <h2>📬 Nuevo mensaje de ${name}!</h2>
    <p>Datos de contacto:</p>
    <p>Email: ${email}</p>
    <p>Nombre: ${name}</p>
    <p>Teléfono: ${telephone}</p>
    <p>Mensaje: ${message}</p>

    <p>Haz click 👉🏽 <a href=mailto:${email}>aquí</a> 👈🏽 para responder</p>
  </div>
  `
}

const transporter = createTransport({
  port: 465,
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PWD,
  },
  secure: true,
})
export default async function (req, res) {
  if (req.method === 'POST') {
    try {
      const { email, message, name, telephone } = req.body
      const info = await transporter.sendMail({
        to: process.env.MAIL_USER,
        from: process.env.MAIL_USER,
        subject: `📥 Nuevo mensaje de ${req.body.name} en criced.com`,
        html: makeANiceEmail({ name, email, message, telephone }),
      })
      res.status(200).end()
    } catch (err) {
      res.status(err).json({})
    }
  } else {
    res.status(405)
    res.end()
  }
}
