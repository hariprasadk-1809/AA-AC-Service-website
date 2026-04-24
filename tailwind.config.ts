import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark:     '#0A2560',
          dark2:    '#0F3C87',
          primary:  '#0F4C81',
          accent:   '#1E87D2',
          accentM:  '#2D96E0',
          accentH:  '#48AAEE',
          light:    '#EBF4FF',
          offwhite: '#F7FAFF',
          cyan:     '#00C9A7',
        },
        text: {
          primary:   '#0A2560',
          secondary: '#4A5568',
          muted:     '#718096',
        },
        status: {
          success: '#22C55E',
          warning: '#F59E0B',
          error:   '#EF4444',
        },
      },
      fontFamily: {
        heading: ['var(--font-montserrat)', 'sans-serif'],
        body:    ['var(--font-open-sans)', 'sans-serif'],
      },
      boxShadow: {
        card:       '0 2px 16px rgba(15,60,135,0.08)',
        'card-hover': '0 8px 32px rgba(15,60,135,0.16)',
        navbar:     '0 2px 20px rgba(10,37,96,0.12)',
      },
      borderRadius: {
        button: '8px',
        card:   '16px',
      },
      animation: {
        'fade-up':   'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards',
        'fade-in':   'fadeIn 0.5s ease forwards',
        'pulse-cta': 'pulseCta 3s ease-in-out infinite',
        'wa-ring':   'waRing 2.2s ease-out infinite',
        'counter':   'counter 1s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        pulseCta: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%':      { transform: 'scale(1.04)' },
        },
        waRing: {
          '0%':       { opacity: '0.7', transform: 'scale(1)' },
          '70%, 100%':{ opacity: '0',   transform: 'scale(1.5)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
