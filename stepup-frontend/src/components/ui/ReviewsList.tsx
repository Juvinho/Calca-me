import React from 'react'
import RatingStars from './RatingStars'

export default function ReviewsList({ reviews }: { reviews: Array<{id:string, author:string, rating:number, text:string}> }){
  if(!reviews || reviews.length === 0) return <div className="text-sm text-gray-500">Sem avaliações ainda.</div>
  return (
    <div className="space-y-4">
      {reviews.map(r => (
        <div key={r.id} className="p-3 bg-white rounded shadow-sm">
          <div className="flex items-center justify-between">
            <div className="font-semibold">{r.author}</div>
            <RatingStars value={r.rating} />
          </div>
          <div className="text-gray-700 mt-2">{r.text}</div>
        </div>
      ))}
    </div>
  )
}
