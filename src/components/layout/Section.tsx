import { cn } from '@/lib/utils/cn'

interface SectionProps {
  children:   React.ReactNode
  className?: string
  id?:        string
  alt?:       boolean
}

export function Section({ children, className, id, alt = false }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        'py-20 px-4',
        alt ? 'bg-brand-light' : 'bg-white',
        className
      )}
    >
      {children}
    </section>
  )
}

interface SectionHeaderProps {
  eyebrow?:   string
  title:      string
  subtitle?:  string
  center?:    boolean
  light?:     boolean
}

export function SectionHeader({ eyebrow, title, subtitle, center = true, light = false }: SectionHeaderProps) {
  return (
    <div className={cn('mb-14', center && 'text-center')}>
      {eyebrow && (
        <span className={cn(
          'inline-block text-xs font-bold uppercase tracking-widest mb-3 font-heading',
          light ? 'text-brand-accentH' : 'text-brand-accent'
        )}>
          {eyebrow}
        </span>
      )}
      <h2 className={cn(
        'text-3xl md:text-4xl font-bold font-heading leading-tight',
        light ? 'text-white' : 'text-text-primary'
      )}>
        {title}
      </h2>
      {subtitle && (
        <p className={cn(
          'mt-4 text-lg max-w-2xl font-body',
          center && 'mx-auto',
          light ? 'text-white/80' : 'text-text-secondary'
        )}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
