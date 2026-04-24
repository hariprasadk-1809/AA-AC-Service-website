'use client'
import { useState } from 'react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { ServiceCard } from '@/features/services/components/ServiceCard'
import { ServiceModal } from '@/features/services/components/ServiceModal'
import { SERVICES, type Service } from '@/features/services/data/services.data'

export function Services() {
  const [selected, setSelected] = useState<Service | null>(null)

  const handleBook = (serviceId: string) => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Section id="services" alt>
      <PageWrapper>
        <SectionHeader
          eyebrow="What We Do"
          title="Commercial AC Services"
          subtitle="Specialist solutions for malls, retail spaces, and large commercial properties across Chennai."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpen={setSelected}
              onBook={handleBook}
            />
          ))}
        </div>
      </PageWrapper>

      <ServiceModal
        service={selected}
        onClose={() => setSelected(null)}
        onBook={handleBook}
      />
    </Section>
  )
}
