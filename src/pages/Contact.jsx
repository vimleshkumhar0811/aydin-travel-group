import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✅ Message received! We will reply within 24 hours.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-semibold tracking-tighter mb-4">Get in Touch</h1>
      <p className="text-zinc-400 mb-12">Have a question or want to subscribe? Send us a message.</p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm mb-2">Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Email</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2">Message</label>
          <textarea
            rows="6"
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-blue-600 resize-none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 py-5 rounded-2xl font-semibold text-lg transition"
        >
          Send Message
        </button>
      </form>

      {/* <div className="mt-16 text-center text-sm text-zinc-500">
        SIA Quickproto • Reg. 40203704395 • Jēkabpils, Latvia
      </div> */}
    </div>
  )
}