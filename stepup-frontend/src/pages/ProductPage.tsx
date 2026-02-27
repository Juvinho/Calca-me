import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import type { Product } from '../types'
import { useCart } from '../context/CartContext'

export default function ProductPage(){
  const { id } = useParams<{id: string}>()
  const [product, setProduct] = useState<Product | null>(null)
  const { addToCart } = useCart()

  useEffect(() => {
    if(!id) return
    fetch(`/api/v1/produtos/${id}`)
      .then(r => r.json())
      .then(data => setProduct(data))
      .catch(() => setProduct(null))
  }, [id])

  if(!product) return (<div className="p-8">Produto não encontrado.</div>)

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <img src={product.urlImagem} alt={product.nome} className="w-full h-96 object-contain" />
        <div>
          <h1 className="text-3xl font-bold">{product.nome}</h1>
          <div className="text-sm text-gray-500">{product.marca} • {product.condicao}</div>
          <div className="text-2xl font-extrabold text-accent-erro mt-6">R$ {product.preco.toFixed(2).replace('.',',')}</div>
          <p className="mt-6 text-gray-600">Tamanho: {product.tamanho}</p>
          <div className="mt-8">
            <button className="bg-primary text-white px-6 py-3 rounded-full" onClick={() => addToCart({ productId: product.id, nome: product.nome, preco: product.preco, quantidade: 1, urlImagem: product.urlImagem })}>Adicionar ao carrinho</button>
          </div>
        </div>
      </div>
    </main>
  )
}
