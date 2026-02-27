import React from 'react'
import { Link } from 'react-router-dom'

export default function Logo(){
  return (
    <Link to="/" className="text-2xl font-bold">
      <span className="text-gray-900">Step</span><span className="text-primary">Up</span>
    </Link>
  )
}
