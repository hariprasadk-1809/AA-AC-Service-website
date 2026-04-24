import Link from 'next/link'
import { Snowflake, Home, Phone } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants/site'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-dark to-brand-dark2 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-8">
        <Snowflake className="w-16 h-16 text-brand-accentH mx-auto animate-spin" style={{ animationDuration: '6s' }} />

        <div>
          <h1 className="font-heading font-bold text-8xl text-white/20 mb-4">404</h1>
          <h2 className="font-heading font-bold text-2xl text-white mb-3">
            Page Not Found
          </h2>
          <p className="font-body text-white/70 text-sm">
            This page seems to have gone cold. Head back to the homepage or call us directly.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <Link href="/">
            <Button variant="white" className="w-full gap-2">
              <Home className="w-4 h-4" />
              Back to Homepage
            </Button>
          </Link>
          <a href={`tel:${SITE.phone}`}>
            <Button className="w-full gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20">
              <Phone className="w-4 h-4" />
              {SITE.phoneDisplay}
            </Button>
          </a>
        </div>
      </div>
    </div>
  )
}
