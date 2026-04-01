export default function Destinations() {
  const destinations = [
    {
      id: 1,
      name: "Riga, Latvia",
      country: "Latvia",
      flag: "🇱🇻",
      desc: "The pearl of the Baltics. Explore the charming Old Town, Art Nouveau architecture, and vibrant culture.",
      duration: "3–7 days",
      price: "From €599",
      highlight: "UNESCO World Heritage Site"
    },
    {
      id: 2,
      name: "Tallinn, Estonia",
      country: "Estonia",
      flag: "🇪🇪",
      desc: "Fairytale medieval city with cobblestone streets, stunning city walls, and modern tech vibe.",
      duration: "4–6 days",
      price: "From €699",
      highlight: "Best preserved medieval town in Europe"
    },
    {
      id: 3,
      name: "Vilnius, Lithuania",
      country: "Lithuania",
      flag: "🇱🇹",
      desc: "The green capital of Lithuania. Baroque architecture, hilltop views, and vibrant arts scene.",
      duration: "3–5 days",
      price: "From €549",
      highlight: "Largest old town in Eastern Europe"
    },
    {
      id: 4,
      name: "Baltic Capitals Tour",
      country: "Latvia • Estonia • Lithuania",
      flag: "🇱🇻🇪🇪🇱🇹",
      desc: "The ultimate 10-day journey through all three Baltic capitals with guided tours and scenic transfers.",
      duration: "10 days",
      price: "From €1,599",
      highlight: "Multi-country experience"
    },
    {
      id: 5,
      name: "Jurmala Beach Escape",
      country: "Latvia",
      flag: "🇱🇻",
      desc: "Relax on the white sandy beaches of the Baltic Sea. Famous for its wooden architecture and spa resorts.",
      duration: "4–7 days",
      price: "From €799",
      highlight: "Baltic Sea Resort"
    },
    {
      id: 6,
      name: "Paris & Riga Combo",
      country: "France • Latvia",
      flag: "🇫🇷🇱🇻",
      desc: "Combine the romance of Paris with the charm of Riga in this unique two-city European experience.",
      duration: "9 days",
      price: "From €2,299",
      highlight: "East meets West"
    },
  ]

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-semibold tracking-tighter mb-4">
          Our Destinations
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          From the historic streets of the Baltic capitals to scenic escapes and iconic European cities — 
          discover unforgettable journeys crafted by AYDIN TRAVEL GROUP.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {destinations.map((dest) => (
          <div 
            key={dest.id}
            className="bg-zinc-900 rounded-3xl overflow-hidden group hover:scale-[1.02] transition-all duration-300 border border-transparent hover:border-amber-500/30"
          >
            {/* Image Placeholder */}
            <div className="h-64 bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center relative">
              <div className="text-8xl opacity-20 group-hover:opacity-30 transition">
                {dest.flag}
              </div>
              <div className="absolute top-6 right-6 bg-black/70 px-4 py-1 rounded-full text-sm font-medium">
                {dest.duration}
              </div>
            </div>

            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{dest.flag}</span>
                <h3 className="text-2xl font-semibold tracking-tight">{dest.name}</h3>
              </div>
              
              <p className="text-amber-400 font-medium mb-4">{dest.price}</p>
              
              <p className="text-zinc-400 mb-6 line-clamp-3">
                {dest.desc}
              </p>

              <div className="text-xs uppercase tracking-widest text-zinc-500 mb-2">
                {dest.highlight}
              </div>

              <a 
                href="/contact" 
                className="block mt-6 text-center bg-zinc-800 hover:bg-amber-500 hover:text-black py-4 rounded-2xl font-semibold transition-all"
              >
                Plan This Trip
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="mt-20 bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-transparent border border-amber-500/20 rounded-3xl p-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">
          Don’t see your dream destination?
        </h3>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          We specialize in custom travel experiences. Tell us where you want to go and we’ll make it happen.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
        >
          Create Your Custom Journey
        </a>
      </div>
    </div>
  )
}