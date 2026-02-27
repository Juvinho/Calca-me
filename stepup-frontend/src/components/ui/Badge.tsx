import React from 'react'

export default function Badge({ children, className = '' }: { children: React.ReactNode; className?: string }){
  return (
    <span className={`inline-flex items-center justify-center bg-primary text-white text-xs w-5 h-5 rounded-full font-bold ${className}`}>{children}</span>
  )
}
