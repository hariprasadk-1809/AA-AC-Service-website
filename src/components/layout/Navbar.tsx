'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Snowflake, Phone } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { useScrollPosition } from '@/hooks/useScrollPosition'
import { Button } from '@/components/ui/Button'
import { SITE } from '@/lib/constants/site'

const NAV_LINKS = [
  { label: 'Services',     href: '#services'    },
  { label: 'How It Works', href: '#how-it-works'},
  { label: 'AMC Plans',    href: '#amc-plans'   },
  { label: 'Clients',      href: '#testimonials'},
  { label: 'Contact',      href: '#contact'     },
]

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [navLogoError, setNavLogoError] = useState(false)
  const [menuLogoError, setMenuLogoError] = useState(false)
  const scrollY = useScrollPosition()
  const scrolled = scrollY > 80

  useEffect(() => {
    const handleResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false) }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    setTimeout(() => {
      document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-navbar py-2' : 'bg-transparent py-3'}`}>
        <div className="w-full px-4 sm:px-6 lg:px-10 xl:px-16">
          <nav className="flex items-center justify-between h-14 gap-4">

            {/* ── Navbar Logo ── */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              {!navLogoError ? (
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src="/logo/logo-icon.png"
                    alt="AA AC Service"
                    fill
                    className="object-contain"
                    onError={() => setNavLogoError(true)}
                    priority
                  />
                </div>
              ) : (
                <div className={`flex items-center justify-center w-9 h-9 rounded-lg shrink-0 ${scrolled ? 'bg-brand-dark2' : 'bg-white/15 backdrop-blur-sm'}`}>
                  <Snowflake className={`w-5 h-5 ${scrolled ? 'text-brand-accentH' : 'text-white'}`} />
                </div>
              )}
              <div className="flex flex-col leading-tight">
                <span className={`font-heading font-bold text-[15px] leading-tight transition-colors ${scrolled ? 'text-brand-dark' : 'text-white'}`}>
                  AA AC Service
                </span>
                <span className={`font-body text-[10px] leading-tight transition-colors ${scrolled ? 'text-brand-accent' : 'text-white/60'}`}>
                  Commercial AC Specialists
                </span>
              </div>
            </Link>

            {/* ── Desktop Nav ── */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <a key={link.href} href={link.href}
                  className={`font-heading font-medium text-sm transition-colors duration-200 hover:text-brand-accent whitespace-nowrap ${scrolled ? 'text-text-secondary' : 'text-white/90'}`}>
                  {link.label}
                </a>
              ))}
            </div>

            {/* ── Desktop CTA ── */}
            <div className="hidden lg:flex items-center shrink-0">
              <Button variant="primary" size="sm" className="animate-pulse-cta whitespace-nowrap"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Request Quote
              </Button>
            </div>

            {/* ── Mobile hamburger ── */}
            <button
              className={`flex lg:hidden items-center justify-center w-9 h-9 rounded-lg transition-colors shrink-0 ${scrolled ? 'bg-brand-light' : 'bg-white/15'}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileOpen
                ? <X className={`w-5 h-5 ${scrolled ? 'text-brand-dark' : 'text-white'}`} />
                : <Menu className={`w-5 h-5 ${scrolled ? 'text-brand-dark' : 'text-white'}`} />
              }
            </button>
          </nav>
        </div>
      </header>

      {/* ── Mobile slide-in panel ── */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-brand-dark/60 backdrop-blur-sm lg:hidden"
              onClick={() => setMobileOpen(false)}
            />

            {/* Panel */}
            <motion.div
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-[80vw] max-w-xs bg-white shadow-2xl flex flex-col lg:hidden"
            >
              {/* ── Panel header with logo-white.png ── */}
              <div className="flex items-center justify-between px-5 py-4 bg-brand-dark">
                <div className="flex items-center gap-3">
                  {!menuLogoError ? (
                    <div className="relative w-10 h-10 shrink-0">
                      <Image
                        src="/logo/logo-white.png"
                        alt="AA AC Service"
                        fill
                        className="object-contain"
                        onError={() => setMenuLogoError(true)}
                      />
                    </div>
                  ) : (
                    <div className="w-9 h-9 rounded-lg bg-brand-accent flex items-center justify-center shrink-0">
                      <Snowflake className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <div className="flex flex-col leading-tight">
                    <span className="font-heading font-bold text-white text-base leading-tight">AA AC Service</span>
                    <span className="font-body text-white/50 text-[10px] leading-tight">Commercial AC Specialists</span>
                  </div>
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Nav links */}
              <nav className="flex-1 overflow-y-auto py-4 px-4">
                <p className="text-[10px] font-heading font-bold uppercase tracking-widest text-text-muted px-3 mb-3">Navigation</p>
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.href} href={link.href}
                    initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center py-3.5 px-3 rounded-xl font-heading font-semibold text-text-primary hover:text-brand-accent hover:bg-brand-light transition-colors mb-1"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>

              {/* Bottom CTAs */}
              <div className="p-4 border-t border-gray-100 space-y-3 bg-brand-offwhite">
                <a href={`tel:${SITE.phone}`} className="block">
                  <button className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-brand-dark text-white font-heading font-semibold text-sm hover:bg-brand-dark2 transition-colors">
                    <Phone className="w-4 h-4" />{SITE.phoneDisplay}
                  </button>
                </a>
                <Button variant="primary" className="w-full" onClick={() => handleNavClick('#contact')}>
                  Request Quote
                </Button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}