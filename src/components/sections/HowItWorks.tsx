'use client'
import { Phone, ClipboardList, CheckCircle2, ArrowRight } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'

const STEPS = [
  {
    icon:  Phone,
    step:  '01',
    title: 'Call or WhatsApp Us',
    desc:  'Reach us on +91 99564 33497 or WhatsApp. Describe the issue — our team triages the fault immediately and dispatches the right technician.',
  },
  {
    icon:  ClipboardList,
    step:  '02',
    title: 'On-Site Visit & Diagnosis',
    desc:  'Our certified technician arrives within 2 hours, performs a full system diagnosis, and provides a transparent quote before any work begins.',
  },
  {
    icon:  CheckCircle2,
    step:  '03',
    title: 'Job Done & Certified',
    desc:  'Repair or service is completed to commercial grade standards. You receive a written service report and 30-day warranty on all work.',
  },
]

export function HowItWorks() {
  return (
    <Section id="how-it-works">
      <PageWrapper>
        <SectionHeader
          eyebrow="The Process"
          title="How It Works"
          subtitle="Fast, transparent, and professional — from first call to signed-off job."
        />

        <div className="relative">
          {/* Connector line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-0.5 bg-gradient-to-r from-brand-accentH/20 via-brand-accent to-brand-accentH/20 z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
            {STEPS.map(({ icon: Icon, step, title, desc }, i) => (
              <div key={step} className="flex flex-col items-center text-center group">
                {/* Icon circle */}
                <div className="relative mb-6">
                  <div className="w-16 h-16 rounded-full bg-brand-dark2 flex items-center justify-center shadow-lg group-hover:bg-brand-accent transition-colors duration-300">
                    <Icon className="w-7 h-7 text-white" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-brand-accent text-white text-xs font-heading font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-xl text-text-primary mb-3">
                  {title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed max-w-xs">
                  {desc}
                </p>

                {/* Arrow between steps — desktop */}
                {i < STEPS.length - 1 && (
                  <div className="hidden lg:block absolute right-0 top-14 -translate-y-1/2">
                    <ArrowRight className="w-5 h-5 text-brand-accentH/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageWrapper>
    </Section>
  )
}
