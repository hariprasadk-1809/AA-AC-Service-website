import { z } from 'zod'

export const step1Schema = z.object({
  name:    z.string().min(2, 'Name must be at least 2 characters'),
  phone:   z.string().regex(/^[6-9]\d{9}$/, 'Enter a valid 10-digit Indian mobile number'),
  company: z.string().optional(),
  address: z.string().min(5, 'Please enter a valid address'),
  pincode: z.string().regex(/^\d{6}$/, 'Enter a valid 6-digit pincode'),
})

export const step2Schema = z.object({
  serviceType: z.enum(['repair', 'cleaning', 'amc', 'gas-refill'], {
    required_error: 'Please select a service',
  }),
  acBrand:     z.string().min(1, 'AC brand is required'),
  acUnits:     z.number().min(1).max(50),
  description: z.string().optional(),
})

export const step3Schema = z.object({
  date:     z.string().min(1, 'Please select a date'),
  timeSlot: z.enum(['morning', 'afternoon', 'evening'], {
    required_error: 'Please select a time slot',
  }),
})

export const bookingSchema = step1Schema.merge(step2Schema).merge(step3Schema)

export type Step1Data = z.infer<typeof step1Schema>
export type Step2Data = z.infer<typeof step2Schema>
export type Step3Data = z.infer<typeof step3Schema>
export type BookingFormData = z.infer<typeof bookingSchema>
