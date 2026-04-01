import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-zinc-950/90 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          {/* <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-emerald-500 rounded-xl flex items-center justify-center text-white font-bold text-2xl">FRE</div> */}
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Market Edge</h1>
            {/* <p className="text-[10px] text-zinc-500 -mt-1">Empowering Investors</p> */}
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium">
          {navLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`hover:text-blue-400 transition-colors ${location.pathname === link.path ? 'text-blue-400' : 'text-zinc-300'}`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <a href="/contact" className="hidden md:block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-2xl text-sm font-semibold transition-all">
          Get Research Access
        </a>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-11 h-11 flex items-center justify-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6h12v12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-zinc-950 border-t border-zinc-800">
          <div className="px-6 py-8 flex flex-col gap-6 text-lg">
            {navLinks.map(link => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="hover:text-blue-400 transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a href="/contact" className="mt-6 bg-blue-600 hover:bg-blue-700 text-center py-4 rounded-2xl font-semibold">
              Get Research Access
            </a>
          </div>
        </div>
      )}
    </header>
  )
}