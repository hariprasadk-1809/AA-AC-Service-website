'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { Snowflake } from 'lucide-react'

interface SplashScreenProps {
  onComplete: () => void
}

export function SplashScreen({ onComplete }: SplashScreenProps) {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] bg-gradient-to-br from-brand-dark via-brand-dark2 to-brand-accent flex flex-col items-center justify-center"
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.4 }}
        onAnimationComplete={() => setTimeout(onComplete, 2000)}
      >
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: 'backOut' }}
          className="flex flex-col items-center gap-4"
        >
          <Snowflake className="w-16 h-16 text-brand-accentH animate-spin" style={{ animationDuration: '3s' }} />
          <h1 className="font-heading font-bold text-3xl text-white tracking-tight">
            AA AC Service
          </h1>
          <p className="font-body text-white/70 text-sm">
            Chennai&apos;s Commercial AC Specialists
          </p>
        </motion.div>

        {/* Loading bar */}
        <motion.div
          className="absolute bottom-0 left-0 h-1 bg-brand-accentH"
          initial={{ width: '0%' }}
          animate={{ width: '100%' }}
          transition={{ duration: 2, ease: 'linear' }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
