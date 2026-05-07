import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, email, goal } = body;

    if (!name || !email) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Insert into Supabase waitlist table
    const { error: dbError } = await supabase.from("waitlist").insert([
      {
        name,
        email,
        goal: goal || null,
      },
    ]);

    if (dbError) {
      // Duplicate email — still show success to user
      if (dbError.code === "23505") {
        return NextResponse.json({ success: true, duplicate: true });
      }
      console.error("Supabase error:", dbError);
      return NextResponse.json({ error: "Database error" }, { status: 500 });
    }

    // Send welcome email if Resend is configured
    if (process.env.RESEND_API_KEY) {
      const firstName = name.split(" ")[0];
      await resend.emails.send({
        from: "Krank <waitlist@krankinc.com>",
        to: email,
        subject: `${firstName}, you're in. The leaderboard is forming.`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f5f5f5;padding:40px 20px;">
    <tr>
      <td align="center">
        <table width="560" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:16px;overflow:hidden;">
          <!-- Header -->
          <tr>
            <td style="background:#000000;padding:32px 40px;text-align:center;">
              <table cellpadding="0" cellspacing="0" style="display:inline-table;">
                <tr>
                  <td style="background:#ffffff;border-radius:10px;padding:6px 10px;vertical-align:middle;">
                    <span style="font-size:18px;">⚡</span>
                  </td>
                  <td style="padding-left:10px;vertical-align:middle;">
                    <span style="font-family:Arial,sans-serif;font-weight:900;font-size:22px;letter-spacing:6px;color:#ffffff;text-transform:uppercase;">KRANK</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Body -->
          <tr>
            <td style="padding:48px 40px;">
              <h1 style="margin:0 0 8px;font-size:28px;font-weight:900;color:#000000;line-height:1.2;">
                ${firstName}, you&apos;re on the list.
              </h1>
              <p style="margin:0 0 32px;font-size:16px;color:#666666;line-height:1.6;">
                The leaderboard is forming. You&apos;re one of the first to secure a spot.
              </p>

              <table width="100%" cellpadding="0" cellspacing="0" style="background:#f9f9f9;border-radius:12px;margin-bottom:32px;">
                <tr>
                  <td style="padding:24px;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:700;text-transform:uppercase;letter-spacing:2px;color:#999999;">What to expect</p>
                    <table cellpadding="0" cellspacing="0" width="100%">
                      <tr>
                        <td style="padding:8px 0;font-size:15px;color:#000000;">
                          <span style="color:#22c55e;font-weight:700;margin-right:8px;">✓</span> Beta access invitation (you&apos;ll be first)
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:15px;color:#000000;">
                          <span style="color:#22c55e;font-weight:700;margin-right:8px;">✓</span> Founding competitor status — permanently lower fees
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:15px;color:#000000;">
                          <span style="color:#22c55e;font-weight:700;margin-right:8px;">✓</span> Exclusive founding member badge in-app
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:8px 0;font-size:15px;color:#000000;">
                          <span style="color:#22c55e;font-weight:700;margin-right:8px;">✓</span> First look at challenge types before public launch
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="margin:0 0 16px;font-size:15px;color:#444444;line-height:1.7;">
                In the meantime — keep training. When Krank launches, your Apple Watch, Oura Ring, Garmin, or any device connected to Apple Health will automatically track your performance.
              </p>
              <p style="margin:0 0 32px;font-size:15px;color:#444444;line-height:1.7;">
                No logging. No disputes. Just results.
              </p>

              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background:#000000;border-radius:8px;padding:14px 28px;text-align:center;">
                    <span style="font-size:15px;font-weight:700;color:#ffffff;">Compete. Perform. Win real money.</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
          <!-- Footer -->
          <tr>
            <td style="padding:24px 40px;border-top:1px solid #eeeeee;text-align:center;">
              <p style="margin:0;font-size:13px;color:#999999;">
                Krank Inc. · You&apos;re receiving this because you joined the waitlist at krankinc.com
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
        `.trim(),
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Waitlist error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
