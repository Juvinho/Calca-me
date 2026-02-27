import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../types'
import { useCart } from '../context/CartContext'
import QuantitySelector from '../components/ui/QuantitySelector'
import ReviewsList from '../components/ui/ReviewsList'
import ReviewForm from '../components/ui/ReviewForm'
import RelatedProducts from '../components/home/RelatedProducts'

export default function ProductPage(){
  const { id } = useParams<{id: string}>()
  const [product, setProduct] = useState<Product | null>(null)
  const [qty, setQty] = useState(1)
  const [reviews, setReviews] = useState<Array<any>>([])
  const { addToCart } = useCart()

  useEffect(() => {
    if(!id) return
    fetch(`/api/v1/produtos/${id}`)
      .then(r => r.ok ? r.json() : Promise.reject())
      .then(data => setProduct(data))
      .catch(() => setProduct(null))

    fetch(`/api/v1/produtos/${id}/reviews`).then(r=>r.ok? r.json():[]).then(j=>setReviews(j)).catch(()=>setReviews([]))
  }, [id])

  if(!product) return (<div className="p-8">Produto não encontrado.</div>)

  return (
    <main className="p-8 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img src={product.urlImagem} alt={product.nome} className="w-full h-96 object-contain rounded" />
          <div className="mt-4 flex gap-2">
            {/* small thumbnails could be here - using same image for now */}
            <img src={product.urlImagem} className="w-20 h-20 object-contain rounded border" alt="thumb" />
            <img src={product.urlImagem} className="w-20 h-20 object-contain rounded border" alt="thumb" />
          </div>
        </div>

        <div>
          <h1 className="text-3xl font-bold">{product.nome}</h1>
          <div className="text-sm text-gray-500">{product.marca} • {product.condicao}</div>
          <div className="text-2xl font-extrabold text-accent-erro mt-6">R$ {product.preco.toFixed(2).replace('.',',')}</div>
          <p className="mt-6 text-gray-600">Tamanho: {product.tamanho}</p>

          <div className="mt-6 flex items-center gap-4">
            <QuantitySelector value={qty} onChange={setQty} />
            <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={() => addToCart({ productId: product.id, nome: product.nome, preco: product.preco, quantidade: qty, urlImagem: product.urlImagem })}>Adicionar ao carrinho</button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-semibold">Avaliações</h3>
            <ReviewsList reviews={reviews} />
            <div className="mt-4">
              <ReviewForm productId={product.id} onAdded={(r)=> setReviews(prev => [r, ...prev])} />
            </div>
          </div>
        </div>
      </div>

      <RelatedProducts currentId={product.id} />
    </main>
  )
}
