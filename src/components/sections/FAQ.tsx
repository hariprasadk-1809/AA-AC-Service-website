'use client'
import { useState } from 'react'
import { Plus, Minus, HelpCircle } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { cn } from '@/lib/utils/cn'

const FAQS = [
  {
    q: 'What types of commercial AC systems do you service?',
    a: 'We service all commercial AC types — split systems, cassette units, ducted central AC, VRF/VRV systems, chiller plants, and AHUs. We cover all major brands including Daikin, Voltas, LG, Samsung, Carrier, Blue Star, Hitachi, and Trane.',
    category: 'Services',
  },
  {
    q: 'How quickly can you respond to an emergency breakdown?',
    a: 'Our target response time is 2 hours across Chennai. For AMC Premium clients, we target 1-hour response. We operate 7 days a week, 8 AM–8 PM as standard, with emergency after-hours support available for AMC clients.',
    category: 'Response',
  },
  {
    q: 'Do you work on weekends and public holidays?',
    a: 'Yes. Commercial properties cannot afford planned downtime. We operate Monday–Sunday including public holidays for both scheduled maintenance and emergency calls.',
    category: 'Hours',
  },
  {
    q: 'Is there a warranty on repairs?',
    a: 'All repair work carries a 30-day service warranty. Parts warranty depends on the manufacturer — typically 3–12 months for genuine parts. We provide a written service report for every job.',
    category: 'Warranty',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept bank transfer, UPI (GPay, PhonePe, Paytm), and cheque for corporate clients. AMC contracts can be invoiced monthly, quarterly, or annually based on your preference.',
    category: 'Payment',
  },
  {
    q: 'Can you handle multi-unit properties under a single AMC contract?',
    a: 'Absolutely — our AMC plans are designed for multi-unit commercial properties. We provide a single contract covering all your AC units, with volume discounts from 10 units and above. Contact us for a custom multi-unit quote.',
    category: 'AMC',
  },
]

function FAQItem({ faq, index, isOpen, onToggle }: {
  faq: typeof FAQS[0]
  index: number
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        'rounded-2xl border-2 transition-all duration-300 overflow-hidden',
        isOpen
          ? 'border-brand-accent bg-white shadow-card-hover'
          : 'border-transparent bg-white shadow-card hover:border-brand-accentH/40 hover:shadow-card-hover'
      )}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start gap-4 px-6 py-5 text-left"
        aria-expanded={isOpen}
      >
        {/* Number badge */}
        <span className={cn(
          'flex items-center justify-center w-8 h-8 rounded-full text-xs font-heading font-bold shrink-0 mt-0.5 transition-colors',
          isOpen ? 'bg-brand-accent text-white' : 'bg-brand-light text-brand-accent'
        )}>
          {String(index + 1).padStart(2, '0')}
        </span>

        <span className="flex-1 font-heading font-semibold text-text-primary text-sm md:text-base leading-snug">
          {faq.q}
        </span>

        {/* Toggle icon */}
        <span className={cn(
          'flex items-center justify-center w-8 h-8 rounded-full shrink-0 transition-colors',
          isOpen ? 'bg-brand-accent text-white' : 'bg-brand-light text-brand-accent'
        )}>
          {isOpen
            ? <Minus className="w-4 h-4" />
            : <Plus className="w-4 h-4" />
          }
        </span>
      </button>

      {/* Answer */}
      <div className={cn(
        'overflow-hidden transition-all duration-400',
        isOpen ? 'max-h-96' : 'max-h-0'
      )}>
        <div className="px-6 pb-6 pl-[4.5rem]">
          <div className="h-px bg-brand-light mb-4" />
          <p className="font-body text-text-secondary text-sm leading-relaxed">
            {faq.a}
          </p>
          {/* Category tag */}
          <span className="inline-block mt-3 text-[11px] font-heading font-bold uppercase tracking-widest text-brand-accent bg-brand-light px-2.5 py-1 rounded-full">
            {faq.category}
          </span>
        </div>
      </div>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <Section id="faq" className="bg-gradient-to-b from-brand-offwhite to-white">
      <PageWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

          {/* Left: heading + CTA */}
          <div className="lg:sticky lg:top-28">
            <span className="inline-block text-xs font-bold uppercase tracking-widest text-brand-accent mb-3 font-heading">
              FAQ
            </span>
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-text-primary leading-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="font-body text-text-secondary text-base leading-relaxed mb-8">
              Everything you need to know about our commercial AC services. Can&apos;t find the answer? Just call us.
            </p>

            {/* Help card */}
            <div className="bg-brand-dark rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-accent flex items-center justify-center shrink-0">
                  <HelpCircle className="w-5 h-5 text-white" />
                </div>
                <p className="font-heading font-bold text-base">Still have questions?</p>
              </div>
              <p className="font-body text-white/70 text-sm mb-4 leading-relaxed">
                Our team is available Mon–Sun, 8 AM–8 PM. We&apos;ll respond within 2 hours.
              </p>
              <a
                href="tel:+919956433497"
                className="block w-full text-center py-3 rounded-xl bg-brand-accent hover:bg-brand-accentM transition-colors font-heading font-semibold text-white text-sm"
              >
                Call +91 99564 33497
              </a>
            </div>
          </div>

          {/* Right: FAQ list */}
          <div className="lg:col-span-2 space-y-3">
            {FAQS.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </PageWrapper>
    </Section>
  )
}
