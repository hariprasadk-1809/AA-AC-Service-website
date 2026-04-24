'use client'
import { useEffect, useState } from 'react'
import { MessageCircle } from 'lucide-react'
import { SITE } from '@/lib/constants/site'

export function WhatsAppFAB() {
  const [visible, setVisible] = useState(false)
  const href = `https://wa.me/${SITE.whatsapp}?text=${SITE.waMessage}`

  useEffect(() => {
    const handleScroll = () => {
      // Show FAB only after user scrolls to the #how-it-works section
      const section = document.getElementById('how-it-works')
      if (section) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY
        setVisible(window.scrollY >= sectionTop - 100)
      } else {
        // Fallback: show after 2 full viewport heights
        setVisible(window.scrollY > window.innerHeight * 2)
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // check on mount
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className={`fixed bottom-8 right-6 sm:right-8 z-[90] group transition-all duration-500 ${
        visible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-6 pointer-events-none'
      }`}
    >
      {/* Pulse ring */}
      <span className="absolute inset-[-4px] rounded-full border-2 border-[#25D366]/50 animate-wa-ring pointer-events-none" />

      {/* Button */}
      <span className="relative flex items-center justify-center w-[56px] h-[56px] sm:w-[60px] sm:h-[60px] rounded-full bg-gradient-to-br from-[#25D366] to-[#128C5E] shadow-[0_6px_28px_rgba(37,211,102,0.45),0_2px_8px_rgba(0,0,0,0.25)] transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5">
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-white fill-white" />
      </span>

      {/* Tooltip — desktop only */}
      <span className="hidden sm:block absolute right-16 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-heading font-semibold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none shadow-lg">
        Chat on WhatsApp
      </span>
    </a>
  )
}