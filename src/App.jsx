import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Featured />
        <Contact />
      </main>
      <footer className="border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-600 flex items-center justify-between">
          <p>© {new Date().getFullYear()} LuxNest Realty. All rights reserved.</p>
          <a className="hover:text-gray-900" href="/test">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
