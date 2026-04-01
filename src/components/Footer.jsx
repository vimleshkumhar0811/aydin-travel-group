export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
        
        {/* Company Info */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-9 h-9 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl">
              ATG
            </div>
            <h3 className="text-2xl font-semibold tracking-tight">AYDIN TRAVEL GROUP</h3>
          </div>
          <p className="text-zinc-400 max-w-xs">
            Premium travel experiences across Europe and beyond. 
            Your trusted partner for unforgettable journeys.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Quick Links</h4>
          <div className="space-y-3 text-sm text-zinc-400">
            <a href="/" className="block hover:text-amber-400 transition-colors">Home</a>
            <a href="/about" className="block hover:text-amber-400 transition-colors">About Us</a>
            <a href="/services" className="block hover:text-amber-400 transition-colors">Our Services</a>
            <a href="/destinations" className="block hover:text-amber-400 transition-colors">Destinations</a>
            <a href="/contact" className="block hover:text-amber-400 transition-colors">Contact Us</a>
          </div>
        </div>

        {/* Legal Entity Info */}
        <div>
          <h4 className="font-semibold mb-4 text-white">Legal Entity</h4>
          <div className="text-sm text-zinc-400 space-y-1">
            <p className="font-medium text-white">AYDIN TRAVEL GROUP, SIA</p>
            <p>Registration No: 40203697962</p>
            <p>Registered on: 19.11.2025</p>
            <p>Krišjāņa Valdemāra iela 149 - 203</p>
            <p>Rīga, LV-1013, Latvia</p>
            
            <div className="pt-6 text-[10px] text-zinc-500">
              © 2026 AYDIN TRAVEL GROUP SIA. All rights reserved.
            </div>
          </div>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="mt-16 pt-8 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs text-zinc-500">
          AYDIN TRAVEL GROUP, SIA • Reg. No. 40203697962 • VAT: Not registered • 
          Krišjāņa Valdemāra iela 149-203, Rīga, LV-1013, Latvia
        </div>
      </div>
    </footer>
  )
}