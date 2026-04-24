import { cn } from '@/lib/utils/cn'

interface BadgeProps {
  children:   React.ReactNode
  variant?:   'default' | 'success' | 'warning' | 'error' | 'outline'
  className?: string
}

export function Badge({ children, variant = 'default', className }: BadgeProps) {
  const variants = {
    default: 'bg-brand-light text-brand-dark2 border border-brand-accentH/30',
    success: 'bg-green-50 text-green-700 border border-green-200',
    warning: 'bg-amber-50 text-amber-700 border border-amber-200',
    error:   'bg-red-50 text-red-700 border border-red-200',
    outline: 'bg-transparent text-brand-accent border border-brand-accent',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold font-heading',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
