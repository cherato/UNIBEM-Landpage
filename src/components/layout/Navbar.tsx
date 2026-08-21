import { useState, useEffect } from 'react'
import { Menu, X, Heart } from 'lucide-react'
import { NAV_LINKS } from '@/constants/content'
import { useScrollSpy } from '@/hooks/useScrollSpy'
import { useScrollLock } from '@/hooks/useScrollLock'

const SECTION_IDS = ['inicio', 'quem-somos', 'servicos', 'contato']

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const activeSection = useScrollSpy(SECTION_IDS)
  useScrollLock(mobileOpen)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navBg = isScrolled || mobileOpen
    ? 'bg-white shadow-md'
    : 'bg-transparent'

  const textColor = isScrolled || mobileOpen
    ? 'text-brand-brown'
    : 'text-white'

  const logoColor = isScrolled || mobileOpen
    ? 'text-brand-orange'
    : 'text-white'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
    >
      <nav className="container-max flex items-center justify-between px-4 sm:px-6 lg:px-8 h-20">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
          className={`flex items-center gap-2 font-heading font-bold text-xl ${logoColor} transition-colors duration-300`}
        >
          <Heart className="w-6 h-6 fill-current text-brand-orange" strokeWidth={0} />
          <span>UNIBEM</span>
          <span className={`text-sm font-normal hidden sm:inline ${isScrolled ? 'text-brand-gray' : 'text-white/70'}`}>
            Imbituva
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                  className={`font-medium text-sm transition-colors duration-200 relative pb-1 ${
                    textColor
                  } ${
                    isActive
                      ? 'after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-brand-orange after:rounded-full'
                      : 'hover:text-brand-orange'
                  }`}
                >
                  {link.label}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA */}
        <a
          href="#contato"
          onClick={(e) => { e.preventDefault(); scrollTo('#contato') }}
          className="hidden md:inline-flex items-center gap-2 bg-brand-orange text-white px-5 py-2.5 rounded-full text-sm font-semibold font-heading hover:bg-brand-orange-dark transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-brand-orange focus:ring-offset-2"
        >
          Fale Conosco
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          className={`md:hidden p-2 rounded-lg transition-colors ${textColor} hover:bg-black/10`}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                  setMobileOpen(false)
                }}
                className="block py-3 px-2 text-brand-brown font-medium rounded-lg hover:bg-brand-cream hover:text-brand-orange transition-colors duration-150"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a
              href="#contato"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#contato')
                setMobileOpen(false)
              }}
              className="block text-center bg-brand-orange text-white px-5 py-3 rounded-full font-semibold font-heading hover:bg-brand-orange-dark transition-colors"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
