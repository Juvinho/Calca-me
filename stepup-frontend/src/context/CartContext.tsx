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
      return raw ? JSON.parse(raw) : [];
    }catch{ return [] }
  });

  useEffect(() => {
    try{ localStorage.setItem('cart', JSON.stringify(cartItems)) }catch{}
  }, [cartItems]);

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

  const getCartCount = () => cartItems.reduce((acc, i) => acc + i.quantidade, 0)
  const getCartTotal = () => cartItems.reduce((acc, i) => acc + i.preco * i.quantidade, 0)
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
