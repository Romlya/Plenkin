import { Container } from '@/components/ui/Container'
import { Card } from '@/components/ui/Card'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
  canonical: '/privacy',
  title: 'Политика конфиденциальности — ПЛЕНКИН',
  description: 'Политика обработки персональных данных компании ПЛЕНКИН',
})

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-32">
      <section className="py-16 bg-gradient-to-b from-bg to-bg-elevated">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold text-fg mb-6" style={{ fontFamily: 'var(--font-display)' }}>
              Политика конфиденциальности
            </h1>
            <p className="text-fg-muted">Действует с 1 января 2025 года</p>
          </div>
        </Container>
      </section>

      <section className="py-16 bg-bg">
        <Container size="md">
          <div className="prose prose-invert max-w-none space-y-6">
            <Card variant="default" className="p-8 space-y-6">
              <div>
                <h2 className="text-xl font-bold text-fg mb-3">1. Общие положения</h2>
                <p className="text-fg-muted leading-relaxed text-sm">
                  Настоящая Политика обработки персональных данных составлена в соответствии с требованиями
                  Федерального закона от 27.07.2006 № 152-ФЗ «О персональных данных» и определяет порядок обработки
                  персональных данных и меры по обеспечению безопасности персональных данных, предпринимаемые
                  компанией ПЛЕНКИН (далее — Оператор).
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-fg mb-3">2. Какие данные мы собираем</h2>
                <ul className="space-y-2 text-fg-muted text-sm">
                  <li>— Имя, фамилия</li>
                  <li>— Контактный телефон</li>
                  <li>— Email-адрес</li>
                  <li>— Информация об объекте (площадь, адрес, тип остекления)</li>
                  <li>— Данные из калькулятора стоимости</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-fg mb-3">3. Цели обработки</h2>
                <ul className="space-y-2 text-fg-muted text-sm">
                  <li>— Обработка заявок и обращений</li>
                  <li>— Предоставление информации об услугах</li>
                  <li>— Подготовка коммерческих предложений</li>
                  <li>— Запись на бесплатный выезд замерщика</li>
                  <li>— Заключение и исполнение договоров</li>
                </ul>
              </div>

              <div>
                <h2 className="text-xl font-bold text-fg mb-3">4. Хранение и защита</h2>
                <p className="text-fg-muted leading-relaxed text-sm">
                  Оператор обеспечивает сохранность персональных данных и принимает все возможные меры,
                  исключающие доступ к персональным данным неуполномоченных лиц. Персональные данные
                  хранятся не дольше, чем это необходимо для целей, для которых они были собраны.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-fg mb-3">5. Права субъекта данных</h2>
                <p className="text-fg-muted leading-relaxed text-sm">
                  Вы вправе в любой момент отозвать согласие на обработку персональных данных,
                  направив письмо на адрес plenkininfo@yandex.ru. Мы удалим ваши данные в течение
                  30 дней с момента получения отзыва согласия.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-bold text-fg mb-3">6. Контакты</h2>
                <p className="text-fg-muted text-sm">
                  По вопросам обработки персональных данных: <a href="mailto:plenkininfo@yandex.ru" className="text-accent">plenkininfo@yandex.ru</a><br />
                  Телефон: <a href="tel:+79857801375" className="text-accent">+7 985 780 13 75</a>
                </p>
              </div>
            </Card>
          </div>
        </Container>
      </section>
    </div>
  )
}