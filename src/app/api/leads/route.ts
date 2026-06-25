import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

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

    console.log('New lead:', leadData)

    const emailUser = process.env.EMAIL_SERVER_USER
    const emailPass = process.env.EMAIL_SERVER_PASSWORD
    const emailTo = process.env.EMAIL_TO || emailUser
    const emailFrom = process.env.EMAIL_FROM || emailUser

    if (emailUser && emailPass) {
      const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_SERVER_HOST || 'smtp.yandex.ru',
        port: Number(process.env.EMAIL_SERVER_PORT) || 465,
        secure: true,
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      })

      const calculatorSection = calculatorData
        ? `
        <h3 style="margin: 20px 0 10px; color: #e8b42a;">Данные калькулятора:</h3>
        <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
          <tr><td style="padding: 4px 0; color: #a1a1aa;">Тип плёнки:</td><td style="padding: 4px 0;">${calculatorData.filmType || '—'}</td></tr>
          <tr><td style="padding: 4px 0; color: #a1a1aa;">Площадь:</td><td style="padding: 4px 0;">${calculatorData.area || '—'} м²</td></tr>
          <tr><td style="padding: 4px 0; color: #a1a1aa;">Высота:</td><td style="padding: 4px 0;">${calculatorData.height || '—'}</td></tr>
          <tr><td style="padding: 4px 0; color: #a1a1aa;">Срочность:</td><td style="padding: 4px 0;">${calculatorData.urgency || '—'}</td></tr>
          <tr><td style="padding: 4px 0; color: #a1a1aa;">Стоимость:</td><td style="padding: 4px 0; color: #e8b42a; font-weight: bold;">${calculatorData.priceMin?.toLocaleString() || '—'} — ${calculatorData.priceMax?.toLocaleString() || '—'} ₽</td></tr>
        </table>`
        : ''

      const html = `
        <div style="background: #0a0a0b; padding: 24px; font-family: Arial, sans-serif; color: #fafafa;">
          <div style="max-width: 600px; margin: 0 auto; background: #18181b; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden;">
            <div style="background: #e8b42a; padding: 16px 24px;">
              <span style="font-size: 20px; font-weight: bold; color: #0a0a0b;">ПЛЕНКИН — новая заявка</span>
            </div>
            <div style="padding: 24px;">
              <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
                <tr><td style="padding: 8px 0; color: #a1a1aa; width: 120px;">Имя:</td><td style="padding: 8px 0; font-weight: bold;">${name}</td></tr>
                <tr><td style="padding: 8px 0; color: #a1a1aa;">Телефон:</td><td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #e8b42a; text-decoration: none; font-weight: bold;">${phone}</a></td></tr>
                ${email ? `<tr><td style="padding: 8px 0; color: #a1a1aa;">Email:</td><td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #e8b42a; text-decoration: none;">${email}</a></td></tr>` : ''}
                <tr><td style="padding: 8px 0; color: #a1a1aa;">Тема:</td><td style="padding: 8px 0;">${subject || 'Общая заявка'}</td></tr>
                <tr><td style="padding: 8px 0; color: #a1a1aa;">Источник:</td><td style="padding: 8px 0;">${source || 'website'}</td></tr>
                <tr><td style="padding: 8px 0; color: #a1a1aa;">ID заявки:</td><td style="padding: 8px 0; font-family: monospace; font-size: 12px;">${leadId}</td></tr>
                <tr><td style="padding: 8px 0; color: #a1a1aa;">Время:</td><td style="padding: 8px 0;">${new Date(createdAt).toLocaleString('ru-RU')}</td></tr>
              </table>
              ${calculatorSection}
              ${message ? `<h3 style="margin: 20px 0 10px; color: #e8b42a;">Сообщение:</h3><p style="color: #a1a1aa; line-height: 1.6;">${message}</p>` : ''}
            </div>
          </div>
        </div>`

      await transporter.sendMail({
        from: `"ПЛЕНКИН — заявка" <${emailFrom}>`,
        to: emailTo,
        subject: `Новая заявка: ${name} — ${phone}`,
        html,
      })

      if (email) {
        await transporter.sendMail({
          from: `"ПЛЕНКИН" <${emailFrom}>`,
          to: email,
          subject: 'Ваша заявка принята — ПЛЕНКИН',
          html: `
            <div style="background: #0a0a0b; padding: 24px; font-family: Arial, sans-serif; color: #fafafa;">
              <div style="max-width: 600px; margin: 0 auto; background: #18181b; border-radius: 12px; padding: 32px;">
                <h1 style="color: #e8b42a; font-size: 22px; margin: 0 0 16px;">Заявка принята!</h1>
                <p style="color: #a1a1aa; line-height: 1.6;">Здравствуйте, ${name}!</p>
                <p style="color: #a1a1aa; line-height: 1.6;">Мы получили вашу заявку и свяжемся с вами в течение 15 минут.</p>
                <p style="color: #a1a1aa; line-height: 1.6;">Телефон для связи: <a href="tel:+79857801375" style="color: #e8b42a;">+7 985 780 13 75</a></p>
                <p style="color: #71717a; font-size: 13px; margin-top: 24px;">С уважением,<br>команда ПЛЕНКИН</p>
              </div>
            </div>`,
        }).catch(() => {})
      }
    } else {
      console.log('EMAIL_SERVER_USER not set — skipping email send. Lead logged only.')
    }

    return NextResponse.json({
      success: true,
      leadId,
      message: 'Заявка принята. Мы свяжемся с вами в течение 15 минут.',
    })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Произошла ошибка. Попробуйте ещё раз или позвоните нам.' },
      { status: 500 }
    )
  }
}