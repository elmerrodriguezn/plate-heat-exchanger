const express = require("express");
const bodyParser = require("body-parser");
const exphbs = require("express-handlebars");
const path = require("path");
const nodemailer = require("nodemailer");
const next = require("next");

const app = next({ dev: process.env.NODE_ENV !== "production" });
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    const server = express();

    // View engine setup
    server.engine("handlebars", exphbs());
    server.set("view engine", "handlebars");

    // Static folder
    server.use("/static", express.static(path.join(__dirname, "static")));

    // Body Parser Middleware
    server.use(bodyParser.urlencoded({ extended: false }));
    server.use(bodyParser.json());

    server.get("*", (req, res) => {
      return handle(req, res);
    });

    server.listen(3000, err => {
      if (err) throw err;
      console.log("> Ready on http://localhost:3000");
    });

    server.post("/send", (req, res) => {
      const output = `
      <p>You have a new contact request</p>
      <h3>Contact Details</h3>
      <ul>
        <li>Nombre: ${req.body.name}</li>
        <li>Correo Electrónico: ${req.body.email}</li>
        <li>Teléfono: ${req.body.phone}</li>
      </ul>
      <h3>Mensaje</h3>
      <p>${req.body.message}</p>
      `;
      async function main() {
        let testAccount = await nodemailer.createTestAccount();

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
          host: "mail.airliftllc.com",
          port: 465,
          secure: true, // true for 465, false for other ports
          auth: {
            user: "shop@airliftllc.com", // generated ethereal user
            pass: "dRnqqKU@]fDC" // generated ethereal password
          },
          tls: {
            rejectUnauthorized: false
          }
        });

        // send mail with defined transport object
        let info = await transporter.sendMail({
          from: '"Intercambiadores de Calor de Placa"', // sender address
          to: "sistemas@lym.com.mx", // list of receivers
          subject: "Contacto Intercambiadores de Calor de Placa", // Subject line
          text: "", // plain text body
          html: output // html body
        });

        console.log("Message sent: %s", info.messageId);

        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));

        res.redirect("/thank");
      }
      main().catch(console.error);
    });
  })
  .catch(ex => {
    console.error(ex.stack);
    process.exit(1);
  });
