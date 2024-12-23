require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;
const url = `mongodb://${process.env.MONGO_DB_URL}/`;
const mongoClient = new MongoClient(url);

const express = require("express");
const router = express.Router();
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);
app.listen(5000, () => console.log("Server Running"));

const contactEmail = nodemailer.createTransport({
  service: "gmail",
  auth: {
    type: "OAuth2",
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken: process.env.REFRESH_TOKEN,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Ready to Send");
  }
});

router.post("/contact", (req, res) => {
  const name = req.body.firstName + " " + req.body.lastName;
  const email = req.body.email;
  const message = req.body.message;
  const phone = req.body.phone;
  const mail = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: "Contact Form Submission - Portfolio",
    html: `<p>Name: ${name}</p>
           <p>Email: ${email}</p>
           ${phone !== "" ? `<p>Phone: ${phone}</p>` : ""}
           <p>Message: ${message}</p>`,
  };

  contactEmail.sendMail(mail, (error) => {
    if (error) {
      res.json(error);
    } else {
      res.json({ code: 200, status: "Message Sent" });
    }
  });
});

router.post("/subscribe", (req, res) => {
  const SubscribersHandler = async (email) => {
    try {
      await mongoClient.connect();

      const db = mongoClient.db("FormsDetailsDB");
      const collection = db.collection("subscribers");

      try {
        const subscriber = { email: email };
        const result = await collection.insertOne(subscriber);
        console.log(result);
        res.json({
          code: 200,
          status: "success",
          message: "Subscription successful!",
        });
      } catch (err) {
        res.json({ error: "error", message: err });
        console.log(err);
      }
    } catch (err) {
      console.log("Возникла ошибка");
      console.log(err);
    } finally {
      await mongoClient.close();
      console.log("Подключение закрыто");
    }
  };

  SubscribersHandler(req.body.email);
});
