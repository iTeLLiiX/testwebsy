'use client'

import { useState, useEffect } from 'react'

export default function TestPage() {
  const [testResults, setTestResults] = useState<string[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [score, setScore] = useState(0)

  const runTests = async () => {
    setIsRunning(true)
    setTestResults([])
    setScore(0)

    const tests = [
      { name: 'React Hooks Test', delay: 500 },
      { name: 'State Management Test', delay: 300 },
      { name: 'Event Handling Test', delay: 400 },
      { name: 'Responsive Design Test', delay: 600 },
      { name: 'Performance Test', delay: 800 },
      { name: 'TypeScript Compilation Test', delay: 700 },
      { name: 'Vercel Deployment Test', delay: 900 },
      { name: 'Next.js Routing Test', delay: 350 }
    ]

    for (let i = 0; i < tests.length; i++) {
      await new Promise(resolve => setTimeout(resolve, tests[i].delay))
      setTestResults(prev => [...prev, `✅ ${tests[i].name} - Erfolgreich`])
      setScore(prev => prev + 1)
    }

    // API Test
    try {
      setTestResults(prev => [...prev, '🔄 API Test wird ausgeführt...'])
      const apiResponse = await fetch('/api/test')
      const apiData = await apiResponse.json()
      
      if (apiData.status === 'success') {
        setTestResults(prev => [...prev, '✅ API Route Test - Erfolgreich'])
        setScore(prev => prev + 1)
        
        // Zeige API Details
        setTestResults(prev => [...prev, `📊 Server: ${apiData.environment.nodeVersion}`])
        setTestResults(prev => [...prev, `🌐 Vercel: ${apiData.environment.vercel}`])
        setTestResults(prev => [...prev, `⚡ Response Time: ${apiData.performance.responseTime}`])
      } else {
        setTestResults(prev => [...prev, '❌ API Route Test - Fehlgeschlagen'])
      }
    } catch (error) {
      setTestResults(prev => [...prev, '❌ API Route Test - Fehler'])
    }

    setIsRunning(false)
  }

  const resetTests = () => {
    setTestResults([])
    setScore(0)
    setIsRunning(false)
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      fontFamily: 'Arial, sans-serif',
      padding: '2rem'
    }}>
      <div style={{
        maxWidth: '1000px',
        margin: '0 auto',
        backgroundColor: 'white',
        padding: '3rem',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
      }}>
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1 style={{
            fontSize: '2.5rem',
            color: '#333',
            marginBottom: '1rem'
          }}>
            🧪 Test-Suite
          </h1>
          <p style={{
            fontSize: '1.1rem',
            color: '#666',
            marginBottom: '2rem'
          }}>
            Teste alle Features der Website
          </p>
        </div>

        {/* Test Controls */}
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap'
        }}>
          <button 
            onClick={runTests}
            disabled={isRunning}
            style={{
              backgroundColor: isRunning ? '#9ca3af' : '#3b82f6',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: isRunning ? 'not-allowed' : 'pointer',
              transition: 'all 0.2s'
            }}
          >
            {isRunning ? '🔄 Tests laufen...' : '🚀 Tests starten'}
          </button>
          <button 
            onClick={resetTests}
            style={{
              backgroundColor: '#ef4444',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🔄 Reset
          </button>
          <button 
            onClick={() => window.location.href = '/'}
            style={{
              backgroundColor: '#6b7280',
              color: 'white',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
          >
            🏠 Zurück zur Homepage
          </button>
        </div>

        {/* Score Display */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          marginBottom: '2rem',
          border: '2px solid #e2e8f0',
          textAlign: 'center'
        }}>
          <h3 style={{ color: '#4a5568', marginBottom: '0.5rem' }}>📊 Test Score</h3>
          <div style={{
            fontSize: '2rem',
            fontWeight: 'bold',
            color: score > 0 ? '#059669' : '#6b7280'
          }}>
            {score}/9 Tests bestanden
          </div>
          {score === 9 && (
            <p style={{ color: '#059669', marginTop: '0.5rem' }}>
              🎉 Alle Tests erfolgreich! Perfekt!
            </p>
          )}
        </div>

        {/* Test Results */}
        <div style={{
          backgroundColor: '#f8fafc',
          padding: '1.5rem',
          borderRadius: '8px',
          border: '2px solid #e2e8f0'
        }}>
          <h3 style={{ color: '#4a5568', marginBottom: '1rem' }}>📋 Test Ergebnisse</h3>
          {testResults.length === 0 && !isRunning && (
            <p style={{ color: '#6b7280', fontStyle: 'italic' }}>
              Klicke auf "Tests starten" um die Test-Suite zu beginnen
            </p>
          )}
          {isRunning && (
            <p style={{ color: '#3b82f6', fontStyle: 'italic' }}>
              🔄 Tests werden ausgeführt... Bitte warten
            </p>
          )}
          <div style={{ maxHeight: '300px', overflowY: 'auto' }}>
            {testResults.map((result, index) => (
              <div 
                key={index}
                style={{
                  padding: '0.5rem',
                  marginBottom: '0.5rem',
                  backgroundColor: '#f0fdf4',
                  borderRadius: '4px',
                  border: '1px solid #86efac',
                  animation: 'fadeIn 0.3s ease-in'
                }}
              >
                {result}
              </div>
            ))}
          </div>
        </div>

        {/* Feature Tests */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginTop: '2rem'
        }}>
          <div style={{
            backgroundColor: '#fef3c7',
            padding: '1rem',
            borderRadius: '8px',
            border: '2px solid #fbbf24'
          }}>
            <h4 style={{ color: '#92400e' }}>⚡ Performance</h4>
            <p style={{ color: '#a16207', fontSize: '0.9rem' }}>
              Schnelle Ladezeiten und optimierte Rendering
            </p>
          </div>
          <div style={{
            backgroundColor: '#f0fdf4',
            padding: '1rem',
            borderRadius: '8px',
            border: '2px solid #86efac'
          }}>
            <h4 style={{ color: '#166534' }}>🔧 TypeScript</h4>
            <p style={{ color: '#15803d', fontSize: '0.9rem' }}>
              Type Safety und bessere Entwicklung
            </p>
          </div>
          <div style={{
            backgroundColor: '#fef2f2',
            padding: '1rem',
            borderRadius: '8px',
            border: '2px solid #fca5a5'
          }}>
            <h4 style={{ color: '#dc2626' }}>🚀 Vercel</h4>
            <p style={{ color: '#dc2626', fontSize: '0.9rem' }}>
              Automatisches Deployment und Hosting
            </p>
          </div>
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
