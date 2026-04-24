export interface Service {
  id:          string
  title:       string
  icon:        string
  shortDesc:   string
  longDesc:    string
  from:        number
  badge?:      string
  features:    string[]
}

export const SERVICES: Service[] = [
  {
    id:        'repair',
    title:     'AC Repair',
    icon:      'Wrench',
    shortDesc: 'Fast diagnosis and repair for all commercial AC faults. All brands covered.',
    longDesc:  'Our certified technicians handle everything from compressor failures and refrigerant leaks to electrical faults and control board issues. We carry spare parts for all major brands ensuring same-visit repairs wherever possible.',
    from:      999,
    features:  [
      'All commercial AC brands serviced',
      'Same-visit repair wherever possible',
      'Genuine spare parts used',
      '30-day repair warranty',
      'Post-repair performance check',
    ],
  },
  {
    id:        'cleaning',
    title:     'AC Service & Cleaning',
    icon:      'Sparkles',
    shortDesc: 'Deep cleaning for commercial units to maintain peak cooling efficiency.',
    longDesc:  'Commercial ACs accumulate dust, biological growth, and debris rapidly. Our deep-clean service improves air quality, reduces energy consumption, and extends equipment life — essential for high-traffic mall environments.',
    from:      599,
    features:  [
      'Filter deep clean & sanitisation',
      'Coil cleaning (evaporator & condenser)',
      'Drain pan & drainage line flush',
      'Blower & fan blade cleaning',
      'Air quality improvement certified',
    ],
  },
  {
    id:        'amc',
    title:     'AMC Plans',
    icon:      'ShieldCheck',
    shortDesc: 'Annual Maintenance Contracts tailored for malls and commercial spaces.',
    longDesc:  'Our AMC packages give facility managers peace of mind with scheduled servicing, priority emergency response, and predictable maintenance costs. Covers all your AC units under one contract.',
    from:      4999,
    badge:     'Best Value',
    features:  [
      'Scheduled preventive maintenance visits',
      'Priority emergency response',
      'Dedicated account manager',
      'Detailed service reports',
      'Covers multiple AC units',
    ],
  },
  {
    id:        'gas-refill',
    title:     'Gas Refilling',
    icon:      'Droplets',
    shortDesc: 'Refrigerant top-up and leak detection for optimal AC performance.',
    longDesc:  'Low refrigerant is the most common cause of poor cooling in commercial units. We use calibrated equipment to detect leaks, fix them at source, and refill to manufacturer specifications — for all refrigerant types including R32, R410A, and R22.',
    from:      799,
    features:  [
      'All refrigerant types: R32, R410A, R22',
      'Electronic leak detection',
      'Fix-first-then-fill approach',
      'Pressure test after refill',
      'EPA-compliant handling',
    ],
  },
]
