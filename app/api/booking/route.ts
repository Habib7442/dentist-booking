import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { message } = await req.json();
    
    // Vapi tool calls usually send data inside a toolCall structure
    console.log("--- New Incoming Booking Request ---");
    console.log("Full Request Body:", JSON.stringify(message, null, 2));

    const { name, phone, problem, slot, service } = message?.toolCalls?.[0]?.function?.arguments || message || {};
    
    console.log("Extracted Booking Data:", { name, phone, problem, slot, service });

    if (!name || !phone) {
      console.error("Validation Error: Missing name or phone");
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Attempting to send email via Resend...");
    const emailResponse = await resend.emails.send({
      from: 'DentCare Booking <onboarding@resend.dev>',
      to: 'webdevelopment7442@gmail.com',
      subject: `New Clinical Booking: ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #2563eb;">New Booking Details</h2>
          <p><strong>Patient Name:</strong> ${name}</p>
          <p><strong>Phone Number:</strong> ${phone}</p>
          <p><strong>Dental Issue:</strong> ${problem || 'Not specified'}</p>
          <p><strong>Service:</strong> ${service || 'General Consultation'}</p>
          <p><strong>Selected Slot:</strong> ${slot || 'To be confirmed'}</p>
          <hr style="border: 1px solid #eee; margin: 20px 0;" />
          <p style="font-size: 12px; color: #666;">This is an automated notification from your DentCare AI Assistant.</p>
        </div>
      `
    });

    if (emailResponse.error) {
      console.error("Resend Response Error:", emailResponse.error);
    } else {
      console.log("Resend Success Response:", emailResponse.data);
    }

    return NextResponse.json({ 
      success: true, 
      message: "Sarah, tell the patient their booking is confirmed and we've sent the details to the clinic." 
    });

  } catch (error) {
    console.error("Booking API Error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
