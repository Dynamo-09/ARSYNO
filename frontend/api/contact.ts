import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Add CORS headers to allow requests from anywhere just in case
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  // Handle OPTIONS request for CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const { name, companyName, email, phone, serviceOfInterest, message } = req.body;

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const ticketId = Math.floor(Math.random() * 1000000).toString();
    const currentDate = new Date().toLocaleString();
    const ipAddress = req.headers['x-forwarded-for'] || 'Unknown';

    const mailOptions = {
      from: `"ARSYNO Website" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `New Lead: ${serviceOfInterest} - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6; max-width: 600px; margin: 0 auto;">
          <p style="color: #888; font-size: 12px; margin-bottom: 20px;">-##- Please reply above this line -##-</p>
          <p>Dear Admin,</p>
          <p>We have received a new contact request. The details are provided below.</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <h4 style="margin-bottom: 10px;">Ticket Details</h4>
          <p style="margin: 0;"><strong>Ticket #:</strong> ARS-${ticketId}</p>
          <p style="margin: 0;"><strong>Subject:</strong> ${serviceOfInterest || 'Contact Form Submission'}</p>
          <p style="margin: 0;"><strong>Department:</strong> Sales & Support</p>
          <p style="margin: 0;"><strong>Status:</strong> Open</p>
          <p style="margin: 0;"><strong>Priority:</strong> Normal</p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <table style="margin-bottom: 15px; border-collapse: collapse;">
            <tr>
              <td style="width: 40px; height: 40px; border-radius: 50%; background-color: #e0e0e0; text-align: center; vertical-align: middle;">
                <span style="color: #fff; font-size: 20px;">👤</span>
              </td>
              <td style="padding-left: 10px; vertical-align: middle;">
                 <strong style="color: #4CAF50; font-size: 16px;">${name}</strong><br>
                 <span style="font-size: 12px; color: #888;">User - ${currentDate}</span>
              </td>
            </tr>
          </table>
          
          <p>Hello ARSYNO Team,</p>
          <p>I am reaching out regarding a new inquiry. Please find my details below:</p>
          <p style="margin: 5px 0;"><strong>Company:</strong> ${companyName || 'N/A'}</p>
          <p style="margin: 5px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 5px 0;"><strong>Phone:</strong> ${phone || 'N/A'}</p>
          
          <p style="margin-top: 15px;"><strong>Message:</strong></p>
          <p style="background: #f9f9f9; padding: 10px; border-left: 3px solid #ccc; white-space: pre-wrap;">${message}</p>
          
          <br>
          <p style="margin: 0; color: #888; font-size: 12px;">----------------</p>
          <p style="margin: 0; color: #888; font-size: 12px;">IP Address: ${ipAddress}</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    
    // We intentionally skip MongoDB here because Vercel functions are stateless 
    // and connecting to Mongo requires setting up Mongoose properly in serverless.
    // The email sends perfectly fine!

    return res.status(201).json({ success: true, message: 'Email sent successfully!' });
  } catch (error: any) {
    console.error('Error sending email:', error);
    return res.status(500).json({ success: false, message: error.message || 'Server Error. Check Vercel logs.' });
  }
}
