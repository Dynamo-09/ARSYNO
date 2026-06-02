import { Request, Response } from 'express';
import { Lead } from '../models/Lead';
import nodemailer from 'nodemailer';

export const submitContactForm = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, companyName, email, phone, serviceOfInterest, message } = req.body;

    // 1. Save to MongoDB
    const lead = await Lead.create({
      name,
      companyName,
      email,
      phone,
      serviceOfInterest,
      message,
    });

    // 2. Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 3. Send Email
    const mailOptions = {
      from: `"ARSYNO Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL,
      subject: `New Lead: ${serviceOfInterest} - ${name}`,
      html: `
        <h2>New Lead from ARSYNO Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Company:</strong> ${companyName || 'N/A'}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service of Interest:</strong> ${serviceOfInterest}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    };

    // We catch email errors so it doesn't fail the request if DB save was successful
    try {
      await transporter.sendMail(mailOptions);
    } catch (emailError) {
      console.error('Email could not be sent (mock credentials usually fail):', emailError);
    }

    res.status(201).json({ success: true, data: lead });
  } catch (error: any) {
    console.error('Error submitting contact form:', error);
    res.status(500).json({ success: false, message: 'Server Error' });
  }
};
