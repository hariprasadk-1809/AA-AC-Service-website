import { supabase, type Review, type Enquiry } from './client'

const HEADERS = {
  'apikey':       process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  'Authorization':`Bearer ${process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!}`,
  'Content-Type': 'application/json',
}

const BASE = process.env.NEXT_PUBLIC_SUPABASE_URL

// ════════════════════════════════════════
// REVIEWS
// ════════════════════════════════════════

export async function getPublishedReviews(): Promise<Review[]> {
  const res = await fetch(
    `${BASE}/rest/v1/reviews?is_published=eq.true&order=created_at.desc`,
    { headers: HEADERS, next: { revalidate: 60 } }
  )
  if (!res.ok) return []
  return res.json()
}

export async function getReviewByToken(token: string): Promise<Review | null> {
  const res = await fetch(
    `${BASE}/rest/v1/reviews?review_token=eq.${token}&limit=1`,
    { headers: HEADERS }
  )
  if (!res.ok) return null
  const data = await res.json()
  return data[0] || null
}

export async function submitReview(
  token: string,
  data: { customer_name: string; rating: number; comment: string }
): Promise<boolean> {
  const res = await fetch(
    `${BASE}/rest/v1/reviews?review_token=eq.${token}`,
    {
      method:  'PATCH',
      headers: { ...HEADERS, 'Prefer': 'return=minimal' },
      body:    JSON.stringify({
        customer_name: data.customer_name,
        rating:        data.rating,
        review_text:   data.comment,
        is_published:  true, // Auto publish when client submits
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    console.error('Review submit error:', err)
  }
  return res.ok
}

// ════════════════════════════════════════
// ENQUIRIES
// ════════════════════════════════════════

export async function submitEnquiry(data: Enquiry): Promise<boolean> {
  const res = await fetch(
    `${BASE}/rest/v1/enquiries`,
    {
      method:  'POST',
      headers: { ...HEADERS, 'Prefer': 'return=minimal' },
      body:    JSON.stringify({
        name:    data.name,
        phone:   data.phone,
        company: data.company || '',
        service: data.service || '',
        message: data.message || '',
        status:  'new',
      }),
    }
  )
  if (!res.ok) {
    const err = await res.text()
    console.error('Enquiry submit error:', err)
  }
  return res.ok
}

// ════════════════════════════════════════
// REALTIME
// ════════════════════════════════════════
export function subscribeToReviews(
  onUpdate: (review: Review) => void
) {
  return supabase
    .channel('public-reviews')
    .on(
      'postgres_changes',
      { event: '*', schema: 'public', table: 'reviews' },
      (payload) => {
        if (payload.new && (payload.new as Review).is_published) {
          onUpdate(payload.new as Review)
        }
      }
    )
    .subscribe()
}