'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

export function MotionSection({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <section className={className}>
      {children}
    </section>
  )
}

export function MotionStagger({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}

export function MotionItem({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div className={className}>
      {children}
    </div>
  )
}
