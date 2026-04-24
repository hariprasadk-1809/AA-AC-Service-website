'use client'
import { Star, Quote } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'

const TESTIMONIALS = [
  {
    name:     'Ramesh Krishnamurthy',
    role:     'Facility Manager',
    company:  'Nexus Vijaya Mall',
    rating:   5,
    text:     "AA AC Service has been our go-to partner for over 3 years. When our central cooling system failed during peak weekend footfall, they were on-site within 90 minutes and had us back up in 4 hours. Exceptional reliability.",
  },
  {
    name:     'Priya Venkataraman',
    role:     'Operations Manager',
    company:  'VR Mall',
    rating:   5,
    text:     "We signed an AMC with them last year and it's been the best maintenance decision we've made. Scheduled visits are always on time, technicians are professional, and emergency calls get resolved same day. Highly recommended.",
  },
  {
    name:     'Suresh Balakrishnan',
    role:     'Maintenance Head',
    company:  'Phoenix Mall',
    rating:   5,
    text:     "Their gas refilling and coil cleaning service significantly improved our cooling efficiency across all three floors. Energy bills dropped noticeably. They understand commercial-scale AC systems better than anyone in Chennai.",
  },
]

export function Testimonials() {
  return (
    <Section id="testimonials">
      <PageWrapper>
        <SectionHeader
          eyebrow="Client Feedback"
          title="Trusted by Chennai's Best Malls"
          subtitle="Real feedback from the facility teams we work with every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white rounded-card shadow-card p-8 flex flex-col border border-brand-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Quote icon */}
              <Quote className="w-8 h-8 text-brand-light mb-3" />

              {/* Text */}
              <p className="font-body text-text-secondary text-sm leading-relaxed flex-1 mb-6">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-brand-light">
                <div className="w-10 h-10 rounded-full bg-brand-dark2 flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="font-heading font-bold text-sm text-text-primary">{t.name}</p>
                  <p className="font-body text-xs text-text-muted">{t.role} · {t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </PageWrapper>
    </Section>
  )
}
