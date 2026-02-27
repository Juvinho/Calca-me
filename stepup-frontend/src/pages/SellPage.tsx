import React from 'react'

export default function SellPage(){
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Vender Sapato</h1>
      <form className="space-y-4 max-w-xl">
        <input placeholder="Nome do sapato" className="w-full p-3 rounded border" />
        <input placeholder="Marca" className="w-full p-3 rounded border" />
        <div className="flex gap-2">
          <input placeholder="Tamanho" type="number" className="w-1/2 p-3 rounded border" />
          <input placeholder="Preço" type="number" className="w-1/2 p-3 rounded border" />
        </div>
        <button className="bg-primary text-white px-6 py-3 rounded">Publicar Anúncio</button>
      </form>
    </main>
  )
}
