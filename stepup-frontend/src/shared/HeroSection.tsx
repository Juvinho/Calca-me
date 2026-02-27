import React, { useState } from 'react'

function HeroCarousel(){
  const items = [
    {id: '1', title: 'Nike Air Max 90', price: 459.9, img: 'https://placehold.co/350x300/EF4444/FFFFFF?text=Sneaker+1'},
    {id: '2', title: 'Adidas Ultraboost', price: 599.0, img: 'https://placehold.co/350x300/EF4444/FFFFFF?text=Sneaker+2'},
    {id: '3', title: 'Vans Old Skool', price: 249.0, img: 'https://placehold.co/350x300/EF4444/FFFFFF?text=Sneaker+3'},
  ];
  const [idx, setIdx] = useState(0)
  const cur = items[idx]
  return (
    <div className="relative">
      <div className="bg-hero-card rounded-3xl w-[380px] h-[450px] shadow-2xl p-6 flex flex-col items-center justify-center text-white">
        <img src={cur.img} className="w-64 h-40 object-contain" alt={cur.title} />
        <div className="mt-4 text-center">
          <div className="font-bold text-xl">{cur.title}</div>
          <div className="font-semibold">R$ {cur.price.toFixed(2).replace('.',',')}</div>
        </div>
      </div>
      <button onClick={() => setIdx((idx-1+items.length)%items.length)} className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg">{'<'}</button>
      <button onClick={() => setIdx((idx+1)%items.length)} className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg">{'>'}</button>
    </div>
  )
}

export default function HeroSection(){
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 min-h-[calc(100vh-5rem)] items-center px-8 lg:px-16 py-12">
      <div>
        <div className="inline-block bg-amber-50 text-amber-700 rounded-full px-4 py-1 text-sm font-medium">🔥 Novidades toda semana</div>
        <h1 className="text-4xl lg:text-6xl font-extrabold mt-6 leading-tight">Cada passo conta. <span className="text-primary">Compre e venda</span> sapatos com estilo.</h1>
        <p className="text-lg text-gray-500 mt-6 max-w-md">O maior marketplace de sapatos novos e usados do Brasil. Encontre o par perfeito ou venda os que não usa mais.</p>
        <div className="flex gap-4 mt-8">
          <a href="/explorar" className="bg-primary text-white px-8 py-3.5 rounded-full font-semibold hover:bg-blue-700 transition-all">Comprar Agora</a>
          <a href="/vender" className="border-2 border-gray-300 text-gray-700 px-8 py-3.5 rounded-full font-semibold hover:border-primary hover:text-primary transition-all">Vender Sapato</a>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <HeroCarousel />
      </div>
    </section>
  )
}
