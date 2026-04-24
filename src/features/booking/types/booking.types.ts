export interface BookingFormData {
  // Step 1
  name:        string
  phone:       string
  company:     string
  address:     string
  pincode:     string

  // Step 2
  serviceType: 'repair' | 'cleaning' | 'amc' | 'gas-refill'
  acBrand:     string
  acUnits:     number
  description: string

  // Step 3
  date:      string
  timeSlot:  'morning' | 'afternoon' | 'evening'
}

export interface BookingResult {
  bookingId:  string
  status:     'confirmed'
  message:    string
}
