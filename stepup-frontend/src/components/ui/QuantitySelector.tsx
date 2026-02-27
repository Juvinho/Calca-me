import React from 'react'

export default function QuantitySelector({ value, onChange }: { value: number, onChange: (v:number)=>void }){
  return (
    <div className="inline-flex items-center border rounded overflow-hidden">
      <button onClick={() => onChange(Math.max(1, value-1))} className="px-3 py-2">-</button>
      <div className="px-4">{value}</div>
      <button onClick={() => onChange(value+1)} className="px-3 py-2">+</button>
    </div>
  )
}
