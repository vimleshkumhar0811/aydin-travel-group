export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <h1 className="text-6xl font-semibold tracking-tighter mb-12">About Market Edge</h1>
      
      <div className="prose prose-invert max-w-none text-lg">
        <p className="text-zinc-300 text-xl">
          Market Edge is an independent research house focused exclusively on European equities, fixed income, and macro trends.
        </p>
        
        <p>
          We are operated by SIA Quickproto (Reg. No. 40203704395), a Latvian IT &amp; financial services company registered on 10 December 2025 in Jēkabpils.
        </p>

        <div className="my-12 bg-zinc-900 p-10 rounded-3xl">
          <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
          <p className="text-zinc-300">
            To cut through the noise and deliver clear, unbiased, data-driven insights that help institutional and retail investors navigate European markets with confidence.
          </p>
        </div>

        <h3 className="text-2xl font-semibold mt-16 mb-6">Registered Details</h3>
        <div className="grid grid-cols-2 gap-6 text-sm">
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Company</p>
            <p className="font-medium">SIA Quickproto</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Registration Number</p>
            <p className="font-medium">40203704395</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Legal Address</p>
            <p className="font-medium">Bebru iela 22-40, Jēkabpils, LV-5201, Latvia</p>
          </div>
          <div className="bg-zinc-900 p-6 rounded-2xl">
            <p className="text-zinc-500">Status</p>
            <p className="font-medium text-emerald-400">Active</p>
          </div>
        </div>
      </div>
    </div>
  )
}