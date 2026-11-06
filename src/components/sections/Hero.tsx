import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import Reveal from '@/components/ui/Reveal'
import StatBrick from '@/components/ui/StatBrick'
import { HERO_CONTENT } from '@/constants/content'

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-baseplate"
    >
      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 pb-24 pt-28 text-center sm:px-6">
        {/* Headline — second line is built from toy bricks */}
        <Reveal>
          <h1 className="font-heading text-4xl font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-6xl lg:text-7xl">
            <span className="block">Transformando Vidas,</span>
            <span className="mt-3 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
              <span className="inline-block rounded-brick border-b-4 border-uni-blue-dark bg-uni-blue px-4 py-1 text-white sm:px-6 sm:py-2">
                Construindo
              </span>
              <span className="inline-block rounded-brick border-b-4 border-uni-yellow-deep bg-uni-yellow px-4 py-1 text-ink sm:px-6 sm:py-2">
                Futuros
              </span>
            </span>
          </h1>
        </Reveal>

        {/* Subheadline */}
        <Reveal delay={140}>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-muted sm:text-xl">
            {HERO_CONTENT.subheadline}
          </p>
        </Reveal>

        {/* CTAs — toy-brick buttons */}
        <Reveal delay={220}>
          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="primary"
              color="yellow"
              size="lg"
              studs
              onClick={() => scrollTo('#servicos')}
            >
              {HERO_CONTENT.ctaPrimary}
            </Button>
            <Button
              variant="secondary"
              size="lg"
              onClick={() => scrollTo('#contato')}
            >
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </Reveal>

        {/* Stats — snap-together bricks */}
        <Reveal delay={300}>
          <div className="mt-14 grid grid-cols-3 gap-3 sm:gap-5">
            <StatBrick value="100+" label="Crianças" tone="blue" />
            <StatBrick value="50+" label="Voluntários" tone="green" />
            <StatBrick value="45+" label="Anos" tone="red" />
          </div>
        </Reveal>
      </div>

      {/* Bottom stud strip in the four brand colors */}
      <div
        className="absolute bottom-0 left-0 right-0 flex items-center justify-center gap-2 border-t border-ink-line/70 bg-bone/90 py-2.5"
        aria-hidden="true"
      >
        {['text-uni-yellow', 'text-uni-blue', 'text-uni-red', 'text-uni-green', 'text-uni-yellow', 'text-uni-blue', 'text-uni-red', 'text-uni-green'].map(
          (c, i) => (
            <span key={i} className={`stud ${c}`} />
          )
        )}
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#quem-somos')}
        aria-label="Rolar para próxima seção"
        className="absolute bottom-14 left-1/2 -translate-x-1/2 text-ink-muted transition-colors hover:text-uni-blue animate-float"
      >
        <ChevronDown className="h-8 w-8" />
      </button>
    </section>
  )
}
