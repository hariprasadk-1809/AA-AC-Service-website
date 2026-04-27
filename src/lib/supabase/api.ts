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

// Fetch all published reviews for website testimonials
export async function getPublishedReviews(): Promise<Review[]> {
  const res = await fetch(
    `${BASE}/rest/v1/reviews?is_published=eq.true&order=created_at.desc`,
    { headers: HEADERS, next: { revalidate: 60 } }
  )
  if (!res.ok) return []
  return res.json()
}

// Get a single review by token (for the review submission page)
export async function getReviewByToken(token: string): Promise<Review | null> {
  const res = await fetch(
    `${BASE}/rest/v1/reviews?review_token=eq.${token}&limit=1`,
    { headers: HEADERS }
  )
  if (!res.ok) return null
  const data = await res.json()
  return data[0] || null
}

// Submit a review (client fills the form via unique link)
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
      }),
    }
  )
  return res.ok
}

// ════════════════════════════════════════
// ENQUIRIES
// ════════════════════════════════════════

// Submit enquiry from contact form → saves to Supabase → app sees it instantly
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
  return res.ok
}

// ════════════════════════════════════════
// REALTIME — live review updates on website
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