const express = require("express");
const app = express();

const nodemailer = require("nodemailer");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("you sent your mail");
});

app.post("/send_email", (req, res) => {
  const from = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const message = req.body.text;

  console.log(req);
  const transporter = nodemailer.createTransport({
    // host: 'smtp.gmail.com',
    // port: 587,
    service: "gmail",
    auth: {
      user: "joshuamusyokar@gmail.com",
      pass: "oqybajxoegwjwljr",
    },
  });
  transporter.sendMail(
    {
      to: email,
      from: "joshuamusyokar@gmail.com",
      subject: subject,
      html: `<h1>thanks for reaching me, ${from}☺</h1><h3>${message}</h3>`,
    },
    function (err, data) {
      if (err) {
        alert(`sorry ${from} problem occured when reaching`);
      } else {
        alert(`Hey ${from}Email sent successfully`);
      }
    }
  );

  res.redirect("http://myportofolio-joshuamusyoka.netlify.app");
});

app.listen(process.env.PORT || 3000);
