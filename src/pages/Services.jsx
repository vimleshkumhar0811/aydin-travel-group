export default function Services() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-6xl font-semibold tracking-tighter mb-4">
          Our Travel Services
        </h1>
        <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
          From personalized journeys to seamless group travel — we handle everything so you can focus on creating memories.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {[
          { 
            title: "Private & Tailor-Made Tours", 
            price: "From €1,200", 
            desc: "Fully customized itineraries designed around your preferences, pace, and interests. Perfect for couples, families, or solo travelers." 
          },
          { 
            title: "Baltic Explorer Packages", 
            price: "From €899", 
            desc: "Curated multi-country tours covering Latvia, Lithuania & Estonia. Includes guided tours, accommodations, and local experiences." 
          },
          { 
            title: "Luxury & VIP Travel", 
            price: "On request", 
            desc: "Premium experiences with 5-star hotels, private transfers, fine dining, and exclusive access to attractions." 
          },
          { 
            title: "Corporate & Group Travel", 
            price: "Custom Quote", 
            desc: "Incentive trips, team-building events, conferences, and large group arrangements with professional planning and support." 
          },
          { 
            title: "Weekend Getaways & Short Breaks", 
            price: "From €399", 
            desc: "Quick escapes from Riga to nearby destinations — perfect for city breaks, nature retreats, or cultural weekends." 
          },
          { 
            title: "Travel Planning & Consultation", 
            price: "Free Initial Consultation", 
            desc: "Expert advice on destinations, best travel times, visa assistance, and full itinerary planning." 
          },
        ].map((s, i) => (
          <div 
            key={i} 
            className="bg-zinc-900 rounded-3xl p-10 hover:scale-[1.02] transition-all group border border-transparent hover:border-amber-500/30"
          >
            <h3 className="text-3xl font-semibold mb-4 group-hover:text-amber-400 transition-colors">
              {s.title}
            </h3>
            <p className="text-amber-400 text-2xl mb-6 font-medium">{s.price}</p>
            <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-20 bg-gradient-to-br from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-3xl p-12 text-center">
        <h3 className="text-3xl font-semibold mb-4">Ready to Start Your Journey?</h3>
        <p className="text-zinc-400 mb-8 max-w-md mx-auto">
          Tell us your dream destination or travel style and we’ll create a perfect plan for you.
        </p>
        <a 
          href="/contact" 
          className="inline-block bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 px-10 py-4 rounded-2xl font-semibold text-lg transition-all"
        >
          Plan Your Trip Now
        </a>
      </div>
    </div>
  )
}