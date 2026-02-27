import React from 'react'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'solid' | 'outline'
}

export default function Button({ variant = 'solid', children, ...props }: ButtonProps){
  const base = 'px-6 py-3 rounded-full font-semibold text-base transition-all inline-flex items-center gap-2'
  const cls = variant === 'solid' ? `${base} bg-primary text-white hover:bg-blue-700` : `${base} border-2 border-gray-300 text-gray-700 hover:border-primary hover:text-primary`
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  )
}
