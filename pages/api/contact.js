import { createTransport } from 'nodemailer'
import Cors from 'cors'

require('dotenv').config()

const cors = Cors({
  methods: ['GET', 'POST', 'OPTIONS'],
})

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
  console.log(`running middleware`)
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result)
      }

      return resolve(result)
    })
  })
}

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
  const mid = await runMiddleware(req, res, cors)
  console.log('process.env.MAIL_PWD', process.env.MAIL_PWD)
  console.log('process.env.MAIL_USER', process.env.MAIL_USER)
  console.log('mid', mid)
  if (req.method === 'POST') {
    try {
      const { email, message, name, telephone } = req.body
      const info = await transporter.sendMail({
        to: 'omar.aguinaga94@gmail.com',
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
