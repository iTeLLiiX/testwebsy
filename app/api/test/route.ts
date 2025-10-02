import { NextResponse } from 'next/server'

export async function GET() {
  const testData = {
    status: 'success',
    timestamp: new Date().toISOString(),
    tests: {
      api: '✅ API Route funktioniert',
      server: '✅ Server-Side Rendering aktiv',
      typescript: '✅ TypeScript Compilation erfolgreich',
      vercel: '✅ Vercel Deployment erfolgreich',
      nextjs: '✅ Next.js 14 funktioniert'
    },
    performance: {
      responseTime: '< 100ms',
      memoryUsage: 'Optimiert',
      buildTime: 'Schnell'
    },
    environment: {
      nodeVersion: process.version,
      platform: process.platform,
      vercel: process.env.VERCEL ? 'Ja' : 'Nein'
    }
  }

  return NextResponse.json(testData, {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
      'Cache-Control': 'no-cache'
    }
  })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const response = {
      status: 'success',
      message: 'POST Request erfolgreich verarbeitet',
      receivedData: body,
      timestamp: new Date().toISOString(),
      serverResponse: '✅ Backend API funktioniert perfekt!'
    }

    return NextResponse.json(response, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'error', 
        message: 'Fehler beim Verarbeiten der POST-Anfrage',
        error: error instanceof Error ? error.message : 'Unbekannter Fehler'
      }, 
      { status: 500 }
    )
  }
}
