import { createHash } from 'crypto'
import { NextRequest, NextResponse } from 'next/server'

const PIXEL_ID = process.env.FB_PIXEL_ID
const ACCESS_TOKEN = process.env.FB_ACCESS_TOKEN
const API_VERSION = 'v19.0'

function hash(value: string): string {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex')
}

function normalizePhone(phone: string): string {
  return phone.replace(/\D/g, '')
}

export async function POST(req: NextRequest) {
  if (!PIXEL_ID || !ACCESS_TOKEN) {
    return NextResponse.json({ error: 'CAPI not configured' }, { status: 500 })
  }

  const { eventName, email, phone, eventSourceUrl, customData } = await req.json()

  const userData: Record<string, string[]> = {}
  if (email) userData.em = [hash(email)]
  if (phone) userData.ph = [hash(normalizePhone(phone))]

  const ip = req.headers.get('x-forwarded-for')?.split(',')[0] ?? req.headers.get('x-real-ip')
  if (ip) userData.client_ip_address = [ip]

  const userAgent = req.headers.get('user-agent')
  if (userAgent) userData.client_user_agent = [userAgent]

  const payload = {
    data: [
      {
        event_name: eventName,
        event_time: Math.floor(Date.now() / 1000),
        action_source: 'website',
        event_source_url: eventSourceUrl ?? 'https://surgsolutions.online',
        user_data: userData,
        ...(customData ? { custom_data: customData } : {}),
      },
    ],
  }

  const res = await fetch(
    `https://graph.facebook.com/${API_VERSION}/${PIXEL_ID}/events?access_token=${ACCESS_TOKEN}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    }
  )

  const data = await res.json()
  if (!res.ok) {
    console.error('[CAPI] Error:', data)
    return NextResponse.json({ error: data }, { status: 502 })
  }

  return NextResponse.json({ ok: true, events_received: data.events_received })
}
