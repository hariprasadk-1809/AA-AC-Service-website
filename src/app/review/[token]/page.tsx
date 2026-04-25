'use client'
import { useEffect, useState } from 'react'
import { Star, CheckCircle2, AlertCircle, Snowflake } from 'lucide-react'
import { getReviewByToken, submitReview } from '@/lib/supabase/api'
import { Button } from '@/components/ui/Button'

export default function ReviewPage({ params }: { params: { token: string } }) {
  const [review, setReview]     = useState<any>(null)
  const [loading, setLoading]   = useState(true)
  const [notFound, setNotFound] = useState(false)
  const [alreadyDone, setAlreadyDone] = useState(false)

  const [name, setName]       = useState('')
  const [rating, setRating]   = useState(0)
  const [hovered, setHovered] = useState(0)
  const [comment, setComment] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted]   = useState(false)
  const [error, setError]     = useState('')

  useEffect(() => {
    getReviewByToken(params.token).then((data) => {
      if (!data) { setNotFound(true) }
      else if (data.customer_name && data.rating) { setAlreadyDone(true) }
      else { setReview(data) }
      setLoading(false)
    }).catch(() => { setNotFound(true); setLoading(false) })
  }, [params.token])

  const handleSubmit = async () => {
    if (!name.trim()) { setError('Please enter your name.'); return }
    if (rating === 0)  { setError('Please select a star rating.'); return }
    if (!comment.trim()) { setError('Please write a short comment.'); return }
    setError('')
    setSubmitting(true)
    const ok = await submitReview(params.token, { customer_name: name, rating, comment })
    setSubmitting(false)
    if (ok) setSubmitted(true)
    else setError('Something went wrong. Please try again.')
  }

  if (loading) return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center">
      <Snowflake className="w-10 h-10 text-brand-accent animate-spin" />
    </div>
  )

  if (notFound) return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-10 text-center space-y-4">
        <AlertCircle className="w-12 h-12 text-red-400 mx-auto" />
        <h1 className="font-heading font-bold text-2xl text-text-primary">Link Not Found</h1>
        <p className="font-body text-text-secondary text-sm">This review link is invalid or has expired. Please contact AA AC Service for a new link.</p>
        <a href="/" className="block"><Button variant="primary" className="w-full">Go to Website</Button></a>
      </div>
    </div>
  )

  if (alreadyDone) return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-10 text-center space-y-4">
        <CheckCircle2 className="w-12 h-12 text-green-500 mx-auto" />
        <h1 className="font-heading font-bold text-2xl text-text-primary">Already Submitted</h1>
        <p className="font-body text-text-secondary text-sm">You have already submitted your review. Thank you!</p>
        <a href="/" className="block"><Button variant="primary" className="w-full">Go to Website</Button></a>
      </div>
    </div>
  )

  if (submitted) return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-10 text-center space-y-4">
        <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto" />
        <h1 className="font-heading font-bold text-2xl text-text-primary">Thank You!</h1>
        <p className="font-body text-text-secondary text-sm leading-relaxed">
          Your review has been submitted. It will appear on our website once approved. We appreciate your feedback!
        </p>
        <a href="/" className="block"><Button variant="primary" className="w-full">Back to Website</Button></a>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-brand-offwhite flex items-center justify-center px-4 py-12">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-card p-8 space-y-6">

        {/* Header */}
        <div className="text-center">
          <div className="w-14 h-14 rounded-xl bg-brand-dark2 flex items-center justify-center mx-auto mb-4">
            <Snowflake className="w-7 h-7 text-white" />
          </div>
          <h1 className="font-heading font-bold text-2xl text-text-primary">Leave a Review</h1>
          <p className="font-body text-text-secondary text-sm mt-2">
            How was your experience with AA AC Service?
          </p>
        </div>

        {/* Name */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary font-heading">Your Name *</label>
          <input
            type="text"
            placeholder="Enter your full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent"
          />
        </div>

        {/* Star rating */}
        <div className="flex flex-col gap-2">
          <label className="text-sm font-semibold text-text-primary font-heading">Rating *</label>
          <div className="flex gap-2 justify-center">
            {[1,2,3,4,5].map((s) => (
              <button
                key={s}
                onClick={() => setRating(s)}
                onMouseEnter={() => setHovered(s)}
                onMouseLeave={() => setHovered(0)}
                className="transition-transform hover:scale-110"
              >
                <Star className={`w-10 h-10 transition-colors ${
                  s <= (hovered || rating) ? 'fill-amber-400 text-amber-400' : 'text-gray-300'
                }`} />
              </button>
            ))}
          </div>
          <p className="text-center text-xs font-body text-text-muted">
            {rating === 1 && 'Poor'} {rating === 2 && 'Fair'} {rating === 3 && 'Good'} {rating === 4 && 'Very Good'} {rating === 5 && 'Excellent!'}
          </p>
        </div>

        {/* Comment */}
        <div className="flex flex-col gap-1.5">
          <label className="text-sm font-semibold text-text-primary font-heading">Your Review *</label>
          <textarea
            rows={4}
            placeholder="Tell us about your experience..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 font-body text-sm text-text-primary bg-white focus:outline-none focus:ring-2 focus:ring-brand-accent resize-none"
          />
        </div>

        {error && <p className="text-sm text-red-500 font-body">{error}</p>}

        <Button variant="primary" className="w-full" loading={submitting} onClick={handleSubmit}>
          Submit Review
        </Button>

        <p className="text-center text-xs text-text-muted font-body">
          Your review will be visible on our website after approval.
        </p>
      </div>
    </div>
  )
}
