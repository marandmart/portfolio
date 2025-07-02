"use server";

import nodemailer from "nodemailer";

type FormState = {
  success: boolean;
  message: string;
  submissionCount: number;
};

const MAXIMUN_SUBMISSIONS = 3;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
) {
  if (prevState.submissionCount >= MAXIMUN_SUBMISSIONS) {
    return {
      success: false,
      message: "You have reached the maximum number of submissions.",
      submissionCount: prevState.submissionCount,
    };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill out all fields.",
      submissionCount: prevState.submissionCount,
    };
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER_HOST,
    port: Number(process.env.EMAIL_SERVER_PORT),
    secure: true,
    auth: {
      type: "OAuth2",
      clientId: process.env.GMAIL_CLIENT_ID,
      clientSecret: process.env.GMAIL_CLIENT_SECRET,
      user: process.env.EMAIL_SERVER_USER,
      refreshToken: process.env.GMAIL_REFRESH_TOKEN,
    },
  });

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_SERVER_USER,
      to: process.env.EMAIL_TO,
      replyTo: email.toString(),
      subject: `New Contact Form Submission from ${name}`,
      html: `
                <p>You have a new contact form submission:</p>
                <ul>
                    <li><strong>Name:</strong> ${name}</li>
                    <li><strong>Email:</strong> ${email}</li>
                    <li><strong>Message:</strong></li>
                    <p>${message}</p>
                </ul>
            `,
    });

    return {
      success: true,
      message: "Your message has been sent successfully!",
      submissionCount: prevState.submissionCount + 1,
    };
  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
      submissionCount: prevState.submissionCount + 1,
    };
  }
}
