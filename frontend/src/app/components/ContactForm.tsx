"use client";

import { useFormStatus } from "react-dom";
import { submitContactForm } from "@/app/actions";
import { useActionState } from "react";

const initialState = {
  message: "",
  success: false,
  submissionCount: 0,
};

export const ContactForm = () => {
  const [state, formAction] = useActionState(submitContactForm, initialState);
  const { pending } = useFormStatus();

  return (
    <form action={formAction} className="space-y-4 max-w-2xl mx-auto mt-4">
      <h2 className="text-4xl font-semibold mb-2">Get In Touch!</h2>
      <div>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="border rounded-lg w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="border rounded-lg w-full p-2"
        />
      </div>
      <div>
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="border rounded-lg w-full p-2"
        />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-white text-black p-2 rounded-lg disabled:bg-gray-400 hover:bg-blue-300 hover:cursor-pointer"
      >
        {pending ? "Submitting..." : "Send Message"}
      </button>
      {state.message && (
        <p className={state.success ? "text-green-600" : "text-red-600"}>
          {state.message}
        </p>
      )}
    </form>
  );
};
