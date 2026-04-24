import { cn } from '@/lib/utils/cn'
import { forwardRef, type InputHTMLAttributes } from 'react'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?:  string
  error?:  string
  hint?:   string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, hint, className, id, ...props }, ref) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, '-')

    return (
      <div className="flex flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-semibold text-text-primary font-heading"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            'w-full px-4 py-3 rounded-lg border text-text-primary font-body text-sm',
            'bg-white placeholder:text-text-muted',
            'transition-all duration-200',
            'focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent',
            error
              ? 'border-status-error focus:ring-status-error'
              : 'border-gray-200 hover:border-brand-accentH',
            className
          )}
          {...props}
        />
        {error && <p className="text-xs text-status-error font-body">{error}</p>}
        {hint && !error && <p className="text-xs text-text-muted font-body">{hint}</p>}
      </div>
    )
  }
)

Input.displayName = 'Input'
