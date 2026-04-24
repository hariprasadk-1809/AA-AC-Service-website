import type { Metadata } from 'next'
import './globals.css'
import { QueryProvider } from '@/providers/QueryProvider'
import { ToastProvider } from '@/providers/ToastProvider'

const BASE_URL = 'https://aaacservice.com'

// ════════════════════════════════════════════════════════════════
// 1. TRADITIONAL SEO — title, description, keywords, canonical
// ════════════════════════════════════════════════════════════════
export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),

  title: {
    default:  'AA AC Service | Commercial AC Repair & Maintenance Chennai',
    template: '%s | AA AC Service Chennai',
  },

  description:
    'Professional commercial AC repair, service, AMC and gas refilling in Chennai. 2-hour response. Certified technicians. Trusted by Nexus Vijaya Mall, VR Mall, Phoenix Mall & Sky One Mall. Call +91 99564 33497.',

  keywords: [
    // Primary commercial intent keywords
    'commercial AC repair Chennai',
    'mall AC service Chennai',
    'AC maintenance contract Chennai',
    'AMC contract Chennai',
    'AC gas refilling Chennai',
    'AC cleaning service Chennai',
    // Brand
    'AA AC Service',
    'AA AC Service Chennai',
    // Long-tail
    'commercial air conditioner repair Chennai',
    'mall HVAC service Chennai',
    'VRF AC repair Chennai',
    'central AC maintenance Chennai',
    'AC repair Nexus Vijaya Mall',
    'commercial AC AMC contract',
    'AC technician Chennai malls',
    'emergency AC repair Chennai',
  ],

  // 2. CANONICAL & ALTERNATES
  alternates: {
    canonical: BASE_URL,
    languages: { 'en-IN': BASE_URL },
  },

  // 3. OPEN GRAPH — for social sharing (Facebook, LinkedIn, WhatsApp preview)
  openGraph: {
    title:       "AA AC Service \u2014 Chennai's Commercial AC Specialists",
    description: 'Rapid-response commercial AC repair, AMC & maintenance. Serving Nexus Vijaya, VR Mall, Phoenix Mall & more across Chennai.',
    url:         BASE_URL,
    siteName:    'AA AC Service',
    locale:      'en_IN',
    type:        'website',
    images: [
      {
        url:    `${BASE_URL}/images/hero-bg.jpg`,
        width:  1200,
        height: 630,
        alt:    'AA AC Service — Commercial AC technician',
      },
    ],
  },

  // 4. TWITTER / X CARD
  twitter: {
    card:        'summary_large_image',
    title:       'AA AC Service | Commercial AC Repair Chennai',
    description: 'Fast, reliable commercial AC repair & AMC for malls in Chennai. Call +91 99564 33497.',
    images:      [`${BASE_URL}/images/hero-bg.jpg`],
  },

  // 5. ROBOTS — tell Google to index everything
  robots: {
    index:               true,
    follow:              true,
    googleBot: {
      index:             true,
      follow:            true,
      'max-video-preview':  -1,
      'max-image-preview':  'large',
      'max-snippet':        -1,
    },
  },

  // 6. MANIFEST & ICONS
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/logo/logo-icon.png', sizes: '32x32',   type: 'image/png' },
      { url: '/logo/logo-icon.png', sizes: '192x192', type: 'image/png' },
      { url: '/logo/logo-icon.png', sizes: '512x512', type: 'image/png' },
    ],
    apple:    '/logo/logo-icon.png',
    shortcut: '/logo/logo-icon.png',
  },

  // 7. VERIFICATION (add your Search Console code here when ready)
  // verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },

  // 8. APP-SPECIFIC
  applicationName: 'AA AC Service',
  category:        'Home Services',
  classification:  'Commercial AC Repair & Maintenance',
}


// themeColor moved here per Next.js 14 requirement
export const viewport = {
  themeColor: '#0F3C87',
}

// ════════════════════════════════════════════════════════════════
// 2. AEO — Answer Engine Optimization
//    FAQ schema lets Google / Perplexity show direct answers
// ════════════════════════════════════════════════════════════════
const faqSchema = {
  '@context':  'https://schema.org',
  '@type':     'FAQPage',
  mainEntity:  [
    {
      '@type':          'Question',
      name:             'What types of commercial AC systems does AA AC Service repair?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'AA AC Service repairs all commercial AC types including split systems, cassette units, ducted central AC, VRF/VRV systems, chiller plants, and AHUs across all major brands: Daikin, Voltas, LG, Samsung, Carrier, Blue Star, Hitachi, and Trane.',
      },
    },
    {
      '@type':          'Question',
      name:             'How quickly can AA AC Service respond to an emergency AC breakdown in Chennai?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'AA AC Service targets a 2-hour on-site response time across all Chennai areas. AMC Premium clients receive a 1-hour priority response. The team operates Monday to Sunday, 8 AM to 8 PM.',
      },
    },
    {
      '@type':          'Question',
      name:             'Does AA AC Service provide AMC contracts for malls?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'Yes. AA AC Service offers Annual Maintenance Contracts (AMC) designed for malls and commercial properties. Plans include Basic (₹4,999/unit/year), Standard (₹8,999/unit/year), and Premium (₹14,999/unit/year) with scheduled visits and priority emergency response.',
      },
    },
    {
      '@type':          'Question',
      name:             'Which malls in Chennai does AA AC Service currently work with?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'AA AC Service currently services Nexus Vijaya Mall, Sky One Mall, VR Mall, and Phoenix Mall — covering all AC maintenance, repair, and AMC requirements for these commercial properties in Chennai.',
      },
    },
    {
      '@type':          'Question',
      name:             'What is the cost of AC gas refilling in Chennai for commercial units?',
      acceptedAnswer: {
        '@type': 'Answer',
        text:    'AA AC Service charges from ₹799 for gas refilling services, covering all refrigerant types including R32, R410A, and R22. The price includes electronic leak detection and a pressure test after refill.',
      },
    },
  ],
}

// ════════════════════════════════════════════════════════════════
// 3. GEO — Generative Engine Optimization
//    Rich structured data that AI engines (ChatGPT, Gemini,
//    Perplexity) use to cite your business accurately
// ════════════════════════════════════════════════════════════════
const localBusinessSchema = {
  '@context':   'https://schema.org',
  '@type':      ['LocalBusiness', 'HomeAndConstructionBusiness'],
  '@id':        `${BASE_URL}/#business`,
  name:         'AA AC Service',
  alternateName:'AA AC Service Chennai',
  url:           BASE_URL,
  logo:         `${BASE_URL}/logo/logo-icon.png`,
  image:        `${BASE_URL}/images/hero-bg.jpg`,
  description:  'AA AC Service is Chennai\'s leading commercial AC repair and maintenance company, specialising in mall and large commercial property HVAC systems. Services include AC repair, deep cleaning, Annual Maintenance Contracts (AMC), and gas refilling.',
  telephone:    '+919956433497',
  email:        'aaaservice26@gmail.com',
  address: {
    '@type':           'PostalAddress',
    streetAddress:     'Chennai',
    addressLocality:   'Chennai',
    addressRegion:     'Tamil Nadu',
    postalCode:        '600001',
    addressCountry:    'IN',
  },
  geo: {
    '@type':    'GeoCoordinates',
    latitude:   13.0827,
    longitude:  80.2707,
  },
  areaServed: {
    '@type': 'City',
    name:    'Chennai',
  },
  openingHoursSpecification: [
    {
      '@type':     'OpeningHoursSpecification',
      dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
      opens:       '08:00',
      closes:      '20:00',
    },
  ],
  priceRange: '₹₹',
  currenciesAccepted: 'INR',
  paymentAccepted:    'Cash, UPI, Bank Transfer, Cheque',
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name:    'Commercial AC Services',
    itemListElement: [
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Commercial AC Repair',             description: 'Fast diagnosis and repair for all commercial AC faults', price: '999', priceCurrency: 'INR' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Service & Deep Cleaning',       description: 'Deep clean for commercial AC units to maintain efficiency',  price: '599', priceCurrency: 'INR' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Annual Maintenance Contract (AMC)', description: 'AMC plans for malls and commercial properties',              price: '4999', priceCurrency: 'INR' } },
      { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AC Gas Refilling',                 description: 'Refrigerant top-up and leak detection',                      price: '799', priceCurrency: 'INR' } },
    ],
  },
  knowsAbout: [
    'Commercial AC Repair',
    'VRF/VRV Systems',
    'Chiller Maintenance',
    'AMC Contracts',
    'AC Gas Refilling',
    'Commercial HVAC',
    'Mall AC Maintenance',
    'Daikin', 'Voltas', 'LG', 'Samsung', 'Carrier', 'Blue Star', 'Hitachi', 'Trane',
  ],
  sameAs: [],
  aggregateRating: {
    '@type':       'AggregateRating',
    ratingValue:   '4.9',
    reviewCount:   '87',
    bestRating:    '5',
    worstRating:   '1',
  },
}

// ════════════════════════════════════════════════════════════════
// 4. SXO — Search Experience Optimization
//    BreadcrumbList helps Google show sitelinks in results
// ════════════════════════════════════════════════════════════════
const breadcrumbSchema = {
  '@context':    'https://schema.org',
  '@type':       'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home',        item: BASE_URL },
    { '@type': 'ListItem', position: 2, name: 'Services',    item: `${BASE_URL}/#services`    },
    { '@type': 'ListItem', position: 3, name: 'AMC Plans',   item: `${BASE_URL}/#amc-plans`   },
    { '@type': 'ListItem', position: 4, name: 'Testimonials',item: `${BASE_URL}/#testimonials`},
    { '@type': 'ListItem', position: 5, name: 'Contact',     item: `${BASE_URL}/#contact`     },
  ],
}

// 5. AI OPTIMIZATION — Organization schema
//    Helps ChatGPT, Gemini, Claude understand who you are
const organizationSchema = {
  '@context':   'https://schema.org',
  '@type':      'Organization',
  '@id':        `${BASE_URL}/#organization`,
  name:         'AA AC Service',
  url:           BASE_URL,
  logo:         `${BASE_URL}/logo/logo-icon.png`,
  contactPoint: [
    {
      '@type':            'ContactPoint',
      telephone:          '+919956433497',
      contactType:        'customer service',
      areaServed:         'IN-TN',
      availableLanguage:  ['English', 'Tamil'],
      hoursAvailable: {
        '@type':     'OpeningHoursSpecification',
        dayOfWeek:   ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
        opens:       '08:00',
        closes:      '20:00',
      },
    },
    {
      '@type':       'ContactPoint',
      telephone:     '+918124000494',
      contactType:   'customer service',
      contactOption: 'TollFree',
    },
  ],
}

const allSchemas = [localBusinessSchema, faqSchema, breadcrumbSchema, organizationSchema]

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* All JSON-LD schemas in one block */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(allSchemas) }}
        />

        {/* SXO — performance hints */}
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

        {/* AEO — help AI engines find your content */}
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow" />

        {/* GEO — explicit business signals for AI crawlers */}
        <meta name="geo.region"      content="IN-TN" />
        <meta name="geo.placename"   content="Chennai" />
        <meta name="geo.position"    content="13.0827;80.2707" />
        <meta name="ICBM"            content="13.0827, 80.2707" />
        <meta name="business:contact_data:locality"    content="Chennai" />
        <meta name="business:contact_data:region"      content="Tamil Nadu" />
        <meta name="business:contact_data:country_name" content="India" />

        {/* AI Optimization — explicit authorship & topic signals */}
        <meta name="author"   content="AA AC Service" />
        <meta name="subject"  content="Commercial AC Repair and Maintenance Services in Chennai" />
        <meta name="coverage" content="Chennai, Tamil Nadu, India" />
        <meta name="topic"    content="Commercial HVAC, AC Repair, Air Conditioning Maintenance" />
        <meta name="summary"  content="AA AC Service provides expert commercial AC repair, maintenance, AMC and gas refilling for malls and commercial properties in Chennai. Trusted by Nexus Vijaya Mall, VR Mall, Phoenix Mall and Sky One Mall." />
        <meta name="category" content="Home Services, Commercial HVAC, AC Repair" />
        <meta name="classification" content="Business" />
        <meta name="target"   content="facility managers, mall operators, commercial property managers" />
      </head>
      <body>
        <QueryProvider>
          <ToastProvider>
            {children}
          </ToastProvider>
        </QueryProvider>
      </body>
    </html>
  )
}