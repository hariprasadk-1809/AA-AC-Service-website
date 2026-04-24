export function formatPhone(raw: string): string {
  return raw.replace(/(\d{5})(\d{5})/, '$1 $2')
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-IN', {
    style:    'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-IN', {
    day:   'numeric',
    month: 'long',
    year:  'numeric',
  }).format(date)
}
