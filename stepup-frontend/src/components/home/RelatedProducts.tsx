import React, { useEffect, useState } from 'react'
import type { Product } from '../../types'
import ProductCard from '../ui/ProductCard'

export default function RelatedProducts({ currentId }: { currentId: string }){
  const [items, setItems] = useState<Product[]>([])
  useEffect(() => {
    fetch('/api/v1/produtos').then(r=>r.json()).then((data)=> setItems(data.filter((p:Product)=>p.id !== currentId).slice(0,4))).catch(()=>{})
  }, [currentId])

  if(!items.length) return null
  return (
    <section className="mt-8">
      <h4 className="text-lg font-bold mb-3">Você também pode gostar</h4>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {items.map(p => <ProductCard key={p.id} product={p} />)}
      </div>
    </section>
  )
}
