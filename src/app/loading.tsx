import { Skeleton } from '@/components/ui/Skeleton'

export default function Loading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Nav skeleton */}
      <div className="h-16 bg-brand-dark" />

      {/* Hero skeleton */}
      <div className="h-screen bg-gradient-to-br from-brand-dark to-brand-dark2 flex items-center justify-center">
        <div className="text-center space-y-6 max-w-2xl px-4">
          <Skeleton className="h-6 w-64 mx-auto bg-white/10" />
          <Skeleton className="h-16 w-full bg-white/10" />
          <Skeleton className="h-16 w-3/4 mx-auto bg-white/10" />
          <Skeleton className="h-6 w-96 mx-auto bg-white/10" />
          <div className="flex gap-4 justify-center">
            <Skeleton className="h-14 w-48 bg-white/10 rounded-button" />
            <Skeleton className="h-14 w-40 bg-white/10 rounded-button" />
          </div>
        </div>
      </div>

      {/* Content skeleton */}
      <div className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="bg-white rounded-card shadow-card p-6 space-y-4">
              <Skeleton className="w-12 h-12 rounded-xl" />
              <Skeleton className="h-5 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
