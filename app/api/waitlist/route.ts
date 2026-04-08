import { NextResponse } from "next/server";
import { Resend } from "resend";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const audienceId = process.env.RESEND_AUDIENCE_ID ?? "";
    const { name, email } = await request.json();

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Add to Resend audience (waitlist)
    await resend.contacts.create({
      email,
      firstName: name ?? "",
      audienceId,
    });

    // Send thank-you email
    await resend.emails.send({
      from: "Nudge <no-reply@account.nudgesidebar.com>",
      to: email,
      subject: "You're in. We'll nudge you when it's ready.",
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 480px; margin: 0 auto; padding: 40px 20px; color: #F5F5F5; background: #0F0F0F;">
          <h1 style="font-size: 24px; margin-bottom: 16px;">Welcome to Nudge${name ? `, ${name}` : ""}</h1>
          <p style="color: #9CA3AF; font-size: 16px; line-height: 1.6;">
            You're on the founding access list. When we launch, you'll be first in line with the best pricing.
          </p>
          <p style="color: #9CA3AF; font-size: 16px; line-height: 1.6; margin-top: 16px;">
            In the meantime, keep losing deals the old-fashioned way. We'll fix that soon.
          </p>
          <p style="color: #6EE7B7; font-size: 14px; margin-top: 32px;">— The Nudge team</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Waitlist signup error:", error);
    return NextResponse.json(
      { error: "Something went wrong. Try again." },
      { status: 500 }
    );
  }
}
