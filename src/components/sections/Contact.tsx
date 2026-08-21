import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ContactForm from '@/components/ui/ContactForm'
import { CONTACT_INFO } from '@/constants/content'

export default function Contact() {
  const waLink = `https://wa.me/${CONTACT_INFO.whatsapp}?text=${encodeURIComponent(
    'Olá, gostaria de mais informações sobre a UNIBEM Imbituva!'
  )}`

  return (
    <section id="contato" className="bg-brand-cream section-padding">
      <div className="container-max">
        <SectionHeading
          tag="Contato"
          title="Fale com a gente"
          description="Estamos prontos para receber voluntários, doadores, parceiros e famílias que precisam de apoio."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Form */}
          <div className="bg-white rounded-3xl p-8 shadow-sm">
            <h3 className="font-heading font-bold text-xl text-brand-brown mb-6">
              Envie uma mensagem
            </h3>
            <ContactForm />
          </div>

          {/* Right — Map + info */}
          <div className="flex flex-col gap-6">
            {/* Map */}
            <div className="rounded-3xl overflow-hidden shadow-sm h-64 lg:h-72">
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

            {/* Contact info */}
            <div className="bg-white rounded-3xl p-7 shadow-sm flex flex-col gap-5">
              <h3 className="font-heading font-bold text-xl text-brand-brown">
                Informações de contato
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-brown">Endereço</p>
                    <p className="text-sm text-brand-gray mt-0.5">
                      {CONTACT_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-brown">Telefone</p>
                    <a
                      href={`tel:${CONTACT_INFO.phone}`}
                      className="text-sm text-brand-gray hover:text-brand-orange transition-colors mt-0.5 block"
                    >
                      {CONTACT_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-brand-cream flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-brand-orange" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-brand-brown">E-mail</p>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-sm text-brand-gray hover:text-brand-orange transition-colors mt-0.5 block"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-heading font-semibold px-6 py-3.5 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 mt-2"
              >
                <MessageCircle className="w-5 h-5" />
                Falar pelo WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
