import { MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '@/constants/content'

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: null,
}

const STUD_STRIP = [
  'text-uni-yellow',
  'text-uni-blue',
  'text-uni-red',
  'text-uni-green',
  'text-uni-yellow',
  'text-uni-blue',
  'text-uni-red',
  'text-uni-green',
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-bone text-ink-soft">
      {/* Stud strip in the four brand colors */}
      <div
        className="flex items-center justify-center gap-2.5 border-b border-ink-line bg-bone py-3"
        aria-hidden="true"
      >
        {STUD_STRIP.map((c, i) => (
          <span key={i} className={`stud ${c}`} />
        ))}
      </div>

      <div className="container-max px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-b border-ink-line pb-10 md:grid-cols-3">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <a
              href="#inicio"
              onClick={(e) => {
                e.preventDefault()
                scrollTo('#inicio')
              }}
              className="inline-flex"
              aria-label="UNIBEM Imbituva — voltar ao topo"
            >
              <img src="./logo.png" alt="UNIBEM Imbituva" className="h-12 w-auto" />
            </a>
            <p className="max-w-xs text-sm leading-relaxed text-ink-muted">
              Organização da Sociedade Civil dedicada ao acolhimento e desenvolvimento de crianças e adolescentes em vulnerabilidade social.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform]
                if (!Icon) return null
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="flex h-10 w-10 items-center justify-center rounded-[10px] border-b-[3px] border-uni-yellow-deep bg-uni-yellow text-ink transition-colors duration-200 hover:bg-uni-yellow-deep"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h3 className="mb-5 font-heading text-base font-semibold text-ink">
              Links Rápidos
            </h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault()
                      scrollTo(link.href)
                    }}
                    className="text-sm text-ink-muted transition-colors duration-150 hover:text-uni-blue"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="mb-5 font-heading text-base font-semibold text-ink">
              Contato
            </h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-uni-blue" />
                <span className="text-sm text-ink-muted">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-uni-green-dark" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-uni-red-deep" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-sm text-ink-muted transition-colors hover:text-ink"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-3 pt-8 text-xs text-ink-faint sm:flex-row">
          <p>© {year} UNIBEM Imbituva. Todos os direitos reservados.</p>
          <p>Transformando vidas, construindo futuros.</p>
        </div>
      </div>
    </footer>
  )
}
