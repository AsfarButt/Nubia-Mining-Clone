"use client"; 

import { useState, useRef } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ShownText, setShownText] = useState("Send Email");
  const [ButtonColor, setButtonColor] = useState("bg-blue-950/85 hover:bg-blue-950/95");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShownText("Email Sent");
    setButtonColor("bg-green-500/85"); // instantly updates
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
            placeholder="Enter your email (optional)"
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
            className={`${ButtonColor} w-full text-white py-3 rounded-lg font-semibold transition-all duration-300`}
            >
            {ShownText}
          </button>
        </form>
      </div>
  )
}
