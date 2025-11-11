import React from 'react'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 border-b border-white/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded bg-gradient-to-br from-blue-600 to-indigo-600" />
          <span className="text-xl font-semibold tracking-tight text-gray-900">LuxNest Realty</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-gray-700">
          <a href="#home" className="hover:text-gray-900 transition-colors">Home</a>
          <a href="#listings" className="hover:text-gray-900 transition-colors">Listings</a>
          <a href="#contact" className="hover:text-gray-900 transition-colors">Contact</a>
        </nav>
        <a href="#contact" className="inline-flex items-center px-4 py-2 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-black transition-colors">
          List your property
        </a>
      </div>
    </header>
  )
}
