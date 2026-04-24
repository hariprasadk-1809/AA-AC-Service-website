import { Award } from 'lucide-react'
import type { Technician } from '../data/technicians.data'

interface TechnicianCardProps {
  technician: Technician
}

export function TechnicianCard({ technician }: TechnicianCardProps) {
  return (
    <div className="bg-white rounded-card shadow-card p-6 text-center hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full bg-brand-dark2 flex items-center justify-center text-white font-heading font-bold text-xl mx-auto mb-4">
        {technician.name.charAt(0)}
      </div>

      <h3 className="font-heading font-bold text-text-primary">{technician.name}</h3>
      <p className="font-body text-brand-accent text-sm mt-1">{technician.role}</p>
      <p className="font-body text-text-muted text-xs mt-1">{technician.experience} experience</p>

      <div className="mt-4 p-3 bg-brand-light rounded-lg">
        <p className="font-body text-text-secondary text-xs">{technician.speciality}</p>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {technician.certifications.map((cert) => (
          <span key={cert} className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-heading font-semibold px-2 py-1 rounded-full border border-green-200">
            <Award className="w-3 h-3" />
            {cert}
          </span>
        ))}
      </div>
    </div>
  )
}
