import { Heart, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react'
import { NAV_LINKS, CONTACT_INFO, SOCIAL_LINKS } from '@/constants/content'

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

const SOCIAL_ICONS = {
  facebook: Facebook,
  instagram: Instagram,
  youtube: Heart,
}

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brand-brown text-white">
      <div className="container-max px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-white/10">
          {/* Col 1 — Brand */}
          <div className="flex flex-col gap-5">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); scrollTo('#inicio') }}
              className="flex items-center gap-2 font-heading font-bold text-xl text-white"
            >
              <Heart className="w-6 h-6 fill-brand-orange text-brand-orange" strokeWidth={0} />
              UNIBEM Imbituva
            </a>
            <p className="text-white/60 text-sm leading-relaxed max-w-xs">
              Organização da Sociedade Civil dedicada ao acolhimento e desenvolvimento de crianças e adolescentes em vulnerabilidade social.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = SOCIAL_ICONS[social.platform]
                return (
                  <a
                    key={social.platform}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-orange transition-colors duration-200"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Col 2 — Links */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.href) }}
                    className="text-white/60 text-sm hover:text-brand-orange transition-colors duration-150"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contato */}
          <div>
            <h3 className="font-heading font-semibold text-base mb-5">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-orange mt-0.5 flex-shrink-0" />
                <span className="text-white/60 text-sm">{CONTACT_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a
                  href={`tel:${CONTACT_INFO.phone}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {CONTACT_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-orange flex-shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="text-white/60 text-sm hover:text-white transition-colors"
                >
                  {CONTACT_INFO.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-white/40 text-xs">
          <p>© {year} UNIBEM Imbituva. Todos os direitos reservados.</p>
          <p>
            Desenvolvido com{' '}
            <Heart className="inline w-3 h-3 fill-brand-orange text-brand-orange" strokeWidth={0} />{' '}
            para as crianças de Imbituva
          </p>
        </div>
      </div>
    </footer>
  )
}
