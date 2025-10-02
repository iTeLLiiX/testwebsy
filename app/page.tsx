export default function HomePage() {
  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <h1 style={{
          fontSize: '3rem',
          color: '#333',
          marginBottom: '1rem'
        }}>
          🎉 Vercel Test Erfolgreich!
        </h1>
        <p style={{
          fontSize: '1.2rem',
          color: '#666',
          marginBottom: '2rem'
        }}>
          Diese Website läuft perfekt auf Vercel
        </p>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: '#f0f9ff',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            <h3>⚡ Schnell</h3>
            <p>Optimiert für Performance</p>
          </div>
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            <h3>🔧 Einfach</h3>
            <p>Minimaler Setup</p>
          </div>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '1rem',
            borderRadius: '8px'
          }}>
            <h3>🚀 Bereit</h3>
            <p>Für Produktion</p>
          </div>
        </div>
        <button style={{
          backgroundColor: '#2563eb',
          color: 'white',
          padding: '1rem 2rem',
          border: 'none',
          borderRadius: '8px',
          fontSize: '1rem',
          cursor: 'pointer'
        }}>
          Weiter zu WebsiteBuilder AI
        </button>
      </div>
    </div>
  )
}
