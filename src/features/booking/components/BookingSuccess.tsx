'use client'
import { CheckCircle2, MessageCircle, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants/site'

interface BookingSuccessProps {
  bookingId: string
  onReset:   () => void
}

export function BookingSuccess({ bookingId, onReset }: BookingSuccessProps) {
  return (
    <div className="flex flex-col items-center text-center py-10 gap-6 max-w-md mx-auto">
      <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
        <CheckCircle2 className="w-10 h-10 text-green-600" />
      </div>

      <div>
        <h2 className="font-heading font-bold text-2xl text-text-primary mb-2">
          Booking Confirmed!
        </h2>
        <p className="font-body text-text-secondary text-sm">
          Your booking reference is
        </p>
        <p className="font-heading font-bold text-brand-accent text-lg mt-1">
          #{bookingId}
        </p>
      </div>

      <p className="font-body text-text-secondary text-sm leading-relaxed">
        Our team will call you within 2 hours to confirm the visit time.
        For urgent issues, contact us directly.
      </p>

      <div className="flex flex-col gap-3 w-full">
        <a
          href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(`Hi, my booking reference is #${bookingId}`)}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="w-full gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0">
            <MessageCircle className="w-4 h-4" />
            Send Booking to WhatsApp
          </Button>
        </a>
        <a href={`tel:${SITE.phone}`}>
          <Button variant="outline" className="w-full gap-2">
            <Phone className="w-4 h-4" />
            Call Us: {SITE.phoneDisplay}
          </Button>
        </a>
        <Button variant="ghost" onClick={onReset} className="text-text-muted">
          Make Another Booking
        </Button>
      </div>
    </div>
  )
}
