export default function Footer() {
  const now = new Date()
  const timeStr = now.toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit' })
  const dateStr = now.toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' })

  return (
    <>
      {/* Status bar before taskbar */}
      <div style={{
        background: '#d4d0c8',
        borderTop: '2px solid',
        borderColor: '#808080 #ffffff #ffffff #808080',
        padding: '4px 16px',
        fontSize: 11,
        fontFamily: 'Tahoma, Arial, sans-serif',
        display: 'flex',
        gap: 24,
        flexWrap: 'wrap'
      }}>
        <div>
          <strong>Market Edge Research</strong> — Operated by Market Edge
        </div>
        <div style={{ borderLeft: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', paddingLeft: 16 }}>
          Registration No: <strong>40203704395</strong>
        </div>
        <div style={{ borderLeft: '2px solid', borderColor: '#808080 #ffffff #ffffff #808080', paddingLeft: 16 }}>
          Bebru iela 22-40, Jēkabpils, LV-5201, Latvia
        </div>
        <div style={{ marginLeft: 'auto', color: '#444' }}>
          © 2026 Market Edge. All rights reserved.
        </div>
      </div>

      {/* Windows XP-style Taskbar */}
      <div style={{
        background: 'linear-gradient(to bottom, #2467c6 0%, #1353a8 45%, #1353a8 50%, #1a5dc4 100%)',
        borderTop: '2px solid #5b9bd5',
        padding: '3px 4px',
        display: 'flex',
        alignItems: 'center',
        gap: 4,
        minHeight: 34,
        fontFamily: 'Tahoma, Arial, sans-serif',
        position: 'sticky',
        bottom: 0,
        zIndex: 100,
      }}>
        {/* Start button */}
        <button style={{
          background: 'linear-gradient(to bottom, #57a03b, #3a8028)',
          border: '1px solid #1a5c10',
          borderRadius: '0 12px 12px 0',
          color: '#ffffff',
          fontWeight: 'bold',
          fontSize: 13,
          padding: '3px 12px 3px 8px',
          cursor: 'pointer',
          fontFamily: 'Tahoma, Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          letterSpacing: 0.5,
          textShadow: '1px 1px 1px rgba(0,0,0,0.5)',
          boxShadow: 'inset 0 1px 0 rgba(255,255,255,0.3)',
        }}>
          <span style={{ fontSize: 16 }}>⊞</span> start
        </button>

        {/* Separator */}
        <div style={{ width: 1, background: '#1353a8', height: 24, borderLeft: '1px solid #0a246a', borderRight: '1px solid #2a63c6', margin: '0 4px' }} />

        {/* Quick launch icons */}
        {[
          { icon: '🌐', label: 'Internet Explorer' },
          { icon: '📧', label: 'Outlook' },
          { icon: '📊', label: 'Market Brief' },
        ].map((item, i) => (
          <button key={i} title={item.label} style={{
            background: 'transparent',
            border: '1px solid transparent',
            padding: '2px 4px',
            cursor: 'pointer',
            fontSize: 16,
            display: 'flex',
            alignItems: 'center',
            borderRadius: 2,
          }}
            onMouseEnter={e => { e.currentTarget.style.border = '1px solid #5b9bd5'; e.currentTarget.style.background = 'rgba(255,255,255,0.15)'; }}
            onMouseLeave={e => { e.currentTarget.style.border = '1px solid transparent'; e.currentTarget.style.background = 'transparent'; }}
          >{item.icon}</button>
        ))}

        {/* Separator */}
        <div style={{ width: 1, background: '#1353a8', height: 24, borderLeft: '1px solid #0a246a', borderRight: '1px solid #2a63c6', margin: '0 4px' }} />

        {/* Active window button */}
        <div style={{
          background: 'linear-gradient(to bottom, #1660a7, #0e4a87)',
          border: '1px solid #0a246a',
          borderRadius: 2,
          padding: '3px 10px',
          fontSize: 11,
          color: '#ffffff',
          fontFamily: 'Tahoma, Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 6,
          minWidth: 160,
          cursor: 'pointer',
        }}>
          <span>🌍</span>
          <span>Market Edge — Financial Research</span>
        </div>

        {/* Spacer */}
        <div style={{ flex: 1 }} />

        {/* System tray */}
        <div style={{
          background: 'linear-gradient(to bottom, #1660a7, #0e4a87)',
          border: '1px inset #0a246a',
          borderRadius: 2,
          padding: '3px 8px',
          fontSize: 11,
          color: '#ffffff',
          fontFamily: 'Tahoma, Arial, sans-serif',
          display: 'flex',
          alignItems: 'center',
          gap: 8,
        }}>
          <span title="Network Connected">🔒</span>
          <span title="Volume">🔊</span>
          <span style={{ borderLeft: '1px solid #2a63c6', paddingLeft: 8, fontSize: 10 }}>
            {timeStr}<br />{dateStr}
          </span>
        </div>
      </div>
    </>
  )
}
