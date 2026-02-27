import React, { createContext, useContext, useState, useEffect } from 'react'
import type { CartItem } from '../types'

interface CartContextShape {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  getCartCount: () => number;
  getCartTotal: () => number;
  clearCart: () => void;
}

const CartContext = createContext<CartContextShape | undefined>(undefined);

export const CartProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try{
      const raw = localStorage.getItem('cart');
      if (!raw) return [];
      const parsed = JSON.parse(raw);
      if (!Array.isArray(parsed)) return [];
      // Normalize legacy or mixed shapes into current CartItem shape
      const normalized = parsed.map((it: any) => {
        // possible legacy shapes: { id, title, price, image, size, color }
        // or { productId, nome, preco, quantidade, urlImagem }
        const productId = it.productId || it.id || it.product_id || (it.itemId && String(it.itemId)) || String(it.id || '')
        const nome = it.nome || it.name || it.title || it.titleName || ''
        const preco = Number(it.preco ?? it.preco_price ?? it.price ?? it.valor ?? 0) || Number(it.price ?? 0)
        const quantidade = Number(it.quantidade ?? it.quantity ?? it.qtd ?? 1) || 1
        const urlImagem = it.urlImagem || it.image || it.img || it.url || ''
        return { productId: String(productId || nome || Math.random()), nome, preco, quantidade, urlImagem } as CartItem
      })
      return normalized;
    }catch{ return [] }
  });

  useEffect(() => {
    try{ localStorage.setItem('cart', JSON.stringify(cartItems)) }catch{}
  }, [cartItems]);

  // One-time migration flag: mark that we've normalized persisted cart
  useEffect(() => {
    try{
      const migrated = localStorage.getItem('cart_migrated_v1')
      if(!migrated){
        // ensure current normalized cart is written (it already is via the other effect)
        localStorage.setItem('cart', JSON.stringify(cartItems))
        localStorage.setItem('cart_migrated_v1', '1')
        // eslint-disable-next-line no-console
        console.info('Cart migration: normalized cart persisted and flagged')
      }
    }catch{}
  }, [])

  const addToCart = (item: CartItem) => {
    setCartItems(prev => {
      const found = prev.find(i => i.productId === item.productId);
      if(found){
        return prev.map(i => i.productId === item.productId ? {...i, quantidade: i.quantidade + item.quantidade} : i)
      }
      return [...prev, item]
    })
  }

  const removeFromCart = (productId: string) => {
    setCartItems(prev => prev.filter(i => i.productId !== productId))
  }

  const getCartCount = () => {
    const sum = cartItems.reduce((acc, i) => acc + (Number(i.quantidade) || 0), 0)
    return Math.max(0, Math.floor(sum))
  }
  const getCartTotal = () => cartItems.reduce((acc, i) => acc + (Number(i.preco) || 0) * (Number(i.quantidade) || 0), 0)
  const clearCart = () => setCartItems([])

  return (
    <CartContext.Provider value={{cartItems, addToCart, removeFromCart, getCartCount, getCartTotal, clearCart}}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if(!ctx) throw new Error('useCart must be used within CartProvider')
  return ctx;
}
