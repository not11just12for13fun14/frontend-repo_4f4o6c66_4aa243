import React from 'react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section id="home" className="relative h-[80vh] md:h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/1VHYoewWfi45VYZ5/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <span className="inline-flex items-center text-xs uppercase tracking-wider bg-white/70 backdrop-blur px-3 py-1 rounded-full text-gray-700">Modern • Luxury • Urban</span>
            <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight text-gray-900 drop-shadow-sm">
              Discover Your Next Luxury Home
            </h1>
            <p className="mt-4 text-gray-700 text-lg max-w-xl bg-white/70 backdrop-blur rounded-md p-3">
              Curated listings in the most coveted neighborhoods. Experience contemporary living with panoramic skyline views.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input type="text" placeholder="City or neighborhood" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20 bg-white/80" />
              <input type="number" placeholder="Min price" className="px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20 bg-white/80" />
              <button className="px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors">Search</button>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/90 via-white/30 to-transparent" />
    </section>
  )
}
