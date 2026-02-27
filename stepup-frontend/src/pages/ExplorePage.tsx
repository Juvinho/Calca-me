import React from 'react'

export default function ExplorePage(){
  return (
    <main className="p-8">
      <h1 className="text-2xl font-bold mb-4">Explorar Sapatos</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-4 shadow">Card de produto (mock)</div>
        <div className="bg-white rounded-xl p-4 shadow">Card de produto (mock)</div>
        <div className="bg-white rounded-xl p-4 shadow">Card de produto (mock)</div>
      </div>
    </main>
  )
}
