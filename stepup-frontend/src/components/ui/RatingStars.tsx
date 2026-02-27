import React from 'react'

export default function RatingStars({ value }: { value: number }){
  const stars = Array.from({length:5}).map((_,i) => i < Math.round(value))
  return (
    <div className="flex gap-1 text-amber-400">
      {stars.map((on, i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className={`w-4 h-4 ${on ? '' : 'opacity-30'}`}>
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.975a1 1 0 00.95.69h4.18c.969 0 1.371 1.24.588 1.81l-3.385 2.455a1 1 0 00-.364 1.118l1.287 3.974c.3.922-.755 1.688-1.54 1.118l-3.385-2.455a1 1 0 00-1.175 0L5.04 17.067c-.784.57-1.838-.196-1.539-1.118l1.287-3.974a1 1 0 00-.364-1.118L1.04 8.402c-.783-.57-.38-1.81.588-1.81h4.18a1 1 0 00.95-.69L9.05 2.927z" />
        </svg>
      ))}
    </div>
  )
}
