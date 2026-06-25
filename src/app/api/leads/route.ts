import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
import fs from 'fs'
import path from 'path'

const LEADS_FILE = path.join(process.cwd(), 'leads.json')

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
    const body = await request.json()
    const { name, phone, email, subject, message, source, calculatorData } = body

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Имя и телефон обязательны' },
        { status: 400 }
      )
    }

    const leadId = `lead_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
    const createdAt = new Date().toISOString()

    const leadData = {
      id: leadId,
      name,
      phone,
      email: email || '',
      subject: subject || 'Общая заявка',
      message: message || '',
      source: source || 'website',
      calculatorData: calculatorData || null,
      createdAt,
      status: 'new',
    }

    console.log(`[LEAD] New: ${leadId} | ${name} | ${phone}`)

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
          subject: `Заявка: ${name} — ${phone}`,
          html: `<div style="background:#0a0a0b;padding:24px;font-family:Arial;color:#fafafa"><div style="max-width:600px;margin:0 auto;background:#18181b;border-radius:12px;overflow:hidden"><div style="background:#e8b42a;padding:16px 24px;color:#0a0a0b;font-size:20px;font-weight:bold">ПЛЕНКИН — новая заявка</div><div style="padding:24px"><p><b>Имя:</b> ${name}<br><b>Телефон:</b> <a href="tel:${phone}" style="color:#e8b42a">${phone}</a><br>${email ? `<b>Email:</b> <a href="mailto:${email}" style="color:#e8b42a">${email}</a><br>` : ''}<b>Тема:</b> ${subject || 'Общая заявка'}<br><b>Источник:</b> ${source || 'website'}<br><b>ID:</b> ${leadId}<br><b>Время:</b> ${new Date(createdAt).toLocaleString('ru-RU')}</p>${calc}${message ? `<p style="color:#a1a1aa"><b>Сообщение:</b><br>${message}</p>` : ''}</div></div></div>`,
        })
        console.log(`[LEAD] Email sent to ${emailTo}`)

        if (email) {
          await transporter.sendMail({
            from: `"ПЛЕНКИН" <${emailFrom}>`,
            to: email,
            subject: 'Заявка принята — ПЛЕНКИН',
            html: `<div style="background:#0a0a0b;padding:24px;font-family:Arial;color:#fafafa"><div style="max-width:600px;margin:0 auto;background:#18181b;border-radius:12px;padding:32px"><h1 style="color:#e8b42a;font-size:22px">Заявка принята!</h1><p style="color:#a1a1aa">Здравствуйте, ${name}! Мы свяжемся с вами в течение 15 минут.</p><p style="color:#a1a1aa">Телефон: <a href="tel:+79857801375" style="color:#e8b42a">+7 985 780 13 75</a></p></div></div>`,
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

export async function GET() {
  try {
    if (fs.existsSync(LEADS_FILE)) {
      const leads = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf-8'))
      return NextResponse.json({ count: leads.length, leads })
    }
    return NextResponse.json({ count: 0, leads: [] })
  } catch {
    return NextResponse.json({ count: 0, leads: [] })
  }
}