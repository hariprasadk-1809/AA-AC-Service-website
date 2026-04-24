export const SITE = {
  name:           'AA AC Service',
  tagline:        'Chennai\'s Trusted Commercial AC Specialists',
  phone:          '+919956433497',
  phoneDisplay:   '+91 99564 33497',
  whatsapp:       '918124000494',
  whatsappDisplay:'+91 81240 00494',
  email:          'aaaservice26@gmail.com',
  city:           'Chennai',
  address:        'Chennai, Tamil Nadu, India',
  openingHours:   'Mon–Sun 8:00 AM – 8:00 PM',

  clients: [
    'Nexus Vijaya Mall',
    'Sky One Mall',
    'VR Mall',
    'Phoenix Mall',
  ],

  stats: [
    { value: 500,  suffix: '+', label: 'Projects Completed' },
    { value: 8,    suffix: '+', label: 'Years Experience'   },
    { value: 2,    suffix: 'hr', label: 'Response Time'     },
    { value: 4.9,  suffix: '★', label: 'Client Rating'     },
  ],

  waMessage: encodeURIComponent(
    'Hi AA AC Service! I need help with my commercial AC unit. Please get in touch.'
  ),
} as const
