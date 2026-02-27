import React from 'react'
import { Link } from 'react-router-dom'
import { Search, Heart, ShoppingBag, UserCircle2, ChevronRight } from 'lucide-react'
import { useCart } from '../../context/CartContext'

export default function Navbar(){
  const { getCartCount } = useCart();
  const count = getCartCount();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm h-20 flex items-center px-8 lg:px-16">
      <div className="flex items-center gap-6 w-full">
        <Link to="/" className="text-2xl font-bold">
          <span className="text-gray-900">Step</span><span className="text-primary">Up</span>
        </Link>

        <div className="flex-1 max-w-lg">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input placeholder="Buscar por marca, modelo ou tamanho..." className="pl-10 w-full rounded-full bg-gray-100 border border-transparent focus:border-primary py-2 px-4" />
          </div>
        </div>

        <nav className="flex items-center gap-4">
          <Link to="/explorar" className="text-gray-600 hover:text-primary font-medium text-sm">Explorar</Link>
          <Link to="/vender" className="text-gray-600 hover:text-primary font-medium text-sm">Vender</Link>
          <button className="bg-blue-50 text-primary px-3 py-2 rounded-full flex items-center gap-2">Medir Pé</button>
          <Heart className="text-gray-500 hover:text-red-500 cursor-pointer" />

          <Link to="/checkout" className="relative">
            <ShoppingBag className="text-gray-500 hover:text-azul-primario" />
            {count > 0 && (
              <span className="absolute -top-2 -right-2 bg-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">{count}</span>
            )}
          </Link>

          <UserCircle2 className="text-gray-500" />
        </nav>
      </div>
    </header>
  )
}
