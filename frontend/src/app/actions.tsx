"use server";

import { redis } from "@/lib/redis";
import { headers } from "next/headers";

type FormState = {
  success: boolean;
  message: string;
};

const MAXIMUN_SUBMISSIONS = 3;

export async function submitContactForm(
  prevState: FormState,
  formData: FormData
) {
  const ip = (await headers()).get("x-forwarded-for");
  const key = `contact_form_submission:${ip}`;

  const currentSubmissions = (await redis.get<number>(key)) || 0;

  if (currentSubmissions >= MAXIMUN_SUBMISSIONS) {
    return {
      success: false,
      message: "You have reached the maximum number of submissions.",
    };
  }

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return {
      success: false,
      message: "Please fill out all fields.",
    };
  }

  try {
    formData.append("access_key", process.env.WEB3_FORMS_API_KEY!)

    const req = await fetch('https://api.web3forms.com/submit', {
      method: "POST",
      body: formData
    })

    const response = await req.json();

    if (response.success) {
      // expiration
      const oneDayinSeconds = 60 * 60 * 24;
      await redis.set(key, currentSubmissions + 1, { ex: oneDayinSeconds });
  
      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    } else {
      return {
        success: false,
        message: "Failed to send message. Please try again later.",
      }
    }

  } catch (error) {
    console.error("Failed to send email:", error);
    return {
      success: false,
      message: "Failed to send message. Please try again later.",
    };
  }
}
