export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head />
      <body style={{
        margin: 0,
        padding: 0,
        fontFamily: `'Roboto',sans-serif`
      }}>
        {children}
      </body>
    </html>
  )
}
