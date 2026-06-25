export function JsonLd() {
  const organization = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'ПЛЕНКИН',
    description: 'Комплексный провайдер архитектурных плёнок: противоосколочные, солнцезащитные, декоративные. Москва и МО.',
    url: 'https://plenkin.ru',
    telephone: '+79857801375',
    email: 'plenkininfo@yandex.ru',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Москва',
      addressCountry: 'RU',
    },
    areaServed: 'Москва и Московская область',
  }

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'ПЛЕНКИН',
    image: 'https://plenkin.ru/images/logo.png',
    telephone: '+79857801375',
    email: 'plenkininfo@yandex.ru',
    priceRange: 'от 150 ₽/м²',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Москва',
      addressCountry: 'RU',
    },
    areaServed: 'Москва и Московская область',
    openingHours: 'Mo-Su 09:00-21:00',
  }

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Чем отличается 112 мкм от класса А1?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: '112 мкм — это класс К4 (базовая противоосколочность). Класс А1 (Р2А) требует плёнки 300–336 мкм. Продажа плёнок 56–80 мкм под видом «А1» — фальсификация.',
        },
      },
      {
        '@type': 'Question',
        name: 'Нужны ли решётки при установке бронеплёнки?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'При защитном остеклении классов А1–А2 установка металлических решёток не требуется согласно РД МВД РФ №78 148-94.',
        },
      },
      {
        '@type': 'Question',
        name: 'Какая плёнка нужна для защиты от БПЛА?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Для защиты от осколков при ударах дронов рекомендуются классы Р1А (200 мкм) для жилых и Р2А (300 мкм) для административных зданий.',
        },
      },
      {
        '@type': 'Question',
        name: 'Работаете ли вы по 44-ФЗ и 223-ФЗ?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Да, работаем с юрлицами, НДС, предоставляем договоры с гарантией и сертифицированную продукцию с указанием класса защиты по ГОСТ.',
        },
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  )
}