import React, { useState } from 'react'

export default function ReviewForm({ productId, onAdded }: { productId: string, onAdded?: (r:any)=>void }){
  const [author, setAuthor] = useState('')
  const [rating, setRating] = useState(5)
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)

  const submit = async () => {
    setLoading(true)
    try{
      const res = await fetch(`/api/v1/produtos/${productId}/reviews`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ author: author || 'Anon', rating, text }) })
      const json = await res.json()
      setAuthor(''); setText(''); setRating(5)
      onAdded && onAdded(json)
    }catch{}
    setLoading(false)
  }

  return (
    <div className="space-y-2">
      <input placeholder="Seu nome" value={author} onChange={e=>setAuthor(e.target.value)} className="w-full border px-3 py-2 rounded" />
      <div className="flex items-center gap-3">
        <label className="text-sm">Nota:</label>
        <select value={rating} onChange={e=>setRating(Number(e.target.value))} className="border px-2 py-1 rounded">
          {[5,4,3,2,1].map(v => <option key={v} value={v}>{v}</option>)}
        </select>
      </div>
      <textarea placeholder="Escreva sua avaliação" value={text} onChange={e=>setText(e.target.value)} className="w-full border px-3 py-2 rounded" />
      <button onClick={submit} className="bg-primary text-white px-4 py-2 rounded" disabled={loading}>{loading ? 'Enviando...' : 'Enviar Avaliação'}</button>
    </div>
  )
}
