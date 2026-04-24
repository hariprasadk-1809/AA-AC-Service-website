import { create } from 'zustand'
import type { BookingFormData } from '../types/booking.types'

interface BookingState {
  currentStep:  number
  formData:     Partial<BookingFormData>
  isSubmitting: boolean
  bookingId:    string | null

  setStep:        (step: number) => void
  updateFormData: (data: Partial<BookingFormData>) => void
  setSubmitting:  (val: boolean) => void
  setBookingId:   (id: string) => void
  reset:          () => void
}

export const useBookingStore = create<BookingState>((set) => ({
  currentStep:  1,
  formData:     {},
  isSubmitting: false,
  bookingId:    null,

  setStep:        (step) => set({ currentStep: step }),
  updateFormData: (data) =>
    set((state) => ({ formData: { ...state.formData, ...data } })),
  setSubmitting:  (val) => set({ isSubmitting: val }),
  setBookingId:   (id)  => set({ bookingId: id }),
  reset: () =>
    set({ currentStep: 1, formData: {}, isSubmitting: false, bookingId: null }),
}))
