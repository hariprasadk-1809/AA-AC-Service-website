import { cn } from '@/lib/utils/cn'

interface CardProps {
  children:  React.ReactNode
  className?: string
  hover?:    boolean
  onClick?:  () => void
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        'bg-white rounded-card shadow-card p-6',
        hover &&
          'cursor-pointer transition-all duration-300 hover:shadow-card-hover hover:-translate-y-1',
        className
      )}
    >
      {children}
    </div>
  )
}
