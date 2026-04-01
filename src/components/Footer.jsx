export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            {/* <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold">FRE</div> */}
            <h3 className="text-2xl font-semibold">Market Edge</h3>
          </div>
          <p className="text-zinc-400 max-w-xs">
            Independent financial research and analysis for European markets.
          </p>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <div className="space-y-3 text-sm text-zinc-400">
            <a href="/" className="block hover:text-white">Home</a>
            <a href="/about" className="block hover:text-white">About Us</a>
            <a href="/services" className="block hover:text-white">Our Services</a>
            <a href="/contact" className="block hover:text-white">Contact</a>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Legal Entity</h4>
          <div className="text-sm text-zinc-400 space-y-1">
            <p>Operated by Market Edge</p>
            <p>Registration No: 40203704395</p>
            <p>Bebru iela 22-40, Jēkabpils, LV-5201, Latvia</p>
            <p className="pt-4 text-[10px]">© 2026 Market Edgea. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}