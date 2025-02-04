import { Resend } from 'resend';
import { json, error } from '@sveltejs/kit';
import { SECRET_RESEND_API_KEY } from '$env/static/private';

export async function POST({ request }) {
  const resend = new Resend(SECRET_RESEND_API_KEY);

  try {
    const { name, email, message } = await request.json();

    if (!name || !email || !message) {
      return error(400, 'Missing required fields');
    }

    const { data, error: resendError } = await resend.emails.send({
      // from: 'Infinite Stitchings <FoxHollow.web@gmail.com>',
      from: 'onboarding@resend.dev',
      to: 'foxhollow.web@gmail.com',
      subject: `New Commission Request from ${name}`,
      html: `
        <h1>New Commission request</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      replyTo: email
    });

    if (resendError) {
      return error(500, 'Failed to send email');
    }

    return json({ success: true, data });
  } catch (err) {
    console.error('Email sending error:', err);
    return error(500, 'Internal server error');
  }
}