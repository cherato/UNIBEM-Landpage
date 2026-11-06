import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import Studs from '@/components/ui/Studs'
import ContactForm from '@/components/ui/ContactForm'
import { CONTACT_INFO } from '@/constants/content'

export default function Contact() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá, gostaria de mais informações sobre a UNIBEM Imbituva!'
  )}`

  const items: Array<{
    key: string
    Icon: typeof MapPin
    label: string
    value: string
    iconBox: string
    href?: string
  }> = [
    {
      key: 'address',
      Icon: MapPin,
      label: 'Endereço',
      value: CONTACT_INFO.address,
      iconBox: 'bg-uni-blue text-white border-uni-blue-dark',
    },
    {
      key: 'phone',
      Icon: Phone,
      label: 'Telefone',
      value: CONTACT_INFO.phone,
      iconBox: 'bg-uni-green text-ink border-uni-green-dark',
      href: `tel:${CONTACT_INFO.phone}`,
    },
    {
      key: 'email',
      Icon: Mail,
      label: 'E-mail',
      value: CONTACT_INFO.email,
      iconBox: 'bg-uni-red text-white border-uni-red-deep',
      href: `mailto:${CONTACT_INFO.email}`,
    },
  ]

  return (
    <section id="contato" className="bg-white section-padding">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            title="Estamos aqui para você"
            description="Estamos prontos para receber voluntários, doadores, parceiros e famílias que precisam de apoio."
            accent="blue"
          />
        </Reveal>

        <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left — form brick plate */}
          <Reveal>
            <div className="overflow-hidden rounded-brick border border-ink-line bg-white shadow-card">
              <div className="relative h-9 bg-uni-blue">
                <Studs
                  count={6}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-uni-blue"
                />
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="mb-6 font-heading text-xl font-semibold text-ink">
                  Envie uma mensagem
                </h3>
                <ContactForm />
              </div>
            </div>
          </Reveal>

          {/* Right — map + info */}
          <div className="flex flex-col gap-6">
            <Reveal delay={80}>
              <div className="h-64 overflow-hidden rounded-brick border border-ink-line shadow-card lg:h-72">
                <iframe
                  src={CONTACT_INFO.mapsEmbedUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da UNIBEM Imbituva"
                />
              </div>
            </Reveal>

            <Reveal delay={140}>
              <div className="overflow-hidden rounded-brick border border-ink-line bg-white shadow-card">
                <div className="relative h-9 bg-uni-green">
                  <Studs
                    count={6}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-uni-green"
                  />
                </div>
                <div className="flex flex-col gap-5 p-6 sm:p-7">
                  <h3 className="font-heading text-xl font-semibold text-ink">
                    Informações de contato
                  </h3>

                  <div className="flex flex-col gap-4">
                    {items.map(({ key, Icon, label, value, iconBox, href }) => (
                      <div key={key} className="flex items-start gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] border-b-[3px] ${iconBox}`}
                        >
                          <Icon className="h-5 w-5" strokeWidth={2} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-ink">{label}</p>
                          {href ? (
                            <a
                              href={href}
                              className="mt-0.5 block break-words text-sm text-ink-muted transition-colors hover:text-uni-blue"
                            >
                              {value}
                            </a>
                          ) : (
                            <p className="mt-0.5 text-sm text-ink-muted">{value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* WhatsApp brick */}
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex items-center justify-center gap-3 rounded-brick border-b-4 border-uni-green-dark bg-uni-green px-6 py-3.5 font-heading font-semibold text-ink transition-colors duration-200 hover:bg-uni-green-dark focus:outline-none focus:ring-2 focus:ring-uni-green focus:ring-offset-2"
                  >
                    <MessageCircle className="h-5 w-5" />
                    Falar pelo WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
