import React from 'react'
import HeroSection from '../shared/HeroSection'

export default function HomePage(){
  return (
    <main>
      <HeroSection />
      <section className="py-12 px-8">
        <h2 className="text-2xl font-bold">Destaques</h2>
        <p className="text-sm text-gray-500">Explore os melhores anúncios.</p>
      </section>
    </main>
  )
}
