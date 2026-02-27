import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container mx-auto px-4 py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} StepUp — Marketplace de Sapatos. Todos os direitos reservados.
      </div>
    </footer>
  )
}
