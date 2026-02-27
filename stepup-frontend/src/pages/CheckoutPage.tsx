import React from 'react'
import { useCart } from '../context/CartContext'
import { Link } from 'react-router-dom'

export default function CheckoutPage(){
  const { cartItems, getCartTotal, removeFromCart } = useCart()

  if(cartItems.length === 0){
    return (
      <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center min-h-[60vh]">
        <div className="text-8xl">👟</div>
        <h2 className="text-3xl font-display font-bold text-azul-escuro mb-4">Seu carrinho está vazio</h2>
        <p className="text-cinza-texto mb-8 text-center max-w-md">Adicione produtos para finalizar a compra.</p>
        <Link to="/explorar" className="bg-primary text-white px-8 py-4 rounded-full font-bold">Explorar Sapatos</Link>
      </div>
    )
  }

  return (
    <main className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Seu Carrinho</h1>
      <ul className="space-y-4">
        {cartItems.map(i => (
          <li key={i.productId} className="p-4 bg-white rounded flex justify-between items-center">
            <div>
              <div className="font-bold">{i.nome}</div>
              <div className="text-sm text-gray-500">Qtd: {i.quantidade}</div>
            </div>
            <div>
              <div className="font-bold">R$ {(i.preco * i.quantidade).toFixed(2).replace('.',',')}</div>
              <button className="text-sm text-red-500 mt-2" onClick={() => removeFromCart(i.productId)}>Remover</button>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 p-4 bg-white rounded">
        <div className="flex justify-between font-bold">Total <span>R$ {getCartTotal().toFixed(2).replace('.',',')}</span></div>
        <button className="mt-4 w-full bg-primary text-white py-3 rounded">Finalizar Compra</button>
      </div>
    </main>
  )
}
