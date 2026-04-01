import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('✅ Thank you! Your travel inquiry has been received.\n\nWe will get back to you within 24 hours.')
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <div className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-semibold tracking-tighter mb-4">
        Plan Your Journey
      </h1>
      <p className="text-xl text-zinc-400 mb-12">
        Tell us about your dream trip or any questions you have. 
        Our team will create a personalized travel plan for you.
      </p>

      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label className="block text-sm mb-2 text-zinc-400">Full Name</label>
          <input
            type="text"
            value={form.name}
            onChange={e => setForm({...form, name: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="John Doe"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-zinc-400">Email Address</label>
          <input
            type="email"
            value={form.email}
            onChange={e => setForm({...form, email: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 transition-colors"
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-2 text-zinc-400">Tell us about your trip</label>
          <textarea
            rows="6"
            value={form.message}
            onChange={e => setForm({...form, message: e.target.value})}
            className="w-full bg-zinc-900 border border-zinc-700 rounded-2xl px-6 py-4 focus:outline-none focus:border-amber-500 resize-none transition-colors"
            placeholder="Example: I want to visit Riga and Tallinn for 7 days in June with my family. We prefer boutique hotels and local food experiences..."
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 py-5 rounded-2xl font-semibold text-lg transition-all"
        >
          Send Inquiry
        </button>
      </form>

      {/* Company Information */}
      <div className="mt-20 pt-12 border-t border-zinc-800">
        <h3 className="text-xl font-semibold mb-6">Our Office</h3>
        <div className="bg-zinc-900 p-8 rounded-3xl space-y-4 text-sm">
          <div>
            <p className="text-zinc-500">Company</p>
            <p className="font-medium">AYDIN TRAVEL GROUP, SIA</p>
          </div>
          <div>
            <p className="text-zinc-500">Registration Number</p>
            <p className="font-medium">40203697962</p>
          </div>
          <div>
            <p className="text-zinc-500">Legal Address</p>
            <p className="font-medium">
              Krišjāņa Valdemāra iela 149 - 203<br />
              Rīga, LV-1013, Latvia
            </p>
          </div>
          <div>
            <p className="text-zinc-500">Email</p>
            <p className="font-medium text-amber-400">info@aydintravelgroup.com</p>
          </div>
        </div>
      </div>
    </div>
  )
}