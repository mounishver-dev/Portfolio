import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json()); 

app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mounishver.s@gmail.com",
        pass: "ilyw tkfj prhc ltul", 
      },
    });

    // email content
    await transporter.sendMail({
      from: email,
      to: "mounishver.s@gmail.com",
      subject: `Portfolio Message from ${name}`,
      text: message,
      replyTo: email,
    });

    res.json({ success: true });
  } catch (error) {
    console.log(error);
    res.json({ success: false, error });
  }
});

app.listen(5000, () => console.log("Server running on 5000"));
