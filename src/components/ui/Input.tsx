'use client'

import { forwardRef, InputHTMLAttributes, LabelHTMLAttributes } from 'react'
import { cn } from '@/lib/utils'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  error?: string
  hint?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, hint, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className={cn(
              'block text-sm font-medium text-fg mb-1.5 transition-colors',
              'peer-focus-within:text-accent'
            )}
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full bg-bg-elevated border border-border text-fg placeholder-fg-subtle',
            'rounded-lg px-4 py-3 text-base',
            'transition-all duration-200',
            'hover:border-border-hover',
            'focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            'peer',
            error && 'border-danger focus:ring-danger',
            className
          )}
          aria-invalid={error ? 'true' : 'false'}
          aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
          {...props}
        />
        {error && (
          <p id={`${inputId}-error`} className="mt-1.5 text-sm text-danger flex items-center gap-1">
            <svg className="w-4 h-4 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
            {error}
          </p>
        )}
        {hint && !error && (
          <p id={`${inputId}-hint`} className="mt-1.5 text-sm text-fg-subtle">{hint}</p>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'

export { Input }

export interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn('block text-sm font-medium text-fg mb-1.5', className)}
      {...props}
    >
      {children}
    </label>
  )
)

Label.displayName = 'Label'