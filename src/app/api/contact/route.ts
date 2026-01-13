import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Email configuration - UPDATE THESE VALUES
const EMAIL_CONFIG = {
  // SMTP Configuration (using Gmail as example - can be changed to any SMTP provider)
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587'),
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER || '', // Your email address
    pass: process.env.SMTP_PASS || '', // Your app password (not regular password)
  },
};

// Recipients list - ADD YOUR EMAIL ADDRESSES HERE
const RECIPIENTS = {
  primary: [
    // Primary recipients - will receive all inquiries
    'neeraj.vishen@gmail.com',
  ],
  cc: [
    // CC recipients - will be copied on all inquiries
    'ayushee2290@gmail.com',
  ],
  bcc: [
    // BCC recipients - hidden copy
    'neeraj@nervescape.com',
  ],
};

// Email template for the notification
function createEmailHTML(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  const serviceNames: Record<string, string> = {
    cloudops: 'CloudOps',
    devops: 'DevOps',
    dataops: 'DataOps',
    dbops: 'DBOps',
    appops: 'AppOps',
    observability: 'Observability',
  };

  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Inquiry from Nervescape Website</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f8fafc;">
      <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f8fafc; padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
              <!-- Header -->
              <tr>
                <td style="background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); padding: 40px 40px 30px;">
                  <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 700;">
                    🔔 New Inquiry Received
                  </h1>
                  <p style="margin: 10px 0 0; color: rgba(255,255,255,0.9); font-size: 16px;">
                    A potential client has submitted a contact form
                  </p>
                </td>
              </tr>
              
              <!-- Content -->
              <tr>
                <td style="padding: 40px;">
                  <!-- Contact Info Card -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f1f5f9; border-radius: 12px; margin-bottom: 24px;">
                    <tr>
                      <td style="padding: 24px;">
                        <h2 style="margin: 0 0 16px; color: #1e293b; font-size: 18px; font-weight: 600;">
                          📋 Contact Details
                        </h2>
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 120px;">Name:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.firstName} ${data.lastName}</td>
                          </tr>
                          <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Email:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">
                              <a href="mailto:${data.email}" style="color: #3b82f6; text-decoration: none;">${data.email}</a>
                            </td>
                          </tr>
                          ${data.phone ? `
                          <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Phone:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">
                              <a href="tel:${data.phone}" style="color: #3b82f6; text-decoration: none;">${data.phone}</a>
                            </td>
                          </tr>
                          ` : ''}
                          ${data.company ? `
                          <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Company:</td>
                            <td style="padding: 8px 0; color: #1e293b; font-size: 14px; font-weight: 600;">${data.company}</td>
                          </tr>
                          ` : ''}
                          ${data.service ? `
                          <tr>
                            <td style="padding: 8px 0; color: #64748b; font-size: 14px;">Service:</td>
                            <td style="padding: 8px 0;">
                              <span style="background-color: #dbeafe; color: #1e40af; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 600;">
                                ${serviceNames[data.service] || data.service}
                              </span>
                            </td>
                          </tr>
                          ` : ''}
                        </table>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- Message Card -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #fef3c7; border-radius: 12px; border-left: 4px solid #f59e0b;">
                    <tr>
                      <td style="padding: 24px;">
                        <h2 style="margin: 0 0 12px; color: #92400e; font-size: 18px; font-weight: 600;">
                          💬 Message
                        </h2>
                        <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                      </td>
                    </tr>
                  </table>
                  
                  <!-- CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 32px;">
                    <tr>
                      <td align="center">
                        <a href="mailto:${data.email}?subject=Re: Your Inquiry to Nervescape Analytics" 
                           style="display: inline-block; background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%); color: #ffffff; padding: 14px 32px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                          Reply to ${data.firstName}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              
              <!-- Footer -->
              <tr>
                <td style="background-color: #f1f5f9; padding: 24px 40px; text-align: center;">
                  <p style="margin: 0; color: #64748b; font-size: 13px;">
                    This is an automated notification from <strong>Nervescape Analytics</strong> website.
                  </p>
                  <p style="margin: 8px 0 0; color: #94a3b8; font-size: 12px;">
                    Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
  `;
}

// Plain text version for email clients that don't support HTML
function createEmailText(data: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  return `
NEW INQUIRY FROM NERVESCAPE WEBSITE
====================================

Contact Details:
- Name: ${data.firstName} ${data.lastName}
- Email: ${data.email}
${data.phone ? `- Phone: ${data.phone}` : ''}
${data.company ? `- Company: ${data.company}` : ''}
${data.service ? `- Service Interested: ${data.service}` : ''}

Message:
${data.message}

------------------------------------
Received on ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
  `.trim();
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    const { firstName, lastName, email, phone, company, service, message } = body;
    
    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Check if SMTP is configured
    if (!EMAIL_CONFIG.auth.user || !EMAIL_CONFIG.auth.pass) {
      console.error('SMTP credentials not configured');
      // Still return success to user, but log the error
      // In production, you might want to store the inquiry in a database
      return NextResponse.json({
        success: true,
        message: 'Inquiry received (email notification pending configuration)',
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: EMAIL_CONFIG.host,
      port: EMAIL_CONFIG.port,
      secure: EMAIL_CONFIG.secure,
      auth: EMAIL_CONFIG.auth,
    });

    // Prepare email data
    const formData = { firstName, lastName, email, phone, company, service, message };

    // Send email
    await transporter.sendMail({
      from: `"Nervescape Website" <${EMAIL_CONFIG.auth.user}>`,
      to: RECIPIENTS.primary.join(', '),
      cc: RECIPIENTS.cc.length > 0 ? RECIPIENTS.cc.join(', ') : undefined,
      bcc: RECIPIENTS.bcc.length > 0 ? RECIPIENTS.bcc.join(', ') : undefined,
      replyTo: email,
      subject: `🔔 New Inquiry: ${firstName} ${lastName} ${company ? `from ${company}` : ''} ${service ? `- ${service}` : ''}`,
      text: createEmailText(formData),
      html: createEmailHTML(formData),
    });

    console.log(`✅ Email sent successfully for inquiry from ${email}`);

    return NextResponse.json({
      success: true,
      message: 'Your message has been sent successfully!',
    });

  } catch (error) {
    console.error('Error sending email:', error);
    
    return NextResponse.json(
      { 
        success: false, 
        error: 'Failed to send message. Please try again later.',
      },
      { status: 500 }
    );
  }
}
