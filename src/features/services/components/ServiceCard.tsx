'use client'
import { Wrench, Sparkles, ShieldCheck, Droplets, ArrowRight, MousePointerClick } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import type { Service } from '../data/services.data'

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  Wrench:      Wrench,
  Sparkles:    Sparkles,
  ShieldCheck: ShieldCheck,
  Droplets:    Droplets,
}

interface ServiceCardProps {
  service:  Service
  onOpen:   (service: Service) => void
  onBook:   (serviceId: string) => void
}

export function ServiceCard({ service, onOpen, onBook }: ServiceCardProps) {
  const Icon = ICONS[service.icon] || Wrench

  return (
    <div
      className="group bg-white rounded-card shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 p-6 cursor-pointer flex flex-col border border-transparent hover:border-brand-accentH/20"
      onClick={() => onOpen(service)}
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-xl bg-brand-light flex items-center justify-center mb-5 group-hover:bg-brand-accent/10 transition-colors">
        <Icon className="w-7 h-7 text-brand-accent" />
      </div>

      {/* Badge */}
      {service.badge && (
        <Badge variant="success" className="mb-3 self-start">{service.badge}</Badge>
      )}

      {/* Title */}
      <h3 className="font-heading font-bold text-lg text-text-primary mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="font-body text-text-secondary text-sm leading-relaxed flex-1 mb-3">
        {service.shortDesc}
      </p>

      {/* Mobile: always visible — Desktop: shows on hover */}
      <div className="mb-4">
        <p className="flex sm:hidden items-center gap-1.5 text-brand-accent text-xs font-heading font-semibold bg-brand-light px-3 py-1.5 rounded-full w-fit">
          <MousePointerClick className="w-3.5 h-3.5 shrink-0" />
          Tap to see more
        </p>
        <p className="hidden sm:flex items-center gap-1.5 text-brand-accent/70 text-xs font-heading font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          <MousePointerClick className="w-3.5 h-3.5 shrink-0" />
          Click to see more details
        </p>
      </div>

      {/* Book button */}
      <button
        onClick={(e) => { e.stopPropagation(); onBook(service.id) }}
        className="w-full flex items-center justify-center gap-2 py-2.5 rounded-lg border-2 border-brand-accent/30 text-brand-accent text-sm font-heading font-semibold hover:bg-brand-accent hover:text-white hover:border-brand-accent transition-all duration-200 group/btn"
      >
        Request Service
        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
      </button>
    </div>
  )
}