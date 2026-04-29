'use client'
import { CheckCircle2 } from 'lucide-react'
import { Modal } from '@/components/ui/Modal'
import { Button } from '@/components/ui/Button'
import { Badge } from '@/components/ui/Badge'
import type { Service } from '../data/services.data'

interface ServiceModalProps {
  service: Service | null
  onClose: () => void
  onBook:  (serviceId: string) => void
}

export function ServiceModal({ service, onClose, onBook }: ServiceModalProps) {
  if (!service) return null

  return (
    <Modal open={!!service} onClose={onClose} size="lg">
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            {service.badge && (
              <Badge variant="success" className="mb-2">{service.badge}</Badge>
            )}
            <h2 className="text-2xl font-bold text-text-primary font-heading">
              {service.title}
            </h2>
          </div>
        </div>

        <p className="text-text-secondary font-body leading-relaxed">{service.longDesc}</p>

        <div>
          <h3 className="font-heading font-bold text-text-primary mb-4">What&apos;s Included</h3>
          <ul className="space-y-3">
            {service.features.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span className="font-body text-text-secondary text-sm">{f}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex gap-3 pt-2">
          <Button
            variant="primary"
            className="flex-1"
            onClick={() => { onBook(service.id); onClose() }}
          >
            Request This Service
          </Button>
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </div>
    </Modal>
  )
}