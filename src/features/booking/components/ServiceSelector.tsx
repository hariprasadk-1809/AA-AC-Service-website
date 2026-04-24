'use client'
import { Wrench, Sparkles, ShieldCheck, Droplets } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const SERVICES = [
  { id: 'repair',    label: 'AC Repair',          icon: Wrench      },
  { id: 'cleaning',  label: 'AC Service/Cleaning', icon: Sparkles    },
  { id: 'amc',       label: 'AMC Plan',            icon: ShieldCheck },
  { id: 'gas-refill',label: 'Gas Refilling',       icon: Droplets    },
]

interface ServiceSelectorProps {
  value:    string
  onChange: (value: string) => void
}

export function ServiceSelector({ value, onChange }: ServiceSelectorProps) {
  return (
    <div className="grid grid-cols-2 gap-3">
      {SERVICES.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          type="button"
          onClick={() => onChange(id)}
          className={cn(
            'flex flex-col items-center gap-2 p-4 rounded-xl border-2 transition-all duration-200 text-center',
            value === id
              ? 'border-brand-accent bg-brand-light text-brand-dark2'
              : 'border-gray-200 bg-white text-text-secondary hover:border-brand-accentH'
          )}
        >
          <Icon className={cn('w-6 h-6', value === id ? 'text-brand-accent' : 'text-text-muted')} />
          <span className="font-heading font-semibold text-xs">{label}</span>
        </button>
      ))}
    </div>
  )
}
