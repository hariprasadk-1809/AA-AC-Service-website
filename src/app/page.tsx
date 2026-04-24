'use client'
import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'

import { Navbar }       from '@/components/layout/Navbar'
import { Footer }       from '@/components/layout/Footer'
import { SplashScreen } from '@/components/sections/SplashScreen'
import { Hero }         from '@/components/sections/Hero'
import { TrustBadges }  from '@/components/sections/TrustBadges'
import { Services }     from '@/components/sections/Services'
import { HowItWorks }   from '@/components/sections/HowItWorks'
import { WhyUs }        from '@/components/sections/WhyUs'
import { Testimonials } from '@/components/sections/Testimonials'
import { AmcPlans }     from '@/components/sections/AmcPlans'
import { FAQ }          from '@/components/sections/FAQ'
import { Contact }      from '@/components/sections/Contact'
import { WhatsAppFAB }  from '@/components/sections/WhatsAppFAB'

export default function HomePage() {
  const [showSplash, setShowSplash] = useState(true)

  // Scroll-reveal observer — fires once per element
  useEffect(() => {
    if (showSplash) return
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        }),
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [showSplash])

  return (
    <>
      {/* Splash screen */}
      <AnimatePresence>
        {showSplash && (
          <SplashScreen onComplete={() => setShowSplash(false)} />
        )}
      </AnimatePresence>

      {/* Main site — hidden until splash is done */}
      {!showSplash && (
        <div className="min-h-screen flex flex-col">
          <Navbar />

          <main className="flex-1">
            {/* 1. Hero */}
            <Hero />

            {/* 2. Trust Bar — stats + client strip */}
            <TrustBadges />

            {/* 3. Services — 4 cards */}
            <Services />

            {/* 4. How It Works — 3 steps */}
            <HowItWorks />

            {/* 5. Why Us — 4 features */}
            <WhyUs />

            {/* 6. Testimonials — 3 mall clients */}
            <Testimonials />

            {/* 7. AMC Plans — 3 pricing tiers */}
            <AmcPlans />

            {/* 8. FAQ — 6 questions */}
            <FAQ />

            {/* 9. Contact — form + phone + WhatsApp */}
            <Contact />
          </main>

          <Footer />

          {/* Fixed WhatsApp floating button */}
          <WhatsAppFAB />
        </div>
      )}
    </>
  )
}
