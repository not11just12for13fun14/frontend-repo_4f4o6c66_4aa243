import React, { useState } from 'react'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const submit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    try {
      const res = await fetch(`${apiBase}/api/inquiries`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...form })
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('sent')
      setForm({ name: '', email: '', phone: '', message: '' })
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900">Get in touch</h2>
            <p className="text-gray-600 mt-2">Tell us what you’re looking for and our team will get back to you.</p>
            <ul className="mt-6 space-y-3 text-gray-700">
              <li>• Luxury condos and penthouses</li>
              <li>• New developments and pre-construction</li>
              <li>• Furnished rentals and corporate housing</li>
            </ul>
          </div>
          <form onSubmit={submit} className="bg-white p-6 rounded-xl border border-gray-200 space-y-4">
            <input value={form.name} onChange={(e)=>setForm({ ...form, name:e.target.value })} required placeholder="Full name" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
            <input type="email" value={form.email} onChange={(e)=>setForm({ ...form, email:e.target.value })} required placeholder="Email" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
            <input value={form.phone} onChange={(e)=>setForm({ ...form, phone:e.target.value })} placeholder="Phone (optional)" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
            <textarea value={form.message} onChange={(e)=>setForm({ ...form, message:e.target.value })} required placeholder="Tell us about your ideal place" rows="4" className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-900/20" />
            <button type="submit" className="w-full px-6 py-3 rounded-md bg-gray-900 text-white font-medium hover:bg-black transition-colors">
              {status === 'sending' ? 'Sending...' : 'Send message'}
            </button>
            {status === 'sent' && <p className="text-green-600 text-sm">Thanks! We’ll be in touch soon.</p>}
            {status === 'error' && <p className="text-red-600 text-sm">Something went wrong. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
