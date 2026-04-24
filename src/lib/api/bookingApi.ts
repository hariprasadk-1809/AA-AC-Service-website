import { apiClient } from './client'
import type { BookingFormData } from '@/features/booking/types/booking.types'

export async function submitBooking(data: BookingFormData) {
  const response = await apiClient.post('/bookings', data)
  return response.data
}

export async function getBookingById(id: string) {
  const response = await apiClient.get(`/bookings/${id}`)
  return response.data
}
