export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 pt-24 pb-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
            European Markets.<br />Clear Insight.
          </h2>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Independent financial research covering 27 EU markets. Daily analysis, sector reports, and investment intelligence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/services" className="bg-white text-black px-10 py-4 rounded-2xl font-semibold text-lg hover:bg-zinc-100 transition">Explore Research</a>
            <a href="/contact" className="border border-white/30 hover:border-white/60 px-10 py-4 rounded-2xl font-semibold text-lg transition">Talk to Us</a>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-zinc-900 py-6 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-400 text-sm">
          <div>🇪🇺 EU Regulated Markets</div>
          <div>Daily Coverage</div>
          <div>Independent Analysis</div>
          <div>20+ Years Combined Experience</div>
        </div>
      </div>

      {/* Services Teaser */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-semibold text-center mb-16">What We Deliver</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Daily Market Brief", desc: "Morning summary of all major European indices and macro events" },
            { title: "Sector Deep Dives", desc: "In-depth reports on Banking, Energy, Tech & Renewables" },
            { title: "Investment Ideas", desc: "Actionable long/short ideas with entry levels and targets" },
          ].map((item, i) => (
            <div key={i} className="bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition">
              <div className="text-blue-400 text-5xl mb-6">0{i+1}</div>
              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}