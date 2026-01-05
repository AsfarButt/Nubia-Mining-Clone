// import { NextRequest, NextResponse } from 'next/server';
// import nodemailer from 'nodemailer';

// export async function POST(request: NextRequest) {


//   const { senderEmail, name, body } = await request.json(); // senderEmail is who sends the message

//   const user = process.env.EMAIL_USER;
//   const pass = process.env.EMAIL_PASS;

//   if (!user || !pass) {
//     return NextResponse.json(
//       { message: "Email credentials are not set in environment variables." },
//       { status: 500 }
//     );
//   }

//   try {
//     const transport = nodemailer.createTransport({
//       host: "smtp.titan.email", // correct SMTP host
//       port: 465,                // SSL port
//       secure: true,
//       auth: { user, pass },
//     });

//     try {
//       const response = await transport.sendMail({
//         from: senderEmail || user, // "from" can be dynamic, default to your account
//         to: user,                  // always send to your TitanMail account
//         subject: "This is a message from Nubia Mining: " + name,
//         text: body,
//       });

//       console.log("Email sent info:", response);
//       return NextResponse.json({ message: "Email sent successfully", info: response });
//     } catch (error) {
//       console.error("Failed to send email:", error);
//       return NextResponse.json({
//         message: "Failed to send email",
//         error: error instanceof Error ? error.message : error,
//       }, { status: 500 });
//     }
//   } catch (error) {
//     return NextResponse.json({ message: "Failed to create transport", error: error }, { status: 500 });
//   }
// }
