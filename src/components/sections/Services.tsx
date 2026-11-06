import { ArrowRight } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import ServiceCard from '@/components/ui/ServiceCard'
import { SERVICES } from '@/constants/content'

function scrollTo(id: string) {
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

const CARD_COLORS = ['blue', 'green', 'red', 'yellow'] as const

export default function Services() {
  return (
    <section id="servicos" className="bg-bone section-padding">
      <div className="container-max">
        <Reveal>
          <SectionHeading
            title="O que oferecemos às crianças"
            description="Programas gratuitos e integrais que promovem o desenvolvimento educacional, social e emocional de crianças e adolescentes."
            accent="blue"
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal key={service.id} delay={(i % 3) * 90}>
              <ServiceCard
                service={service}
                color={CARD_COLORS[i % CARD_COLORS.length]}
              />
            </Reveal>
          ))}
        </div>

        {/* CTA band — yellow brick band with a white button */}
        <Reveal>
          <div className="relative mt-16 overflow-hidden rounded-[20px] border-b-4 border-uni-yellow-deep bg-uni-yellow p-8 text-center text-ink shadow-brick sm:p-12">
            <div className="relative z-10">
              <h2 className="font-heading text-2xl font-semibold text-ink sm:text-3xl">
                Quer apoiar nosso trabalho?
              </h2>
              <p className="mx-auto mt-3 mb-8 max-w-xl text-lg text-ink/75">
                Seja como voluntário, doador ou parceiro, você pode fazer a diferença na vida de uma criança.
              </p>
              <button
                type="button"
                onClick={() => scrollTo('contato')}
                className="inline-flex flex-col items-center gap-1.5 rounded-brick border-b-4 border-ink-line bg-white px-8 py-3.5 font-heading font-semibold text-ink transition-colors duration-200 hover:bg-bone focus:outline-none focus:ring-2 focus:ring-uni-yellow focus:ring-offset-2 focus:ring-offset-uni-yellow"
              >
                <span className="flex items-center gap-1" aria-hidden="true">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <span key={i} className="h-1.5 w-1.5 rounded-full bg-ink/15" />
                  ))}
                </span>
                <span className="flex items-center gap-2">
                  Entre em Contato
                  <ArrowRight className="h-5 w-5" />
                </span>
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
