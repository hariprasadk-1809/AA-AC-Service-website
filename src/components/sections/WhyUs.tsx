'use client'
import { Building2, Award, Zap, MapPin } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { SITE } from '@/lib/constants/site'

const FEATURES = [
  {
    icon:  Building2,
    title: 'Mall-Grade Expertise',
    desc:  `Deep experience serving ${SITE.clients.join(', ')} and more. We understand the scale, uptime demands, and compliance requirements of commercial properties.`,
    color: 'text-brand-accent',
    bg:    'bg-brand-light',
  },
  {
    icon:  Award,
    title: 'Certified Technicians',
    desc:  'Every engineer is factory-trained and certified across all major brands — Daikin, Voltas, LG, Samsung, Carrier, Blue Star, Hitachi, and more.',
    color: 'text-brand-accent',
    bg:    'bg-brand-light',
  },
  {
    icon:  Zap,
    title: '2-Hour Emergency Response',
    desc:  'AC failure in a mall loses footfall fast. Our rapid-response team targets a 2-hour on-site arrival across all Chennai areas — day or night.',
    color: 'text-brand-accent',
    bg:    'bg-brand-light',
  },
  {
    icon:  MapPin,
    title: 'All Chennai Covered',
    desc:  'From Anna Nagar to OMR, Velachery to Ambattur — we cover the entire Chennai metro with no extra travel charges within city limits.',
    color: 'text-brand-accent',
    bg:    'bg-brand-light',
  },
]

export function WhyUs() {
  return (
    <Section id="why-us" alt>
      <PageWrapper>
        <SectionHeader
          eyebrow="Why AA AC Service"
          title="Built for Commercial Properties"
          subtitle="Home AC companies can't handle mall-scale systems. We specialise exclusively in commercial AC — it shows in our response time, quality, and client retention."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES.map(({ icon: Icon, title, desc, color, bg }) => (
            <div
              key={title}
              className="bg-white rounded-card shadow-card p-7 hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
                <Icon className={`w-6 h-6 ${color}`} />
              </div>
              <h3 className="font-heading font-bold text-lg text-text-primary mb-3">{title}</h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </PageWrapper>
    </Section>
  )
}
