export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-semibold tracking-tighter mb-4">Our Services</h1>
      <p className="text-xl text-zinc-400 mb-16">Premium research products designed for serious investors</p>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Daily European Brief", price: "€99/month", desc: "One-page summary + key charts every morning" },
          { title: "Sector Reports", price: "Included", desc: "Monthly 30+ page deep dives" },
          { title: "Custom Research", price: "On request", desc: "Bespoke company or thematic analysis" },
          { title: "Portfolio Review", price: "€499", desc: "Quarterly health check of your holdings" },
        ].map((s, i) => (
          <div key={i} className="bg-zinc-900 rounded-3xl p-10 hover:scale-[1.02] transition-all">
            <h3 className="text-3xl font-semibold mb-3">{s.title}</h3>
            <p className="text-blue-400 text-2xl mb-6">{s.price}</p>
            <p className="text-zinc-400">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}