export type Status = 'idle' | 'loading' | 'success' | 'error'

export interface SelectOption {
  label: string
  value: string
}

export interface NavItem {
  label: string
  href:  string
}
