'use client'
import { useEffect, useState } from 'react'
import { Star, Quote } from 'lucide-react'
import { Section, SectionHeader } from '@/components/layout/Section'
import { PageWrapper } from '@/components/layout/PageWrapper'
import { getPublishedReviews, subscribeToReviews } from '@/lib/supabase/api'

const FALLBACK_REVIEWS = [
  { id:'f1', customer_name:'Ramesh Krishnamurthy', rating:5, comment:'AA AC Service has been our go-to partner for over 3 years. When our central cooling system failed during peak weekend footfall, they were on-site within 90 minutes. Exceptional reliability.', company:'Nexus Vijaya Mall', role:'Facility Manager', is_published:true, review_token:'', created_at:'' },
  { id:'f2', customer_name:'Priya Venkataraman',   rating:5, comment:'We signed an AMC with them last year and it has been the best maintenance decision we have made. Scheduled visits are always on time and emergency calls get resolved same day.', company:'VR Mall', role:'Operations Manager', is_published:true, review_token:'', created_at:'' },
  { id:'f3', customer_name:'Suresh Balakrishnan',  rating:5, comment:'Their gas refilling and coil cleaning service significantly improved our cooling efficiency across all three floors. Energy bills dropped noticeably. Best AC team in Chennai.', company:'Phoenix Mall', role:'Maintenance Head', is_published:true, review_token:'', created_at:'' },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1,2,3,4,5].map((s) => (
        <Star key={s} className={`w-4 h-4 ${s <= rating ? 'fill-amber-400 text-amber-400' : 'text-gray-200'}`} />
      ))}
    </div>
  )
}

export function Testimonials() {
  const [reviews, setReviews] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getPublishedReviews().then((data) => {
      setReviews(data && data.length > 0 ? data : FALLBACK_REVIEWS)
      setLoading(false)
    }).catch(() => { setReviews(FALLBACK_REVIEWS); setLoading(false) })

    const channel = subscribeToReviews((newReview) => {
      setReviews((prev) => {
        const exists = prev.find((r) => r.id === newReview.id)
        if (exists) return prev.map((r) => r.id === newReview.id ? { ...r, ...newReview } : r)
        return [newReview, ...prev]
      })
    })
    return () => { channel.unsubscribe() }
  }, [])

  return (
    <Section id="testimonials">
      <PageWrapper>
        <SectionHeader eyebrow="Client Reviews" title="Trusted by Chennai's Best Malls" subtitle="Real feedback from the facility teams we work with every day." />
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1,2,3].map((i) => (
              <div key={i} className="bg-white rounded-card shadow-card p-8 space-y-4 animate-pulse">
                <div className="flex gap-1">{[1,2,3,4,5].map(s=><div key={s} className="w-4 h-4 rounded-full bg-gray-200"/>)}</div>
                <div className="h-4 bg-gray-200 rounded w-full"/><div className="h-4 bg-gray-200 rounded w-5/6"/><div className="h-4 bg-gray-200 rounded w-3/4"/>
                <div className="flex items-center gap-3 pt-2"><div className="w-10 h-10 rounded-full bg-gray-200"/><div className="space-y-1"><div className="h-4 bg-gray-200 rounded w-32"/><div className="h-3 bg-gray-200 rounded w-24"/></div></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.slice(0,3).map((review) => (
              <div key={review.id} className="bg-white rounded-card shadow-card p-8 flex flex-col border border-brand-light hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                <StarRating rating={review.rating} />
                <Quote className="w-8 h-8 text-brand-light mt-4 mb-2" />
                <p className="font-body text-text-secondary text-sm leading-relaxed flex-1 mb-6">&ldquo;{review.review_text}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-brand-light">
                  <div className="w-10 h-10 rounded-full bg-brand-dark2 flex items-center justify-center text-white font-heading font-bold text-sm shrink-0">
                    {review.customer_name?.charAt(0) || 'C'}
                  </div>
                  <div>
                    <p className="font-heading font-bold text-sm text-text-primary">{review.customer_name}</p>
                    <p className="font-body text-xs text-text-muted">
                      {review.role ? `${review.role} · ${review.company}` : 'Verified Client'}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </PageWrapper>
    </Section>
  )
}