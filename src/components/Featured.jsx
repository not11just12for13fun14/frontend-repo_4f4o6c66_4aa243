import React, { useEffect, useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Featured() {
  const [listings, setListings] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchListings = async () => {
      try {
        const res = await fetch(`${apiBase}/api/properties?featured=true&limit=6`)
        const data = await res.json()
        setListings(data)
      } catch (e) {
        console.error(e)
      } finally {
        setLoading(false)
      }
    }
    fetchListings()
  }, [])

  return (
    <section id="listings" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Featured Listings</h2>
            <p className="text-gray-600 mt-1">Handpicked homes with outstanding design and views</p>
          </div>
          <a href="#" className="text-sm font-medium text-gray-900 hover:opacity-80">View all</a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="animate-pulse h-72 bg-gray-100 rounded-xl" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {listings.map((home) => (
              <article key={home.id || home._id} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img src={home.image_url || 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400&auto=format&fit=crop'} alt={home.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-3 left-3 bg-white/80 backdrop-blur px-2 py-1 rounded text-xs font-medium">${home.price?.toLocaleString()}</div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-900 line-clamp-1">{home.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{home.address}, {home.city}</p>
                  <div className="mt-3 flex items-center gap-4 text-sm text-gray-700">
                    <span>{home.beds} bd</span>
                    <span>{home.baths} ba</span>
                    <span>{home.area_sqft} sqft</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
