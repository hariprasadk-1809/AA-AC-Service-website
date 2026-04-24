import { useBookingStore } from '../store/bookingStore'
import { submitBooking } from '@/lib/api/bookingApi'
import type { BookingFormData } from '../types/booking.types'

export function useBooking() {
  const store = useBookingStore()

  const submitForm = async (finalData: BookingFormData) => {
    store.setSubmitting(true)
    try {
      const result = await submitBooking(finalData)
      store.setBookingId(result.bookingId)
      return result
    } catch (error) {
      console.error('Booking submission failed:', error)
      throw error
    } finally {
      store.setSubmitting(false)
    }
  }

  return {
    ...store,
    submitForm,
  }
}
