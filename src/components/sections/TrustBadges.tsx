'use client'
import { useEffect, useRef, useState } from 'react'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SITE } from '@/lib/constants/site'

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          const duration = 1200
          const steps = 60
          const increment = target / steps
          let current = 0
          const timer = setInterval(() => {
            current += increment
            if (current >= target) {
              setCount(target)
              clearInterval(timer)
            } else {
              setCount(Math.floor(current))
            }
          }, duration / steps)
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function TrustBadges() {
  return (
    <section className="bg-white py-16">
      <PageWrapper>
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {SITE.stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-bold text-4xl md:text-5xl text-brand-dark2 mb-2">
                <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="font-body text-text-secondary text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Client strip */}
        <div className="border-t border-brand-light pt-12">
          <p className="text-center text-xs font-heading font-bold uppercase tracking-widest text-text-muted mb-8">
            Trusted By Chennai&apos;s Leading Commercial Properties
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
            {SITE.clients.map((client) => (
              <div
                key={client}
                className="px-6 py-3 rounded-xl bg-brand-light border border-brand-accentH/20 text-brand-dark2 font-heading font-bold text-sm tracking-wide"
              >
                {client}
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </section>
  )
}
