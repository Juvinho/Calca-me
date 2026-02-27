import React from 'react'
import { Search } from 'lucide-react'

export default function SearchBar({ value, onChange }: { value?: string; onChange?: (v:string)=>void }){
  return (
    <div className="relative w-full max-w-lg">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
      <input value={value} onChange={e => onChange?.(e.target.value)} placeholder="Buscar por marca, modelo ou tamanho..." className="pl-10 w-full rounded-full bg-gray-100 border border-transparent focus:border-primary py-2 px-4" />
    </div>
  )
}
