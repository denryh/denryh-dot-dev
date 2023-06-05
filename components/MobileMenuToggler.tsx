'use client'

export default function MobileMenuToggler() {
  function openMobileMenu() {
    document.documentElement.classList.add('mobile-menu-open')
  }

  return (
    <button className="md:hidden" onClick={openMobileMenu}>
      |||
    </button>
  )
}
