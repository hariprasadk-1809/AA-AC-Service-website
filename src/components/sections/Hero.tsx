'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Phone, MessageCircle, Snowflake, Clock, ShieldCheck, Star, ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants/site'

const fadeUp = (delay = 0) => ({
  initial:    { opacity: 0, y: 30 },
  animate:    { opacity: 1, y: 0  },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
})

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="AA AC Service — Commercial AC technician at work"
          fill
          className="object-cover object-[70%_center] sm:object-center"
          priority
          sizes="100vw"
        />

        {/* ── MOBILE overlays (hidden on sm+) ── */}
        {/* Base dark layer */}
        <div className="absolute inset-0 bg-brand-dark/75 sm:hidden" />
        {/* Top blue-tinted shadow so badge + headline are crisp */}
        <div className="absolute inset-x-0 top-0 h-64 sm:hidden"
          style={{ background: 'linear-gradient(to bottom, rgba(10,37,96,0.90) 0%, rgba(15,60,135,0.60) 50%, transparent 100%)' }} />

        {/* ── DESKTOP overlays (hidden on mobile) ── */}
        {/* Left dark for text readability */}
        <div className="absolute inset-0 hidden sm:block
          bg-gradient-to-r from-brand-dark/80 via-brand-dark/40 to-transparent" />
        {/* Right side: very light overlay so man is bright and visible */}
        <div className="absolute inset-0 hidden sm:block
          bg-gradient-to-l from-brand-dark/20 to-transparent" />
        {/* Top vignette — keeps navbar area dark on desktop */}
        <div className="absolute inset-x-0 top-0 h-32 hidden sm:block
          bg-gradient-to-b from-brand-dark/70 to-transparent" />

        {/* Bottom fade to white — both */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white to-transparent" />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 text-center">

        {/* Badge */}
        <motion.div {...fadeUp(0)} className="mb-6 flex justify-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/25 rounded-full px-5 py-2.5 text-white text-xs sm:text-sm font-heading font-semibold shadow-lg">
            <Snowflake className="w-3.5 h-3.5 text-brand-accentH shrink-0" />
            Trusted by Chennai&apos;s Top Malls
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 {...fadeUp(0.1)}
          className="font-heading font-bold text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-white leading-[1.08] tracking-tight drop-shadow-lg"
        >
          Your Mall&apos;s AC Down?
          <br />
          <span className="text-brand-accentH">We Fix It Fast.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p {...fadeUp(0.2)}
          className="mt-4 sm:mt-6 text-white/85 font-body text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed px-2 drop-shadow-md"
        >
          Chennai&apos;s specialist commercial AC repair &amp; maintenance team.
          Rapid response, certified technicians, all brands serviced.
        </motion.p>

        {/* CTAs */}
        <motion.div {...fadeUp(0.3)} className="mt-8 flex flex-col sm:flex-row gap-3 justify-center px-2 sm:px-0">
          <a href={`tel:${SITE.phone}`} className="w-full sm:w-auto">
            <Button variant="white" size="lg" className="gap-3 w-full justify-center shadow-xl">
              <Phone className="w-5 h-5 text-brand-accent" />
              Call Now
            </Button>
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${SITE.waMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto"
          >
            <Button size="lg" className="gap-3 w-full justify-center bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0 shadow-xl">
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </Button>
          </a>
        </motion.div>

        {/* Trust row */}
        <motion.div {...fadeUp(0.4)} className="mt-10 flex flex-wrap justify-center gap-4 md:gap-10">
          {[
            { icon: Clock,       text: '2-Hour Response'       },
            { icon: ShieldCheck, text: 'Certified Technicians' },
            { icon: Star,        text: '4.9★ Rated Service'    },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 text-white/85 font-body text-sm drop-shadow-md">
              <Icon className="w-4 h-4 text-brand-accentH shrink-0" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Client strip — sm+ only */}
        <motion.div {...fadeUp(0.5)} className="mt-10 hidden sm:block">
          <p className="text-white/40 text-[10px] font-heading uppercase tracking-widest mb-3">
            Currently Servicing
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {SITE.clients.map((client) => (
              <span key={client}
                className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5 text-white/80 text-sm font-heading font-medium backdrop-blur-sm">
                {client}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator — desktop only */}
        <motion.div
          className="mt-14 hidden sm:flex flex-col items-center gap-1"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          <span className="text-white/40 text-[10px] font-heading uppercase tracking-widest">Scroll</span>
          <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
            <ChevronDown className="w-5 h-5 text-white/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}