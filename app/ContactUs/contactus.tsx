"use client";

import React, { useState } from "react";

export default function Page() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [ShownText, setShownText] = useState("Send Email");
  const [ButtonColor, setButtonColor] = useState(
    "bg-blue-500/85 hover:bg-blue-500"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShownText("Email Sent");
    setButtonColor("bg-emerald-500/85 hover:bg-emerald-500");
  };

  return (
    <div className="w-[90%] max-w-140 bg-[#101C2E] border border-white/10 p-8 shadow-lg">
      <h1 className="text-3xl font-bold text-slate-100 mb-2 text-center">
        Contact Us
      </h1>
      <p className="text-center text-slate-400 text-sm mb-6">
        Send us a message and we’ll respond as soon as possible.
      </p>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-slate-300 text-sm mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full bg-[#0F1B2D] text-slate-200 placeholder:text-slate-500
                       border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            required
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm mb-2">
            Email (optional)
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full bg-[#0F1B2D] text-slate-200 placeholder:text-slate-500
                       border border-white/10 p-3 focus:outline-none focus:ring-2 focus:ring-blue-400/50"
          />
        </div>

        <div>
          <label className="block text-slate-300 text-sm mb-2">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message"
            className="w-full bg-[#0F1B2D] text-slate-200 placeholder:text-slate-500
                       border border-white/10 p-3 h-32 resize-none
                       focus:outline-none focus:ring-2 focus:ring-blue-400/50"
            required
          />
        </div>

        <button
          type="submit"
          className={`${ButtonColor} w-full text-slate-100 py-3 font-semibold transition-all duration-300`}
        >
          {ShownText}
        </button>
      </form>
    </div>
  );
}
