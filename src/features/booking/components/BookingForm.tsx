'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronRight, ChevronLeft } from 'lucide-react'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { ServiceSelector } from './ServiceSelector'
import { TimeSlotPicker } from './TimeSlotPicker'
import { BookingSuccess } from './BookingSuccess'
import { useBookingStore } from '../store/bookingStore'
import { step1Schema, step2Schema, step3Schema, type Step1Data, type Step2Data, type Step3Data } from '../validation/booking.schema'

const AC_BRANDS = ['Daikin', 'Voltas', 'LG', 'Samsung', 'Carrier', 'Blue Star', 'Hitachi', 'Trane', 'Other']

const STEP_LABELS = ['Contact Details', 'Service Info', 'Schedule']

export function BookingForm() {
  const { currentStep, formData, updateFormData, setStep, isSubmitting, setSubmitting, bookingId, setBookingId, reset } = useBookingStore()
  const [submitted, setSubmitted] = useState(false)

  // Step 1 form
  const form1 = useForm<Step1Data>({ resolver: zodResolver(step1Schema), defaultValues: formData as Step1Data })
  // Step 2 form
  const form2 = useForm<Step2Data>({ resolver: zodResolver(step2Schema), defaultValues: { ...(formData as Step2Data), acUnits: (formData as Step2Data).acUnits ?? 1 } })
  // Step 3 form
  const form3 = useForm<Step3Data>({ resolver: zodResolver(step3Schema), defaultValues: formData as Step3Data })

  const handleStep1 = form1.handleSubmit((data) => {
    updateFormData(data)
    setStep(2)
  })

  const handleStep2 = form2.handleSubmit((data) => {
    updateFormData(data)
    setStep(3)
  })

  const handleStep3 = form3.handleSubmit(async (data) => {
    updateFormData(data)
    setSubmitting(true)
    try {
      await new Promise((r) => setTimeout(r, 1500))
      const id = 'AA' + Date.now().toString().slice(-6)
      setBookingId(id)
      setSubmitted(true)
    } finally {
      setSubmitting(false)
    }
  })

  if (submitted && bookingId) {
    return <BookingSuccess bookingId={bookingId} onReset={() => { reset(); setSubmitted(false) }} />
  }

  return (
    <div className="max-w-lg mx-auto">
      {/* Step indicator */}
      <div className="flex items-center justify-between mb-8">
        {STEP_LABELS.map((label, i) => {
          const stepNum = i + 1
          const active  = stepNum === currentStep
          const done    = stepNum < currentStep
          return (
            <div key={label} className="flex items-center gap-2 flex-1">
              <div className={`flex items-center gap-2 ${i < STEP_LABELS.length - 1 ? 'flex-1' : ''}`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-heading font-bold shrink-0 transition-all
                  ${active ? 'bg-brand-accent text-white shadow-md' : done ? 'bg-green-500 text-white' : 'bg-gray-200 text-text-muted'}`}>
                  {done ? '✓' : stepNum}
                </div>
                <span className={`text-xs font-heading font-semibold hidden sm:block ${active ? 'text-brand-accent' : 'text-text-muted'}`}>
                  {label}
                </span>
              </div>
              {i < STEP_LABELS.length - 1 && (
                <div className={`flex-1 h-0.5 mx-2 ${done ? 'bg-green-500' : 'bg-gray-200'}`} />
              )}
            </div>
          )
        })}
      </div>

      {/* Step 1 */}
      {currentStep === 1 && (
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-lg text-text-primary">Contact Details</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Input label="Full Name *" placeholder="Your name" {...form1.register('name')} error={form1.formState.errors.name?.message} />
            <Input label="Phone Number *" placeholder="10-digit mobile" {...form1.register('phone')} error={form1.formState.errors.phone?.message} />
          </div>
          <Input label="Company / Mall Name" placeholder="e.g. Phoenix Mall" {...form1.register('company')} />
          <Input label="Address *" placeholder="Service location address" {...form1.register('address')} error={form1.formState.errors.address?.message} />
          <Input label="Pincode *" placeholder="6-digit pincode" {...form1.register('pincode')} error={form1.formState.errors.pincode?.message} />
          <Button variant="primary" className="w-full gap-2" onClick={handleStep1}>
            Next: Service Info <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      )}

      {/* Step 2 */}
      {currentStep === 2 && (
        <div className="space-y-5">
          <h3 className="font-heading font-bold text-lg text-text-primary">Service Information</h3>

          <div>
            <p className="text-sm font-semibold text-text-primary font-heading mb-3">Service Required *</p>
            <ServiceSelector
              value={form2.watch('serviceType') || ''}
              onChange={(val) => form2.setValue('serviceType', val as Step2Data['serviceType'])}
            />
            {form2.formState.errors.serviceType && (
              <p className="text-xs text-status-error mt-1">{form2.formState.errors.serviceType.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-text-primary font-heading block mb-1.5">AC Brand *</label>
            <select
              {...form2.register('acBrand')}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            >
              <option value="">Select brand...</option>
              {AC_BRANDS.map((b) => <option key={b} value={b}>{b}</option>)}
            </select>
            {form2.formState.errors.acBrand && (
              <p className="text-xs text-status-error mt-1">{form2.formState.errors.acBrand.message}</p>
            )}
          </div>

          <div>
            <label className="text-sm font-semibold text-text-primary font-heading block mb-1.5">Number of AC Units</label>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => form2.setValue('acUnits', Math.max(1, (form2.watch('acUnits') || 1) - 1))}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-lg hover:bg-brand-light transition-colors">−</button>
              <span className="font-heading font-bold text-xl text-brand-dark2 w-8 text-center">{form2.watch('acUnits') || 1}</span>
              <button type="button" onClick={() => form2.setValue('acUnits', Math.min(50, (form2.watch('acUnits') || 1) + 1))}
                className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center font-bold text-lg hover:bg-brand-light transition-colors">+</button>
            </div>
          </div>

          <div>
            <label className="text-sm font-semibold text-text-primary font-heading block mb-1.5">Problem Description</label>
            <textarea
              {...form2.register('description')}
              rows={3}
              placeholder="Describe the issue or requirement..."
              className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
            />
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" onClick={() => setStep(1)}>
              <ChevronLeft className="w-4 h-4" /> Back
            </Button>
            <Button variant="primary" className="flex-1 gap-2" onClick={handleStep2}>
              Next: Schedule <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      )}

      {/* Step 3 */}
      {currentStep === 3 && (
        <div className="space-y-5">
          <h3 className="font-heading font-bold text-lg text-text-primary">Choose Date & Time</h3>

          <div>
            <label className="text-sm font-semibold text-text-primary font-heading block mb-1.5">Preferred Date *</label>
            <input
              type="date"
              {...form3.register('date')}
              min={new Date().toISOString().split('T')[0]}
              max={new Date(Date.now() + 30 * 86400000).toISOString().split('T')[0]}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
            />
            {form3.formState.errors.date && (
              <p className="text-xs text-status-error mt-1">{form3.formState.errors.date.message}</p>
            )}
          </div>

          <div>
            <p className="text-sm font-semibold text-text-primary font-heading mb-3">Preferred Time Slot *</p>
            <TimeSlotPicker
              value={form3.watch('timeSlot') || ''}
              onChange={(val) => form3.setValue('timeSlot', val as Step3Data['timeSlot'])}
            />
            {form3.formState.errors.timeSlot && (
              <p className="text-xs text-status-error mt-1">{form3.formState.errors.timeSlot.message}</p>
            )}
          </div>

          {/* Summary */}
          <div className="bg-brand-light rounded-xl p-4 space-y-2">
            <p className="font-heading font-bold text-xs uppercase tracking-widest text-brand-accent mb-3">Booking Summary</p>
            {[
              { label: 'Name',    value: formData.name    },
              { label: 'Phone',   value: formData.phone   },
              { label: 'Service', value: formData.serviceType },
              { label: 'Brand',   value: formData.acBrand },
              { label: 'Units',   value: formData.acUnits?.toString() },
            ].filter(r => r.value).map(({ label, value }) => (
              <div key={label} className="flex justify-between text-sm">
                <span className="font-body text-text-muted">{label}</span>
                <span className="font-heading font-semibold text-text-primary capitalize">{value}</span>
              </div>
            ))}
          </div>

          <div className="flex gap-3">
            <Button variant="outline" className="flex-1 gap-2" onClick={() => setStep(2)}>
              <ChevronLeft className="w-4 h-4" /> Back
            </Button>
            <Button variant="primary" className="flex-1" loading={isSubmitting} onClick={handleStep3}>
              Confirm Booking
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}