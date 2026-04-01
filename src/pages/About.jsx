export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-semibold tracking-tighter mb-12">
        About AYDIN TRAVEL GROUP
      </h1>
      
      <div className="prose prose-invert max-w-none text-lg">
        <p className="text-zinc-300 text-xl">
          AYDIN TRAVEL GROUP is a modern travel company specializing in curated journeys 
          across Europe, with a strong focus on the Baltic region and beyond.
        </p>
        
        <p>
          We create personalized travel experiences — from private city tours and cultural escapes 
          to luxury holidays and corporate travel arrangements. Our team combines local expertise 
          with international standards to deliver seamless and memorable trips.
        </p>

        <div className="my-12 bg-zinc-900 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
          <p className="text-zinc-300">
            To make travel simple, enriching, and unforgettable. We believe every journey 
            should be tailored to your dreams — whether you're exploring the charming streets 
            of Riga, discovering the beauty of the Baltics, or venturing further across Europe.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-16 mb-6">Registered Company Details</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Company Name</p>
            <p className="font-medium">AYDIN TRAVEL GROUP, SIA</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Registration Number</p>
            <p className="font-medium">40203697962</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Registration Date</p>
            <p className="font-medium">19 November 2025</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Legal Address</p>
            <p className="font-medium">
              Krišjāņa Valdemāra iela 149 - 203,<br />
              Rīga, LV-1013, Latvia
            </p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Activity</p>
            <p className="font-medium">Other reservation service and related activities (NACE 79.90)</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Status</p>
            <p className="font-medium text-emerald-400">Active</p>
          </div>
        </div>

        <div className="mt-16 bg-amber-500/10 border border-amber-500/20 p-8 rounded-3xl">
          <p className="text-amber-400 text-sm font-medium">
            📍 Based in Riga, Latvia — the heart of the Baltic region
          </p>
        </div>
      </div>
    </div>
  )
}