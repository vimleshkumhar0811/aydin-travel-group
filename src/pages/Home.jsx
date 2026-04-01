export default function Home() {
  const services = [
    { title: "Daily Market Brief", desc: "Morning summary of all major European indices and macro events.", icon: "📊" },
    { title: "Sector Deep Dives", desc: "In-depth reports on Banking, Energy, Tech & Renewables.", icon: "🔍" },
    { title: "Investment Ideas", desc: "Actionable long/short ideas with entry levels and targets.", icon: "💡" },
  ]

  const trustItems = [
    { label: "Markets Covered", value: "27 EU" },
    { label: "Coverage", value: "Daily" },
    { label: "Analysis Type", value: "Independent" },
    { label: "Experience", value: "20+ Years" },
  ]

  return (
    <div style={{ fontFamily: 'Tahoma, Arial, sans-serif', fontSize: 11, color: '#000', padding: '8px', display: 'flex', gap: 8, alignItems: 'flex-start' }}>

      {/* LEFT SIDEBAR */}
      <div style={{ width: 180, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Common Tasks panel */}
        <div className="win-window">
          <div style={{ background: 'linear-gradient(to right, #0a246a, #a6caf0)', color: '#fff', fontWeight: 'bold', fontSize: 12, padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>📋</span> Common Tasks
          </div>
          <div style={{ padding: '6px 4px', display: 'flex', flexDirection: 'column', gap: 2 }}>
            {[
              { icon: '🔍', label: 'View Services', href: '/services' },
              { icon: '📞', label: 'Contact Us', href: '/contact' },
              { icon: 'ℹ️', label: 'About Us', href: '/about' },
              { icon: '📧', label: 'Subscribe to Brief', href: '/contact' },
            ].map((item, i) => (
              <a key={i} href={item.href} style={{
                display: 'flex', alignItems: 'center', gap: 6,
                padding: '3px 6px', color: '#0000cc', textDecoration: 'underline',
                fontSize: 11, cursor: 'pointer'
              }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0a246a'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#0000cc'; }}
              >
                <span>{item.icon}</span> {item.label}
              </a>
            ))}
          </div>
        </div>

        {/* Market Stats */}
        <div className="win-window">
          <div style={{ background: 'linear-gradient(to right, #0a246a, #a6caf0)', color: '#fff', fontWeight: 'bold', fontSize: 12, padding: '4px 8px', display: 'flex', alignItems: 'center', gap: 6 }}>
            <span>📈</span> Market Stats
          </div>
          <div style={{ padding: '8px', background: '#ffffff', borderTop: '1px solid #808080' }}>
            {[
              { name: 'DAX', val: '+1.23%', up: true },
              { name: 'CAC 40', val: '-0.45%', up: false },
              { name: 'FTSE 100', val: '+0.87%', up: true },
              { name: 'IBEX 35', val: '+0.32%', up: true },
            ].map((m, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '2px 0', borderBottom: '1px dotted #ccc', fontSize: 11 }}>
                <span style={{ fontWeight: 'bold' }}>{m.name}</span>
                <span style={{ color: m.up ? '#008000' : '#cc0000', fontWeight: 'bold' }}>{m.val}</span>
              </div>
            ))}
            <div style={{ marginTop: 6, fontSize: 10, color: '#808080', textAlign: 'center' }}>Last updated: Today, 09:30</div>
          </div>
        </div>

        {/* Details panel */}
        <div className="win-window">
          <div style={{ background: 'linear-gradient(to right, #0a246a, #a6caf0)', color: '#fff', fontWeight: 'bold', fontSize: 12, padding: '4px 8px' }}>
            ℹ️ Details
          </div>
          <div style={{ padding: '8px', fontSize: 11, lineHeight: 1.5 }}>
            <div style={{ fontWeight: 'bold', marginBottom: 4 }}>Market Edge Research</div>
            <div style={{ color: '#444444' }}>Independent financial research covering 27 EU markets.</div>
            <hr style={{ border: 'none', borderTop: '1px solid #808080', borderBottom: '1px solid #fff', margin: '6px 0' }} />
            <div><strong>Type:</strong> Research Portal</div>
            <div><strong>Region:</strong> European Union</div>
          </div>
        </div>
      </div>

      {/* MAIN CONTENT AREA */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8 }}>

        {/* Hero Window */}
        <div className="win-window">
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span style={{ fontSize: 14 }}>🌍</span>
              <span>Market Edge — European Financial Research Portal</span>
            </div>
            <div style={{ display: 'flex', gap: 2 }}>
              {['_', '□', '✕'].map((s, i) => (
                <button key={i} style={{
                  width: 17, height: 17, background: '#d4d0c8', fontSize: 9,
                  border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff',
                  cursor: 'pointer', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Content area */}
          <div style={{ padding: '16px 20px', background: '#ffffff', borderTop: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080' }}>
            <table style={{ width: '100%', borderSpacing: 0 }}>
              <tbody>
                <tr>
                  <td style={{ verticalAlign: 'top', paddingRight: 20, width: '55%' }}>
                    <div style={{ fontSize: 22, fontWeight: 'bold', color: '#0a246a', lineHeight: 1.2, marginBottom: 10 }}>
                      European Markets.<br />Clear Insight.
                    </div>
                    <p style={{ fontSize: 12, color: '#333333', lineHeight: 1.6, marginBottom: 14 }}>
                      Independent financial research covering 27 EU markets. Daily analysis, sector reports, and investment intelligence — all in one place.
                    </p>
                    <div style={{ display: 'flex', gap: 8 }}>
                      <a href="/services" className="win-btn" style={{ fontSize: 12, padding: '5px 16px', fontWeight: 'bold', color: '#000000', textDecoration: 'none' }}>
                        Explore Research
                      </a>
                      <a href="/contact" className="win-btn" style={{ fontSize: 12, padding: '5px 16px', color: '#000000', textDecoration: 'none' }}>
                        Talk to Us
                      </a>
                    </div>
                  </td>
                  <td style={{ verticalAlign: 'top', width: '45%' }}>
                    {/* Fake "chart" decoration */}
                    <div style={{ border: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', background: '#ffffff', padding: 8 }}>
                      <div style={{ fontSize: 10, fontWeight: 'bold', marginBottom: 6, color: '#0a246a' }}>📊 EU Market Performance YTD</div>
                      {[
                        { name: 'DAX', pct: 78 },
                        { name: 'CAC 40', pct: 55 },
                        { name: 'FTSE 100', pct: 62 },
                        { name: 'AEX', pct: 85 },
                        { name: 'IBEX', pct: 48 },
                      ].map((m, i) => (
                        <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4, fontSize: 10 }}>
                          <span style={{ width: 50, flexShrink: 0, fontWeight: 'bold' }}>{m.name}</span>
                          <div style={{ flex: 1, background: '#e0dcd0', height: 12, border: '1px solid #808080', position: 'relative' }}>
                            <div style={{ width: `${m.pct}%`, height: '100%', background: '#1660a7' }} />
                          </div>
                          <span style={{ width: 28, textAlign: 'right' }}>{m.pct}%</span>
                        </div>
                      ))}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Trust bar as list view */}
        <div className="win-window">
          <div style={{ background: '#d4d0c8', borderBottom: '2px solid', borderColor: '#ffffff #808080 #808080 #ffffff', padding: '3px 8px', fontSize: 11, fontWeight: 'bold' }}>
            🏆 Platform Highlights
          </div>
          <div style={{ display: 'flex', borderTop: '1px solid #808080' }}>
            {trustItems.map((item, i) => (
              <div key={i} style={{
                flex: 1, padding: '10px 16px', textAlign: 'center', fontSize: 11,
                borderRight: i < trustItems.length - 1 ? '1px solid #808080' : 'none',
                background: '#ffffff'
              }}>
                <div style={{ fontSize: 18, fontWeight: 900, color: '#0a246a', marginBottom: 2 }}>{item.value}</div>
                <div style={{ color: '#444444' }}>{item.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Services as a list view */}
        <div className="win-window">
          <div className="win-titlebar">
            <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span>📁</span>
              <span>What We Deliver — (3 items)</span>
            </div>
            <div style={{ display: 'flex', gap: 2 }}>
              {['_', '□', '✕'].map((s, i) => (
                <button key={i} style={{
                  width: 17, height: 17, background: '#d4d0c8', fontSize: 9,
                  border: '2px solid', borderColor: '#ffffff #404040 #404040 #ffffff',
                  cursor: 'pointer', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>{s}</button>
              ))}
            </div>
          </div>

          {/* Toolbar for the panel */}
          <div style={{ background: '#d4d0c8', borderBottom: '1px solid #808080', padding: '2px 4px', display: 'flex', gap: 4, fontSize: 11 }}>
            {['View', 'Sort By ▾', 'Arrange Icons ▾', 'Refresh'].map((btn, i) => (
              <button key={i} className="win-toolbar-btn" style={{ fontSize: 11 }}>{btn}</button>
            ))}
          </div>

          {/* List view header */}
          <div style={{ background: '#d4d0c8', display: 'grid', gridTemplateColumns: '40px 200px 1fr', gap: 0, borderBottom: '2px solid #808080', fontSize: 11 }}>
            {['', 'Service Name', 'Description'].map((h, i) => (
              <div key={i} style={{ padding: '3px 8px', borderRight: '1px solid #808080', fontWeight: 'bold', fontSize: 11, borderBottom: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080' }}>{h}</div>
            ))}
          </div>

          {/* List rows */}
          <div style={{ background: '#ffffff' }}>
            {services.map((item, i) => (
              <div
                key={i}
                style={{ display: 'grid', gridTemplateColumns: '40px 200px 1fr', borderBottom: '1px solid #e0dcd0', cursor: 'pointer', fontSize: 11 }}
                onMouseEnter={e => { e.currentTarget.style.background = '#0a246a'; e.currentTarget.querySelectorAll('div').forEach(d => d.style.color = '#fff'); }}
                onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.querySelectorAll('div').forEach(d => d.style.color = ''); }}
              >
                <div style={{ padding: '6px 8px', textAlign: 'center', fontSize: 16 }}>{item.icon}</div>
                <div style={{ padding: '6px 8px', fontWeight: 'bold', borderLeft: '1px solid #e0dcd0', color: '#000' }}>
                  {item.title}
                </div>
                <div style={{ padding: '6px 8px', borderLeft: '1px solid #e0dcd0', color: '#333' }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>

          {/* Status bar */}
          <div style={{ background: '#d4d0c8', borderTop: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', padding: '2px 8px', display: 'flex', justifyContent: 'space-between', fontSize: 11 }}>
            <span>3 object(s)</span>
            <span style={{ borderLeft: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', paddingLeft: 8 }}>EU Financial Research Portal</span>
          </div>
        </div>

      </div>
    </div>
  )
}
