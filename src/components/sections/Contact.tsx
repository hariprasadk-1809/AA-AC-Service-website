'use client'
import { useState } from 'react'
import { Phone, MessageCircle, Mail, Clock, Send, CheckCircle2 } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { SITE } from '@/lib/constants/site'

interface FormState {
  name:    string
  phone:   string
  company: string
  service: string
  message: string
}

export function Contact() {
  const [form, setForm] = useState<FormState>({
    name: '', phone: '', company: '', service: '', message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.MouseEvent) => {
    e.preventDefault()
    if (!form.name || !form.phone) return
    setSubmitting(true)
    // Simulate API call — replace with real API when backend is ready
    await new Promise((r) => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  return (
    <Section id="contact">
      <PageWrapper>
        <SectionHeader
          eyebrow="Get In Touch"
          title="Request a Quote or Service"
          subtitle={`Currently servicing ${SITE.clients.join(', ')} and all major commercial properties across Chennai.`}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="font-heading font-bold text-xl text-text-primary mb-6">
                Contact Details
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone,         label: 'Phone',     value: SITE.phoneDisplay,      href: `tel:${SITE.phone}` },
                  { icon: MessageCircle, label: 'WhatsApp',  value: SITE.whatsappDisplay,   href: `https://wa.me/${SITE.whatsapp}?text=${SITE.waMessage}` },
                  { icon: Mail,          label: 'Email',     value: SITE.email,             href: `mailto:${SITE.email}` },
                  { icon: Clock,         label: 'Hours',     value: SITE.openingHours,      href: null },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-xl bg-brand-light flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-brand-accent" />
                    </div>
                    <div>
                      <p className="font-heading font-semibold text-xs text-text-muted uppercase tracking-wide">{label}</p>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer"
                          className="font-body text-text-primary text-sm hover:text-brand-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <p className="font-body text-text-primary text-sm">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick action buttons */}
            <div className="flex flex-col gap-3">
              <a href={`tel:${SITE.phone}`} className="block">
                <Button variant="primary" className="w-full gap-3">
                  <Phone className="w-5 h-5" />
                  Call Now: {SITE.phoneDisplay}
                </Button>
              </a>
              <a href={`https://wa.me/${SITE.whatsapp}?text=${SITE.waMessage}`} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="w-full gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white border-0">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Button>
              </a>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-brand-offwhite rounded-2xl p-8 border border-brand-light">
            {submitted ? (
              <div className="flex flex-col items-center justify-center py-10 text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-xl text-text-primary">Enquiry Received!</h3>
                <p className="font-body text-text-secondary text-sm max-w-xs">
                  Our team will call you back within 2 hours. For urgent issues, call or WhatsApp us directly.
                </p>
                <Button variant="outline" onClick={() => setSubmitted(false)}>
                  Send Another
                </Button>
              </div>
            ) : (
              <div className="space-y-5">
                <h3 className="font-heading font-bold text-lg text-text-primary">Send an Enquiry</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Input
                    label="Your Name *"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={handleChange}
                  />
                  <Input
                    label="Phone Number *"
                    name="phone"
                    placeholder="+91 XXXXX XXXXX"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>

                <Input
                  label="Company / Mall Name"
                  name="company"
                  placeholder="e.g. Phoenix Mall"
                  value={form.company}
                  onChange={handleChange}
                />

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-primary font-heading">
                    Service Required
                  </label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent"
                  >
                    <option value="">Select a service...</option>
                    <option value="repair">AC Repair</option>
                    <option value="cleaning">AC Service / Cleaning</option>
                    <option value="amc">AMC Plan</option>
                    <option value="gas-refill">Gas Refilling</option>
                    <option value="other">Other / Not Sure</option>
                  </select>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-semibold text-text-primary font-heading">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Describe your requirement or issue..."
                    value={form.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 text-text-primary font-body text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent focus:border-transparent resize-none"
                  />
                </div>

                <Button
                  variant="primary"
                  className="w-full gap-2"
                  loading={submitting}
                  onClick={handleSubmit}
                >
                  <Send className="w-4 h-4" />
                  Send Enquiry
                </Button>

                <p className="text-xs text-text-muted font-body text-center">
                  We respond within 2 hours · No spam, just service.
                </p>
              </div>
            )}
          </div>
        </div>
      </PageWrapper>
    </Section>
  )
}
