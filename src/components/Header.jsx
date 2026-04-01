import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'File', sub: ['Home', 'New Window', 'Close'] },
    { name: 'View', sub: ['Services', 'About'] },
    { name: 'Tools', sub: ['Contact', 'Options'] },
    { name: 'Help', sub: ['About Market Edge', 'Contents'] },
  ]

  const mainLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' },
  ]

  return (
    <>
      {/* Title bar strip */}
      <div style={{ background: 'linear-gradient(to bottom, #2467c6 0%, #1353a8 45%, #1353a8 50%, #1a5dc4 100%)', borderBottom: '1px solid #0a246a', padding: '2px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 13, fontFamily: 'Tahoma, Arial, sans-serif', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ background: '#ffffff', color: '#0a246a', fontWeight: 900, fontSize: 11, padding: '1px 5px', borderRadius: 2 }}>ME</span>
            Market Edge — Financial Research Portal
          </div>
          {/* Window control buttons */}
          <div style={{ display: 'flex', gap: 2 }}>
            {['_', '□', '✕'].map((s, i) => (
              <button key={i} style={{
                width: 21, height: 21, background: '#d4d0c8', fontSize: 11,
                border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff',
                cursor: 'pointer', fontFamily: 'Tahoma, Arial', display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#000000', lineHeight: 1
              }}>{s}</button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu bar */}
      <div style={{ background: '#d4d0c8', borderBottom: '1px solid #808080', padding: '2px 8px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: 0, fontFamily: 'Tahoma, Arial, sans-serif', fontSize: 11 }}>
          {navLinks.map(item => (
            <span key={item.name} style={{ padding: '3px 8px', cursor: 'pointer', color: '#000000', display: 'inline-block', textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.cssText += 'background:#0a246a;color:#ffffff;'}
              onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#000000'; }}
            >{item.name}</span>
          ))}
        </div>
        <a href="/contact" style={{ background: '#d4d0c8', border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff', padding: '3px 12px', fontSize: 11, color: '#000000', textDecoration: 'none', fontFamily: 'Tahoma, Arial, sans-serif', cursor: 'pointer' }}>
          Get Research Access
        </a>
      </div>

      {/* Toolbar / Address bar */}
      <div style={{ background: '#d4d0c8', borderBottom: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '3px 8px', display: 'flex', alignItems: 'center', gap: 6, fontFamily: 'Tahoma, Arial, sans-serif', fontSize: 11 }}>
        {/* Back / Forward / Up buttons */}
        {['◀ Back', 'Forward ▶', '▲ Up'].map((label, i) => (
          <button key={i} style={{
            background: '#d4d0c8', border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff',
            padding: '3px 8px', fontSize: 11, cursor: 'pointer', color: '#000000', fontFamily: 'Tahoma, Arial, sans-serif'
          }}>{label}</button>
        ))}
        <div style={{ width: 1, background: '#808080', height: 20, margin: '0 4px' }} />
        {/* Address bar */}
        <span style={{ fontSize: 11, color: '#000000' }}>Address:</span>
        <input
          defaultValue={`http://marketedge.eu${location.pathname}`}
          readOnly
          style={{
            flex: 1, border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080',
            background: '#ffffff', padding: '2px 6px', fontSize: 11, fontFamily: 'Tahoma, Arial, sans-serif',
            color: '#000000'
          }}
        />
        <button style={{
          background: '#d4d0c8', border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff',
          padding: '3px 10px', fontSize: 11, cursor: 'pointer', color: '#000000', fontFamily: 'Tahoma, Arial, sans-serif'
        }}>Go</button>
      </div>

      {/* Nav links as tabs */}
      <nav style={{ background: '#d4d0c8', borderBottom: '1px solid #808080', padding: '4px 8px 0', display: 'flex', gap: 4, fontFamily: 'Tahoma, Arial, sans-serif', fontSize: 11 }}>
        {mainLinks.map(link => (
          <Link
            key={link.path}
            to={link.path}
            style={{
              display: 'inline-block',
              padding: '5px 16px 4px',
              background: location.pathname === link.path ? '#d4d0c8' : '#bab6ae',
              border: '2px solid',
              borderColor: '#ffffff #808080 location.pathname === link.path ? transparent : #808080 #ffffff',
              borderBottom: location.pathname === link.path ? '2px solid #d4d0c8' : '2px solid #808080',
              color: '#000000',
              textDecoration: 'none',
              fontWeight: location.pathname === link.path ? 'bold' : 'normal',
              marginBottom: location.pathname === link.path ? -2 : 0,
              zIndex: location.pathname === link.path ? 1 : 0,
              position: 'relative',
            }}
          >
            {link.name}
          </Link>
        ))}
      </nav>

      {/* Mobile menu toggle */}
      {isOpen && (
        <div style={{ background: '#d4d0c8', borderBottom: '1px solid #808080', padding: '8px', display: 'flex', flexDirection: 'column', gap: 4 }}>
          {mainLinks.map(link => (
            <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} style={{ padding: '4px 8px', color: '#000', textDecoration: 'none', fontSize: 11, fontFamily: 'Tahoma, Arial' }}>{link.name}</Link>
          ))}
        </div>
      )}
    </>
  )
}
