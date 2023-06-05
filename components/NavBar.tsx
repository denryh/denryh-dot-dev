import Link from 'next/link'
import Greeting from './Greeting'
import MobileMenuToggler from './MobileMenuToggler'
import DesktopMenu from './DesktopMenu'

export function NavBar() {
  return (
    <nav className="flex items-center justify-between p-8">
      <Link
        href="/"
        className="relative cursor-pointer text-xl font-bold duration-200 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-stone-600 before:transition-all before:duration-200 hover:text-stone-600 hover:before:w-full"
      >
        denryh
      </Link>
      <Greeting />
      <MobileMenuToggler />
      <DesktopMenu />
    </nav>
  )
}
