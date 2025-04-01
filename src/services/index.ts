import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
import nodemailer, { TransportOptions } from "nodemailer";

interface EmailOptions {
  from: string;
  to: string;
  subject: string;
  text?: string;
  html?: string;
}

export class EnvStrings {
  static DATABASE: string = process.env.DATABASE as string;

  static PORT: number = Number(process.env.PORT) || 5000;

  static GMAIL_HOST: string = process.env.GMAIL_HOST as string;

  static GMAIL_PORT: number = Number(process.env.GMAIL_PORT);

  static GMAIL_USER: string = process.env.GMAIL_USER as string;

  static APP_PASSWORD: string = process.env.APP_PASSWORD as string;

  //database connection method
  static connectToDatabase() {
    mongoose
      .connect(this.DATABASE)
      .then(() => {
        console.log("Connection established");
      })
      .catch((err: any) => {
        console.error("Error occurred while establishing a connection", err);
      });
  }

  //sending email method
  static sendEmail(options: EmailOptions) {
    const transport = nodemailer.createTransport({
      service: "gmail",
      host: this.GMAIL_HOST,
      port: this.GMAIL_PORT,
      secure: false,
      auth: {
        user: this.GMAIL_USER,
        pass: this.APP_PASSWORD,
      },
    } as TransportOptions);

    const mailOptions = {
      from: options.from,
      to: options.to,
      subject: options.subject,
      text: options.text,
      html: options.html,
    };

    transport.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent successfully");
      }
    });
  }
}

//hello
