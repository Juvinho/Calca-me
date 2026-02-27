import React, { useEffect, useState } from 'react'
import type { Product } from '../../types'
import ProductCard from '../ui/ProductCard'

export default function ProductGrid(){
  const [items, setItems] = useState<Product[]>([])

  useEffect(() => {
    let mounted = true
    fetch('/api/v1/produtos')
      .then(r => r.json())
      .then((data) => { if(mounted) setItems(data) })
      .catch(() => {})
    return () => { mounted = false }
  }, [])

  return (
    <section className="px-8 lg:px-16 py-8">
      <h3 className="text-xl font-bold mb-4">Produtos</h3>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map(p => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </section>
  )
}
