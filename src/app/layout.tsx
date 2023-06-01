import '../styles/app.scss'

export const metadata = {
  title: 'Tests de Neumorphisme',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}
