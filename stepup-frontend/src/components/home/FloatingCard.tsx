import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingCard({ children, className = '' }: { children?: React.ReactNode; className?: string }){
  return (
    <motion.div animate={{ y: [0, -10, 0] }} transition={{ repeat: Infinity, duration: 3 }} className={`rounded-2xl p-3 shadow-xl ${className}`}>
      {children}
    </motion.div>
  )
}
