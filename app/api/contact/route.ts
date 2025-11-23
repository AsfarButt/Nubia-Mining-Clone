import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    // Parse the request body
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "All fields are required." },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Gmail SMTP server
      port: 587,
      secure: false, // TLS
      auth: {
        user: "asfarbutt69@gmail.com", // your Gmail
        pass: "pass123",  // app password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Contact" <asfarbutt69@gmail.com>`, // sender name + email
      to: "asfarbutt69@gmail.com",                        // recipient
      subject: `New message from ${name}`,               // subject
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`, // plain text body
      replyTo: email,                                    // reply-to header
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
