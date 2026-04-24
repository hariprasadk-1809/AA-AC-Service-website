export const SERVICE_IDS = {
  REPAIR:    'repair',
  CLEANING:  'cleaning',
  AMC:       'amc',
  GAS_REFILL:'gas-refill',
} as const

export type ServiceId = typeof SERVICE_IDS[keyof typeof SERVICE_IDS]
