import React from 'react'
import type { Product } from '../../types'
import { useCart } from '../../context/CartContext'
import { Link } from 'react-router-dom'

export default function ProductCard({ product }: { product: Product }){
  const { addToCart } = useCart()

  const handleAdd = () => {
    addToCart({ productId: product.id, nome: product.nome, preco: product.preco, quantidade: 1, urlImagem: product.urlImagem })
  }

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <Link to={`/produto/${product.id}`} className="block">
        <img src={product.urlImagem} alt={product.nome} className="w-full h-40 object-contain mb-3" />
      </Link>
      <div className="flex-1">
        <Link to={`/produto/${product.id}`} className="no-underline text-inherit">
          <div className="font-semibold">{product.nome}</div>
          <div className="text-sm text-gray-500">{product.marca} • {product.condicao}</div>
        </Link>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="text-lg font-bold text-accent-erro">R$ {product.preco.toFixed(2).replace('.',',')}</div>
        <button onClick={handleAdd} className="bg-primary text-white px-3 py-2 rounded-full">Adicionar</button>
      </div>
    </div>
  )
}
