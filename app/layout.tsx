import { NavBar } from '~/components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "denryh's blog",
  description:
    'Technical adventure blog of a future self-taught software engineer',
}

export default function RootLayout({
  children,
  mobileMenu,
}: {
  children: React.ReactNode
  mobileMenu: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        {mobileMenu}
      </body>
    </html>
  )
}
