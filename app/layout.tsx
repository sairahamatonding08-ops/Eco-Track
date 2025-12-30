import './globals.css'

export const metadata = {
  title: 'EcoTrack - SDG 12',
  description: 'Sustainable living assistant',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="bg-white shadow p-4">
          <div className="text-green-600 font-bold text-xl">EcoTrack</div>
        </nav>
        <main className="p-4">{children}</main>
        <footer className="bg-gray-800 text-white p-6 text-center">
          <p>Supporting SDG 12: Responsible Consumption</p>
        </footer>
      </body>
    </html>
  )
}
