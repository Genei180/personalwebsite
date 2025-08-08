import { fail } from '@sveltejs/kit';
import nodemailer from 'nodemailer';

// Create reusable transporter (adjust to your SMTP settings)
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g. "smtp.gmail.com"
  port: 465, 
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export const actions = {
  default: async ({ request }) => {
    const data = await request.formData();
    const subject = data.get('subject')?.toString().trim();
    const email = data.get('email')?.toString().trim();
    const message = data.get('message')?.toString().trim();

    if (!subject || !email || !message) {
      return fail(400, { error: 'All fields are required.' });
    }

    try {
      await transporter.sendMail({
        from: `"Website Contact Form" <${process.env.SMTP_USER}>`, // sender
        to: 'info@genei180.de', // recipient
        subject,
        text: `From: ${email}\n\n${message}`, // plain text
      });

      return { success: true };
    } catch (err) {
      console.error('Error sending email:', err);
      return fail(500, { error: 'Failed to send email. Please try again later.' });
    }
  }
};
