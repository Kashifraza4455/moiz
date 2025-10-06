import "dotenv/config";
import express from "express";
import { sendMailWithResend } from "./utils/resend.js";
import cors from "cors";

const app = express();

app.use(express.json());

app.use(cors());

app.post("/send-email", async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    sendMailWithResend(name, email, subject, message);

    res.status(200).json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.error("EMAIL ERROR:", error);
    res
      .status(500)
      .json({ success: false, message: "Email failed", error: error.message });
  }
});

app.listen(process.env.PORT, () => console.log("Server started on port 3001"));
