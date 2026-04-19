import { NextRequest, NextResponse } from 'next/server'

interface ApplyBody {
  name: string
  email: string
  location?: string
  motivation: string
  ordeal: string
  referral?: string
}

export async function POST(req: NextRequest) {
  try {
    const body: ApplyBody = await req.json()

    // Basic validation
    if (!body.name || !body.email || !body.motivation || !body.ordeal) {
      return NextResponse.json(
        { error: 'Required fields missing: name, email, motivation, ordeal' },
        { status: 400 }
      )
    }

    // Email format check
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    // ─── Forward to webhook / CRM / email service ────────────────
    // Example: POST to a Notion database, Resend, or any webhook
    // Uncomment and configure as needed:
    //
    // const webhookUrl = process.env.APPLY_WEBHOOK_URL
    // if (webhookUrl) {
    //   await fetch(webhookUrl, {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({
    //       name: body.name,
    //       email: body.email,
    //       location: body.location ?? '',
    //       motivation: body.motivation,
    //       ordeal: body.ordeal,
    //       referral: body.referral ?? '',
    //       submittedAt: new Date().toISOString(),
    //     }),
    //   })
    // }
    //
    // Example: send email via Resend
    // const resend = new Resend(process.env.RESEND_API_KEY)
    // await resend.emails.send({
    //   from: 'VexVor <forge@vexvor.com>',
    //   to: body.email,
    //   subject: 'Your Application to the Forge — VexVor',
    //   html: `<p>Declaration received, ${body.name}. The Council of Forgers will review your application within 72 hours.</p>`,
    // })

    console.log('[VexVor Apply]', {
      name: body.name,
      email: body.email,
      ordeal: body.ordeal,
      submittedAt: new Date().toISOString(),
    })

    return NextResponse.json({ success: true }, { status: 200 })
  } catch (err) {
    console.error('[VexVor Apply] Error:', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
