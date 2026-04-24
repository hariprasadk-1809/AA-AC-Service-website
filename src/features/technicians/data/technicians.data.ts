export interface Technician {
  id:          string
  name:        string
  role:        string
  experience:  string
  speciality:  string
  certifications: string[]
}

export const TECHNICIANS: Technician[] = [
  {
    id:           'tech-1',
    name:         'Murugan R.',
    role:         'Senior AC Technician',
    experience:   '10+ years',
    speciality:   'VRF/VRV Systems & Chillers',
    certifications: ['Daikin Certified', 'Blue Star Authorised'],
  },
  {
    id:           'tech-2',
    name:         'Karthik S.',
    role:         'AC Service Engineer',
    experience:   '7 years',
    speciality:   'Commercial Split & Cassette Units',
    certifications: ['Voltas Certified', 'Carrier Authorised'],
  },
  {
    id:           'tech-3',
    name:         'Selvam P.',
    role:         'Gas & Electrical Specialist',
    experience:   '8 years',
    speciality:   'Refrigerant Systems & Electrical Faults',
    certifications: ['LG Certified', 'Samsung Authorised'],
  },
]
