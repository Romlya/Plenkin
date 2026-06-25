import Link from 'next/link'
import { cn } from '@/lib/utils'

interface BreadcrumbItem {
  name: string
  href: string
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-sm text-fg-muted mb-8">
      <Link href="/" className="hover:text-accent transition-colors">Главная</Link>
      {items.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="text-fg-subtle">/</span>
          {i === items.length - 1 ? (
            <span className="text-accent">{item.name}</span>
          ) : (
            <Link href={item.href} className="hover:text-accent transition-colors">{item.name}</Link>
          )}
        </div>
      ))}
    </nav>
  )
}