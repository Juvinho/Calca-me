import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import HomePage from './pages/HomePage'
import ExplorePage from './pages/ExplorePage'
import SellPage from './pages/SellPage'
import CheckoutPage from './pages/CheckoutPage'

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explorar" element={<ExplorePage />} />
        <Route path="/vender" element={<SellPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
      </Routes>
    </div>
  )
}
