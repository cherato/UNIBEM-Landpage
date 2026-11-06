import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
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
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrolled = isScrolled || mobileOpen

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bone/90 shadow-[0_1px_0_rgba(16,16,20,0.06)] backdrop-blur-md'
          : 'bg-bone/60 backdrop-blur-sm'
      }`}
    >
      <nav className="container-max flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <a
          href="#inicio"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#inicio')
          }}
          className="transition-opacity duration-200 hover:opacity-85"
          aria-label="UNIBEM Imbituva — página inicial"
        >
          <img src="./logo.png" alt="UNIBEM Imbituva" className="h-[3.75rem] w-auto" aria-hidden="false" />
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-9 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.href.replace('#', '')
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollTo(link.href)
                  }}
                  className={`relative py-1 text-base font-bold transition-colors duration-200 ${
                    isActive ? 'text-ink' : 'text-ink-soft hover:text-uni-blue'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-0.5"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-uni-yellow" />
                      <span className="h-1.5 w-1.5 rounded-full bg-uni-blue" />
                      <span className="h-1.5 w-1.5 rounded-full bg-uni-red" />
                    </span>
                  )}
                </a>
              </li>
            )
          })}
        </ul>

        {/* Desktop CTA — brick button */}
        <a
          href="#contato"
          onClick={(e) => {
            e.preventDefault()
            scrollTo('#contato')
          }}
          className="hidden rounded-brick border-b-4 border-uni-blue-dark bg-uni-blue px-5 py-2.5 font-heading text-sm font-semibold text-white transition-all duration-200 hover:bg-uni-blue-dark focus:outline-none focus:ring-2 focus:ring-uni-blue focus:ring-offset-2 md:inline-flex"
        >
          Fale Conosco
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={mobileOpen}
          className="rounded-lg p-2 text-ink transition-colors hover:bg-ink/5 md:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden bg-bone transition-all duration-300 md:hidden ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollTo(link.href)
                  setMobileOpen(false)
                }}
                className="block rounded-xl px-3 py-3 font-bold text-ink transition-colors duration-150 hover:bg-white hover:text-uni-blue"
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
              className="block rounded-brick border-b-4 border-uni-blue-dark bg-uni-blue px-5 py-3 text-center font-heading font-semibold text-white transition-colors hover:bg-uni-blue-dark"
            >
              Fale Conosco
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
