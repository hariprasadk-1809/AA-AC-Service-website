'use client'
import { Sun, Cloud, Sunset } from 'lucide-react'
import { cn } from '@/lib/utils/cn'

const SLOTS = [
  { id: 'morning',   label: 'Morning',   time: '8 AM – 12 PM', icon: Sun    },
  { id: 'afternoon', label: 'Afternoon', time: '12 PM – 4 PM', icon: Cloud  },
  { id: 'evening',   label: 'Evening',   time: '4 PM – 7 PM',  icon: Sunset },
]

interface TimeSlotPickerProps {
  value:    string
  onChange: (value: string) => void
}

export function TimeSlotPicker({ value, onChange }: TimeSlotPickerProps) {
  return (
    <div className="grid grid-cols-3 gap-3">
      {SLOTS.map(({ id, label, time, icon: Icon }) => (
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
          <Icon className={cn('w-5 h-5', value === id ? 'text-brand-accent' : 'text-text-muted')} />
          <span className="font-heading font-semibold text-xs">{label}</span>
          <span className="font-body text-[10px] text-text-muted">{time}</span>
        </button>
      ))}
    </div>
  )
}
