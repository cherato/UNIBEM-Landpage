import { ChevronDown } from 'lucide-react'
import Button from '@/components/ui/Button'
import { HERO_CONTENT } from '@/constants/content'

function scrollTo(href: string) {
  const id = href.replace('#', '')
  const el = document.getElementById(id)
  el?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  const lines = HERO_CONTENT.headline.split('\n')

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-brand-brown via-[#2d1208] to-[#3d1a0e]"
        aria-hidden="true"
      />

      {/* Decorative circles */}
      <div
        className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-brand-orange/10 blur-3xl -translate-y-1/2 translate-x-1/2"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 left-0 w-72 h-72 rounded-full bg-brand-orange/5 blur-3xl translate-y-1/2 -translate-x-1/2"
        aria-hidden="true"
      />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 max-w-4xl mx-auto py-32">
        {/* Badge */}
        <span className="inline-block bg-brand-orange/20 text-brand-orange border border-brand-orange/40 rounded-full px-4 py-1.5 text-sm font-medium mb-6 animate-fade-in">
          {HERO_CONTENT.badge}
        </span>

        {/* Headline */}
        <h1 className="font-heading font-extrabold text-4xl sm:text-5xl lg:text-7xl leading-tight mb-6 animate-fade-up">
          {lines.map((line, i) => (
            <span key={i}>
              {i === 1 ? (
                <span className="text-brand-orange">{line}</span>
              ) : (
                line
              )}
              {i < lines.length - 1 && <br />}
            </span>
          ))}
        </h1>

        {/* Subheadline */}
        <p className="text-white/75 text-lg sm:text-xl max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animate-delay-200">
          {HERO_CONTENT.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up animate-delay-300">
          <Button
            variant="primary"
            size="lg"
            onClick={() => scrollTo('#servicos')}
          >
            {HERO_CONTENT.ctaPrimary}
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollTo('#contato')}
          >
            {HERO_CONTENT.ctaSecondary}
          </Button>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap justify-center gap-8 sm:gap-16 animate-fade-up animate-delay-400">
          {[
            { value: '200+', label: 'Crianças' },
            { value: '50+', label: 'Voluntários' },
            { value: '10+', label: 'Anos' },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-extrabold text-3xl text-brand-orange">
                {stat.value}
              </div>
              <div className="text-white/60 text-sm mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        type="button"
        onClick={() => scrollTo('#quem-somos')}
        aria-label="Rolar para próxima seção"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 hover:text-brand-orange transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </button>
    </section>
  )
}
