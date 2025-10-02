'use client'

import { useState, useEffect } from 'react'

export default function HomePage() {
  const [time, setTime] = useState(new Date())
  const [clickCount, setClickCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  const handleClick = () => {
    setClickCount(prev => prev + 1)
    setIsVisible(!isVisible)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1000px',
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

        {/* Live Clock */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{ color: '#4a5568', marginBottom: '0.5rem' }}>🕐 Live Clock</h3>
          <p style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#2d3748' }}>
            {time.toLocaleTimeString('de-DE')}
          </p>
        </div>

        {/* Interactive Counter */}
        <div style={{
          backgroundColor: '#f0f9ff',
          padding: '1rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '2px solid #bfdbfe'
        }}>
          <h3 style={{ color: '#1e40af', marginBottom: '0.5rem' }}>🔢 Interactive Counter</h3>
          <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>
            Klicks: <strong>{clickCount}</strong>
          </p>
          <button 
            onClick={handleClick}
            style={{
              backgroundColor: '#3b82f6',
              color: 'white',
              padding: '0.5rem 1rem',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer',
              fontSize: '1rem',
              transition: 'background-color 0.2s'
            }}
            onMouseOver={(e) => e.target.style.backgroundColor = '#2563eb'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#3b82f6'}
          >
            Klick mich! 🎯
          </button>
        </div>

        {/* Toggle Feature */}
        {isVisible && (
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1rem',
            borderRadius: '8px',
            marginBottom: '2rem',
            border: '2px solid #86efac',
            animation: 'fadeIn 0.5s ease-in'
          }}>
            <h3 style={{ color: '#166534' }}>🎊 Geheimnis entdeckt!</h3>
            <p style={{ color: '#15803d' }}>
              Du hast {clickCount} mal geklickt! Das ist ein interaktives Feature!
            </p>
          </div>
        )}

        {/* Feature Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #fbbf24'
          }}>
            <h3 style={{ color: '#92400e', marginBottom: '0.5rem' }}>⚡ Schnell</h3>
            <p style={{ color: '#a16207' }}>Optimiert für Performance</p>
            <small style={{ color: '#d97706' }}>Next.js 14 + React 18</small>
          </div>
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #86efac'
          }}>
            <h3 style={{ color: '#166534', marginBottom: '0.5rem' }}>🔧 Einfach</h3>
            <p style={{ color: '#15803d' }}>Minimaler Setup</p>
            <small style={{ color: '#16a34a' }}>TypeScript + Vercel</small>
          </div>
          <div style={{
            backgroundColor: '#fef2f2',
            padding: '1.5rem',
            borderRadius: '8px',
            border: '2px solid #fca5a5'
          }}>
            <h3 style={{ color: '#dc2626', marginBottom: '0.5rem' }}>🚀 Bereit</h3>
            <p style={{ color: '#dc2626' }}>Für Produktion</p>
            <small style={{ color: '#ef4444' }}>Auto-Deploy</small>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '2rem'
        }}>
          <button style={{
            backgroundColor: '#2563eb',
            color: 'white',
            padding: '1rem 2rem',
            border: 'none',
            borderRadius: '8px',
            fontSize: '1rem',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = '#1d4ed8'
            e.target.style.transform = 'translateY(-2px)'
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = '#2563eb'
            e.target.style.transform = 'translateY(0)'
          }}
          >
            🚀 Weiter zu WebsiteBuilder AI
          </button>
          <button 
            onClick={() => window.location.href = '/test'}
            style={{
              backgroundColor: '#059669',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = '#047857'
              e.target.style.transform = 'translateY(-2px)'
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = '#059669'
              e.target.style.transform = 'translateY(0)'
            }}
          >
            🧪 Test-Seite besuchen
          </button>
        </div>

        {/* Status Info */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '1rem',
          borderRadius: '8px',
          border: '1px solid #e2e8f0'
        }}>
          <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
            ✅ Build erfolgreich | ✅ TypeScript aktiv | ✅ Interaktiv | ✅ Responsive
          </p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  )
}
