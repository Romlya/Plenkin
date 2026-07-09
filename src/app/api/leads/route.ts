import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const LEADS_FILE = path.join(process.cwd(), 'leads.json')

const rateLimitMap = new Map<string, { count: number; resetTime: number }>()
const RATE_LIMIT_WINDOW = 60 * 60 * 1000
const RATE_LIMIT_MAX = 5

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for')
  if (forwarded) return forwarded.split(',')[0].trim()
  const realIp = request.headers.get('x-real-ip')
  if (realIp) return realIp
  return 'unknown'
}

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW })
    return true
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return false
  }

  entry.count++
  return true
}

function validatePhone(phone: string): boolean {
  const cleaned = phone.replace(/[\s\-\(\)]/g, '')
  return /^\+?\d{10,15}$/.test(cleaned)
}

function sanitize(str: string, maxLength: number = 1000): string {
  return str.trim().slice(0, maxLength)
}

function saveLeadToFile(leadData: Record<string, unknown>) {
  try {
    let leads: unknown[] = []
    if (fs.existsSync(LEADS_FILE)) {
      leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
    }
    leads.push(leadData)
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2))
    console.log(`[LEAD] Saved to leads.json (${leads.length} total)`)
  } catch (err) {
    console.error('[LEAD] Failed to save file:', err)
  }
}

export async function POST(request: NextRequest) {
  try {
    const ip = getClientIp(request)

    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: 'Слишком много заявок. Попробуйте позже или позвоните нам.' },
        { status: 429 }
      )
    }

    const body = await request.json()
    const { name, phone, email, subject, message, source, calculatorData, website } = body

    if (website) {
      return NextResponse.json({ success: true, message: 'Заявка принята.' })
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    const sanitizedName = sanitize(name, 100)
    const sanitizedPhone = sanitize(phone, 20)

    if (!validatePhone(sanitizedPhone)) {
      return NextResponse.json(
        { error: 'Неверный формат телефона' },
        { status: 400 }
      )
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const createdAt = new Date().toISOString()

    const leadData = {
      id: leadId,
      name: sanitizedName,
      phone: sanitizedPhone,
      email: email ? sanitize(email, 200) : '',
      subject: subject ? sanitize(subject, 200) : 'Общая заявка',
      message: message ? sanitize(message, 2000) : '',
      source: source ? sanitize(source, 100) : 'website',
      calculatorData: calculatorData || null,
      createdAt,
      status: 'new',
      ip,
    }

    console.log(`[LEAD] New: ${leadId} | ${sanitizedName} | ${sanitizedPhone} | IP: ${ip}`)

    saveLeadToFile(leadData)

    const emailUser = process.env.EMAIL_SERVER_USER
    const emailPass = process.env.EMAIL_SERVER_PASSWORD
    const emailTo = process.env.EMAIL_TO || emailUser
    const emailFrom = process.env.EMAIL_FROM || emailUser

    if (emailUser && emailPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: process.env.EMAIL_SERVER_HOST || 'smtp.yandex.ru',
          port: Number(process.env.EMAIL_SERVER_PORT) || 465,
          secure: true,
          auth: { user: emailUser, pass: emailPass },
        })

        const calc = calculatorData
          ? `<h3 style="margin:20px 0 10px;color:#e8b42a">Калькулятор:</h3><p style="color:#a1a1aa">Площадь: ${calculatorData.area} м² | Стоимость: ${calculatorData.priceMin?.toLocaleString()} — ${calculatorData.priceMax?.toLocaleString()} ₽</p>`
          : ''

        await transporter.sendMail({
          from: `"ПЛЕНКИН" <${emailFrom}>`,
          to: emailTo,
          subject: `Заявка: ${sanitizedName} — ${sanitizedPhone}`,
          html: `<div style="background:#0a0a0b;padding:24px;font-family:Arial;color:#fafafa"><div style="max-width:600px;margin:0 auto;background:#18181b;border-radius:12px;overflow:hidden"><div style="background:#e8b42a;padding:16px 24px;color:#0a0a0b;font-size:20px;font-weight:bold">ПЛЕНКИН — новая заявка</div><div style="padding:24px"><p><b>Имя:</b> ${sanitizedName}<br><b>Телефон:</b> <a href="tel:${sanitizedPhone}" style="color:#e8b42a">${sanitizedPhone}</a><br>${email ? `<b>Email:</b> <a href="mailto:${sanitize(email, 200)}" style="color:#e8b42a">${sanitize(email, 200)}</a><br>` : ''}<b>Тема:</b> ${subject ? sanitize(subject, 200) : 'Общая заявка'}<br><b>Источник:</b> ${source ? sanitize(source, 100) : 'website'}<br><b>ID:</b> ${leadId}<br><b>Время:</b> ${new Date(createdAt).toLocaleString('ru-RU')}</p>${calc}${message ? `<p style="color:#a1a1aa"><b>Сообщение:</b><br>${sanitize(message, 2000)}</p>` : ''}</div></div></div>`,
        })
        console.log(`[LEAD] Email sent to ${emailTo}`)

        if (email) {
          const sanitizedEmail = sanitize(email, 200)
          await transporter.sendMail({
            from: `"ПЛЕНКИН" <${emailFrom}>`,
            to: sanitizedEmail,
            subject: 'Заявка принята — ПЛЕНКИН',
            html: `<div style="background:#0a0a0b;padding:24px;font-family:Arial;color:#fafafa"><div style="max-width:600px;margin:0 auto;background:#18181b;border-radius:12px;padding:32px"><h1 style="color:#e8b42a;font-size:22px">Заявка принята!</h1><p style="color:#a1a1aa">Здравствуйте, ${sanitizedName}! Мы свяжемся с вами в течение 15 минут.</p><p style="color:#a1a1aa">Телефон: <a href="tel:+79857801375" style="color:#e8b42a">+7 985 780 13 75</a></p></div></div>`,
          }).catch(() => {})
        }
      } catch (emailError) {
        console.error('[LEAD] Email failed:', (emailError as Error).message)
      }
    } else {
      console.log('[LEAD] No SMTP password — saved to file only')
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: 'Заявка принята. Мы свяжемся с вами в течение 15 минут.',
    })
  } catch (error) {
    console.error('[LEAD] Fatal:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка. Попробуйте ещё раз или позвоните нам.' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const authToken = process.env.LEADS_API_TOKEN
    if (authToken) {
      const authHeader = request.headers.get('authorization')
      if (authHeader !== `Bearer ${authToken}`) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
      }
    }

    if (fs.existsSync(LEADS_FILE)) {
      const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
      return NextResponse.json({ count: leads.length, leads })
    }
    return NextResponse.json({ count: 0, leads: [] })
  } catch {
    return NextResponse.json({ count: 0, leads: [] })
  }
}
