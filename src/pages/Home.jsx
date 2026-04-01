export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 pt-24 pb-32 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-zinc-800/50 text-amber-400 text-sm px-4 py-1.5 rounded-full mb-6 border border-amber-500/20">
            🌍 Premium Travel Experiences
          </div>

          <h1 className="text-6xl md:text-7xl font-semibold tracking-tighter mb-6">
            Discover Europe.<br />
            Create Memories.
          </h1>
          
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto mb-10">
            Curated journeys across Europe and beyond. From hidden gems in the Baltics 
            to iconic destinations in Italy, France, and beyond — we craft unforgettable travel experiences.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/destinations" 
              className="bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
            >
              Explore Destinations
            </a>
            <a 
              href="/contact" 
              className="border border-white/30 hover:border-white/60 px-10 py-4 rounded-2xl font-semibold text-lg transition"
            >
              Plan Your Trip
            </a>
          </div>
        </div>

        {/* Subtle background decoration */}
        <div className="absolute inset-0 bg-[radial-gradient(at_center,#f59e0b10_0%,transparent_70%)] pointer-events-none"></div>
      </section>

      {/* Trust Bar */}
      <div className="bg-zinc-900 py-6 border-b border-zinc-800">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-12 gap-y-4 text-zinc-400 text-sm">
          <div>🇱🇻 Based in Riga, Latvia</div>
          <div>🇪🇺 Europe-Wide Destinations</div>
          <div>Personalized Journeys</div>
          <div>Since 2025</div>
        </div>
      </div>

      {/* Services / What We Offer */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-4xl font-semibold text-center mb-16">
          Why Travel With AYDIN TRAVEL GROUP
        </h3>
        
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { 
              title: "Curated Destinations", 
              desc: "Handpicked experiences in Latvia, Lithuania, Estonia, and across Europe. From cultural cities to scenic countryside." 
            },
            { 
              title: "Tailor-Made Journeys", 
              desc: "Private tours, luxury escapes, family holidays, and corporate travel — customized exactly to your wishes." 
            },
            { 
              title: "Seamless Experience", 
              desc: "From visa assistance and bookings to on-ground support. We handle everything so you can just enjoy the journey." 
            },
          ].map((item, i) => (
            <div 
              key={i} 
              className="bg-zinc-900 p-8 rounded-3xl hover:bg-zinc-800 transition group"
            >
              <div className="text-amber-400 text-5xl mb-6 group-hover:scale-110 transition">0{i+1}</div>
              <h4 className="text-2xl font-semibold mb-4">{item.title}</h4>
              <p className="text-zinc-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}