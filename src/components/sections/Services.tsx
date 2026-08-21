import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/constants/content'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function Services() {
  return (
    <section id="servicos" className="bg-white section-padding">
      <div className="container-max">
        <SectionHeading
          tag="Nossos Serviços"
          title="O que oferecemos às crianças"
          description="Programas gratuitos e integrais que promovem o desenvolvimento educacional, social e emocional de crianças e adolescentes."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* CTA band */}
        <div className="mt-16 bg-gradient-to-r from-brand-orange to-brand-orange-dark rounded-3xl p-8 sm:p-12 text-center text-white overflow-hidden relative">
          {/* Decorative element */}
          <div
            className="absolute right-0 top-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"
            aria-hidden="true"
          />
          <div
            className="absolute left-0 bottom-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"
            aria-hidden="true"
          />

          <div className="relative z-10">
            <h2 className="font-heading font-bold text-2xl sm:text-3xl mb-3 text-white">
              Quer apoiar nosso trabalho?
            </h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Seja como voluntário, doador ou parceiro, você pode fazer a diferença na vida de uma criança.
            </p>
            <button
              type="button"
              onClick={() => scrollTo('contato')}
              className="inline-flex items-center gap-2 bg-white text-brand-orange font-heading font-semibold px-8 py-4 rounded-full hover:bg-brand-cream transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-brand-orange"
            >
              Entre em Contato
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
