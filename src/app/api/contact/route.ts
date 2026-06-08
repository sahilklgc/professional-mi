import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactFormEmail from '@/emails/ContactFormEmail';

export async function POST(req: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key_for_build');
    const destinationEmail = process.env.CONTACT_FORM_DESTINATION_EMAIL || 'onboarding@resend.dev';
    
    const body = await req.json();
    const { name, email, phone, service, message } = body;

    // Validate required fields
    if (!name || !email || !phone || !service || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Send email using Resend
    // By default, Resend requires you to use onboarding@resend.dev until you verify a domain.
    const data = await resend.emails.send({
      from: 'PCCI Website <onboarding@resend.dev>',
      to: [destinationEmail],
      subject: `New Inquiry from ${name} - PCCI Website`,
      replyTo: email,
      react: ContactFormEmail({ name, email, phone, service, message }),
    });

    if (data.error) {
      console.error('Resend Error:', data.error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
