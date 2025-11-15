import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Only POST allowed" });
  }

  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.MAIL_USER,  // your Gmail
        pass: process.env.MAIL_PASS,  // your App Password
      },
    });

    await transporter.sendMail({
      from: email,
      to: process.env.MAIL_USER,
      subject: `Portfolio Message from ${name}`,
      text: message,
      replyTo: email,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email Error:", err);
    return res.status(500).json({ success: false, error: err });
  }
}
