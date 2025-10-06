import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendMailWithResend = async (name, email, subject, message) => {
  try {
    const response = await resend.emails.send({
      from: process.env.MAIL_USER,
      to: email,
      subject: subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: "<p>Congrats on sending your <strong>first email</strong>!</p>",
    });
    console.log("Email sent successfully:", response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export { sendMailWithResend };
