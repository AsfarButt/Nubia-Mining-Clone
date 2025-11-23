"use client"; // THIS MAKES THE PAGE CSR

import { useState, useRef } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ShownText, setShownText] = useState("Send Email");
  const button1 = useRef<HTMLButtonElement | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    setShownText("Email Sent");
    button1.current?.classList.replace("bg-blue-950/85","bg-green-500/85");
    setTimeout(() => {button1.current?.classList.replace("bg-green-500/85","bg-blue-950/85"); setShownText("Send Email");},3500)

    // e.preventDefault();

    // const res = await fetch("/api/contact", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ name, email, message }),
    // });

    // if (res.ok) {
    //   alert("Message sent successfully!");
    //   setName("");
    //   setEmail("");
    //   setMessage("");
    // } else {
    //   alert("Failed to send message.");
    // }
  };

  return (
      <div className="w-[90%] max-w-140 bg-white p-8 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-blue-950/95 mb-6 text-center">
          Contact Us
        </h1>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-1 outline-blue-950/95"
          required/>

          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-1 outline-blue-950/95"
          />

          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            className="w-full border border-gray-300 p-3 rounded-lg focus:outline-1 outline-blue-950/95 h-32"
          required></textarea>

          <button
            type="submit"
            className="w-full bg-blue-950/85 hover:bg-blue-950/95 text-white py-3 rounded-lg font-semibold transition-all duration-300"
          ref={button1}>
            {ShownText}
          </button>
        </form>
      </div>
  )
}
