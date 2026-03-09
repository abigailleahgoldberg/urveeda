import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Forward to VoC CRM
    await fetch("https://www.thevoiceofcash.com/api/crm/prospect", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        business_name: body.company || body.name,
        contact_name: body.name,
        email: body.email,
        source: "urveeda_contact",
        assigned_to: "david",
        intake_context: {
          message: body.message,
          s4_stage_interest: body.stage,
          source_url: "urveeda.com",
        },
      }),
    });

    // Send email notification via Brevo
    const brevoKey = process.env.BREVO_API_KEY;
    if (brevoKey) {
      await fetch("https://api.brevo.com/v3/smtp/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "api-key": brevoKey,
        },
        body: JSON.stringify({
          sender: { name: "UrVeeda", email: "noreply@urveeda.com" },
          to: [{ email: "cash@thevoiceofcash.com" }],
          subject: `New UrVeeda Lead: ${body.company || body.name}`,
          htmlContent: `<h3>New UrVeeda inquiry</h3>
            <p><strong>Name:</strong> ${body.name}</p>
            <p><strong>Email:</strong> ${body.email}</p>
            <p><strong>Company:</strong> ${body.company || "N/A"}</p>
            <p><strong>S4E Stage Interest:</strong> ${body.stage || "N/A"}</p>
            <p><strong>Message:</strong> ${body.message || "N/A"}</p>
            <hr/>
            <p style="color:#888;font-size:12px;">Source: urveeda.com contact form</p>`,
        }),
      });
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Failed to submit" }, { status: 500 });
  }
}
