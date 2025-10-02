export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de">
      <head>
        <title>TestWebsy - Vercel Test</title>
        <meta name="description" content="Minimaler Test für Vercel Deployment" />
      </head>
      <body>
        {children}
      </body>
    </html>
  )
}
