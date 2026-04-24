'use client'
import Image from 'next/image'
import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Snowflake, Clock } from 'lucide-react'
import { SITE } from '@/lib/constants/site'

export function Footer() {
  const year = new Date().getFullYear()
  const [logoError, setLogoError] = useState(false)

  return (
    <footer className="bg-brand-dark text-white">

      {/* ── Top CTA band ── */}
      <div className="bg-brand-accent">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 max-w-screen-xl mx-auto">
            <div className="flex items-center gap-3 text-white">
              <Clock className="w-5 h-5 shrink-0" />
              <span className="font-heading font-semibold text-sm">
                Mon–Sun 8 AM – 8 PM &nbsp;·&nbsp; Emergency response available for AMC clients
              </span>
            </div>
            <a
              href={`tel:${SITE.phone}`}
              className="shrink-0 bg-white text-brand-accent font-heading font-bold text-sm px-5 py-2.5 rounded-lg hover:bg-brand-offwhite transition-colors whitespace-nowrap"
            >
              Call Now: {SITE.phoneDisplay}
            </a>
          </div>
        </div>
      </div>

      {/* ── Main footer body ── */}
      <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-14">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* ── Brand column ── */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo — uses logo-white.png, falls back to snowflake icon */}
            <div className="flex items-center gap-2.5 mb-5">
              {!logoError ? (
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src="/logo/logo-white.png"
                    alt="AA AC Service"
                    fill
                    className="object-contain"
                    onError={() => setLogoError(true)}
                  />
                </div>
              ) : (
                <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center shrink-0">
                  <Snowflake className="w-5 h-5 text-white" />
                </div>
              )}
              <div>
                <p className="font-heading font-bold text-white text-base leading-tight">AA AC Service</p>
                <p className="font-body text-white/50 text-xs leading-tight">Commercial AC Specialists</p>
              </div>
            </div>

            <p className="font-body text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Chennai&apos;s trusted partner for commercial AC repair, cleaning, AMC and gas refilling.
              Rapid response. Certified team. All brands.
            </p>

            {/* Contact details */}
            <ul className="space-y-3">
              {[
                { icon: Phone,         href: `tel:${SITE.phone}`,   text: SITE.phoneDisplay,      hoverBg: 'group-hover:bg-brand-accent'  },
                { icon: MessageCircle, href: `https://wa.me/${SITE.whatsapp}?text=${SITE.waMessage}`, text: SITE.whatsappDisplay, hoverBg: 'group-hover:bg-[#25D366]' },
                { icon: Mail,          href: `mailto:${SITE.email}`, text: SITE.email,             hoverBg: 'group-hover:bg-brand-accent'  },
              ].map(({ icon: Icon, href, text, hoverBg }) => (
                <li key={text}>
                  <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                    className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm font-body group">
                    <span className={`w-8 h-8 rounded-lg bg-white/10 ${hoverBg} flex items-center justify-center shrink-0 transition-colors`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    {text}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3 text-white/60 text-sm font-body">
                <span className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5" />
                </span>
                Chennai, Tamil Nadu — All Areas
              </li>
            </ul>
          </div>

          {/* ── Services ── */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-accentH mb-5">Services</h3>
            <ul className="space-y-3">
              {[
                { label: 'AC Repair',        href: '#services'  },
                { label: 'AC Cleaning',      href: '#services'  },
                { label: 'AMC Plans',        href: '#amc-plans' },
                { label: 'Gas Refilling',    href: '#services'  },
                { label: 'Emergency Repair', href: '#contact'   },
              ].map((s) => (
                <li key={s.label}>
                  <a href={s.href} className="text-white/60 hover:text-white text-sm font-body transition-colors inline-flex items-center gap-1.5 hover:gap-2.5 duration-200">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Our Clients ── */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-accentH mb-5">Our Clients</h3>
            <ul className="space-y-3">
              {SITE.clients.map((c) => (
                <li key={c} className="flex items-center gap-2 text-white/60 text-sm font-body">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-accent shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Quick Links ── */}
          <div>
            <h3 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-accentH mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {[
                { label: 'Services',     href: '#services'    },
                { label: 'How It Works', href: '#how-it-works'},
                { label: 'AMC Plans',    href: '#amc-plans'   },
                { label: 'Testimonials', href: '#testimonials'},
                { label: 'FAQ',          href: '#faq'         },
                { label: 'Contact Us',   href: '#contact'     },
              ].map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-white/60 hover:text-white text-sm font-body transition-colors inline-flex items-center gap-1.5 hover:gap-2.5 duration-200">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/10">
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16 py-5">
          <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-white/40 text-xs font-body text-center sm:text-left">
              © {year} AA AC Service. All rights reserved. &nbsp;·&nbsp; Chennai, Tamil Nadu
            </p>
            <p className="text-white/30 text-xs font-body text-center sm:text-right">
              Professional Commercial AC Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
