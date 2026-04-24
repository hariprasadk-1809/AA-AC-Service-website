'use client'
import { useEffect } from 'react'
import { Button } from '@/components/ui/Button'
import { AlertTriangle, Phone } from 'lucide-react'
import { SITE } from '@/lib/constants/site'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-10 text-center space-y-6">
        <div className="w-16 h-16 rounded-full bg-red-50 flex items-center justify-center mx-auto">
          <AlertTriangle className="w-8 h-8 text-red-500" />
        </div>

        <div>
          <h1 className="font-heading font-bold text-2xl text-text-primary mb-2">
            Something went wrong
          </h1>
          <p className="font-body text-text-secondary text-sm">
            We hit an unexpected error. Please try again or contact us directly if the issue persists.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Button variant="primary" onClick={reset} className="w-full">
            Try Again
          </Button>
          <a href={`tel:${SITE.phone}`}>
            <Button variant="outline" className="w-full gap-2">
              <Phone className="w-4 h-4" />
              Call Us: {SITE.phoneDisplay}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
