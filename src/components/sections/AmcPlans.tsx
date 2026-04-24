'use client'
import { CheckCircle2, Star } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/Button'
import { formatCurrency } from '@/lib/utils/formatters'

const PLANS = [
  {
    name:      'Basic',
    price:     4999,
    period:    'per unit / year',
    highlight: false,
    desc:      'Ideal for small commercial spaces with 1–5 AC units.',
    features:  [
      '2 preventive maintenance visits/year',
      'Priority response within 4 hours',
      'Filter cleaning included',
      'Basic service report',
      'Phone & WhatsApp support',
    ],
    notIncluded: ['Gas refilling', 'Spare parts'],
  },
  {
    name:      'Standard',
    price:     8999,
    period:    'per unit / year',
    highlight: true,
    desc:      'Our most popular plan for malls with 6–20 AC units.',
    features:  [
      '4 preventive maintenance visits/year',
      'Priority response within 2 hours',
      'Deep coil & filter cleaning',
      'One gas top-up included',
      'Detailed digital service reports',
      'Dedicated account manager',
      'Phone, WhatsApp & email support',
    ],
    notIncluded: ['Major spare parts'],
  },
  {
    name:      'Premium',
    price:     14999,
    period:    'per unit / year',
    highlight: false,
    desc:      'Full coverage for large commercial properties & malls.',
    features:  [
      '6 preventive maintenance visits/year',
      'Emergency response within 1 hour',
      'Complete deep clean each visit',
      'Unlimited gas top-ups',
      'All labour costs covered',
      'Dedicated senior technician',
      '24/7 priority support',
      'Annual system health report',
    ],
    notIncluded: [],
  },
]

export function AmcPlans() {
  const handleEnquire = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="amc-plans" className="bg-gradient-to-b from-brand-dark to-brand-dark2">
      <PageWrapper>
        <SectionHeader
          eyebrow="AMC Packages"
          title="Annual Maintenance Contracts"
          subtitle="Protect your investment. Predictable costs, priority service, zero downtime surprises."
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl p-8 flex flex-col transition-all duration-300 ${
                plan.highlight
                  ? 'bg-white shadow-2xl scale-105'
                  : 'bg-white/10 backdrop-blur-sm border border-white/20'
              }`}
            >
              {/* Popular badge */}
              {plan.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="inline-flex items-center gap-1 bg-brand-accent text-white text-xs font-heading font-bold px-4 py-1.5 rounded-full shadow-lg">
                    <Star className="w-3 h-3 fill-white" /> Most Popular
                  </span>
                </div>
              )}

              {/* Plan name */}
              <h3 className={`font-heading font-bold text-xl mb-1 ${plan.highlight ? 'text-brand-dark' : 'text-white'}`}>
                {plan.name}
              </h3>
              <p className={`font-body text-sm mb-5 ${plan.highlight ? 'text-text-secondary' : 'text-white/70'}`}>
                {plan.desc}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`font-heading font-bold text-4xl ${plan.highlight ? 'text-brand-dark2' : 'text-white'}`}>
                  {formatCurrency(plan.price)}
                </span>
                <span className={`font-body text-sm ml-2 ${plan.highlight ? 'text-text-muted' : 'text-white/60'}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 flex-1 mb-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3">
                    <CheckCircle2 className={`w-4 h-4 mt-0.5 shrink-0 ${plan.highlight ? 'text-brand-accent' : 'text-brand-accentH'}`} />
                    <span className={`font-body text-sm ${plan.highlight ? 'text-text-secondary' : 'text-white/80'}`}>{f}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={plan.highlight ? 'primary' : 'outline'}
                className={`w-full ${!plan.highlight && 'border-white/40 text-white hover:bg-white hover:text-brand-dark'}`}
                onClick={handleEnquire}
              >
                Get This Plan
              </Button>
            </div>
          ))}
        </div>

        <p className="text-center text-white/50 text-sm font-body mt-8">
          * Prices per AC unit. Multi-unit discounts available. Contact us for a custom quote.
        </p>
      </PageWrapper>
    </Section>
  )
}
