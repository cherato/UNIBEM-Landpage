import { Target, Eye, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import Reveal from '@/components/ui/Reveal'
import StatBrick from '@/components/ui/StatBrick'
import Studs from '@/components/ui/Studs'
import { ABOUT_CONTENT } from '@/constants/content'
import type { StatTone } from '@/components/ui/StatBrick'

const CARDS = [
  {
    key: 'mission',
    label: 'Missão',
    text: ABOUT_CONTENT.mission.text,
    Icon: Target,
    band: 'bg-uni-blue',
    bandStuds: 'text-uni-blue',
    iconBox: 'bg-uni-blue text-white border-uni-blue-dark',
  },
  {
    key: 'vision',
    label: 'Visão',
    text: ABOUT_CONTENT.vision.text,
    Icon: Eye,
    band: 'bg-uni-green',
    bandStuds: 'text-uni-green',
    iconBox: 'bg-uni-green text-ink border-uni-green-dark',
  },
  {
    key: 'values',
    label: 'Valores',
    text: ABOUT_CONTENT.values.label,
    Icon: Star,
    band: 'bg-uni-red',
    bandStuds: 'text-uni-red',
    iconBox: 'bg-uni-red text-white border-uni-red-deep',
  },
] as const

const STAT_TONES: StatTone[] = ['blue', 'green', 'red', 'yellow']

const VALUE_CHIPS = [
  'bg-uni-blue/10 text-uni-blue border-uni-blue/30',
  'bg-uni-green/10 text-uni-green-dark border-uni-green/40',
  'bg-uni-red/10 text-uni-red-deep border-uni-red/30',
  'bg-uni-yellow/15 text-uni-yellow-ink border-uni-yellow-deep/40',
  'bg-ink-softest text-ink-muted border-ink-line',
]

export default function About() {
  const { stats, headline, body } = ABOUT_CONTENT

  return (
    <section id="quem-somos" className="bg-white section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left column */}
          <div>
            <Reveal>
              <SectionHeading
                title={headline}
                centered={false}
                accent="green"
              />
            </Reveal>

            <div className="mb-10 flex flex-col gap-4">
              {body.map((paragraph, i) => (
                <p key={i} className="leading-relaxed text-ink-muted">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mission / Vision / Values — brick cards */}
            <div className="flex flex-col gap-5">
              {CARDS.map((card, i) => (
                <Reveal key={card.key} delay={i * 90}>
                  <div className="overflow-hidden rounded-brick border border-ink-line bg-white shadow-card">
                    <div className={`relative h-7 ${card.band}`}>
                      <Studs
                        count={5}
                        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${card.bandStuds}`}
                      />
                    </div>
                    <div className="flex items-start gap-4 p-5">
                      <div
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[10px] border-b-[3px] ${card.iconBox}`}
                      >
                        <card.Icon className="h-5 w-5" strokeWidth={2} />
                      </div>
                      <div className="min-w-0">
                        <h3 className="mb-1 font-heading text-base font-semibold text-ink">
                          {card.label}
                        </h3>
                        {card.key === 'values' ? (
                          <div className="mt-2 flex flex-wrap gap-2">
                            {ABOUT_CONTENT.values.items.map((v, vi) => (
                              <span
                                key={v}
                                className={`rounded-[8px] border px-2.5 py-1 text-xs font-bold ${VALUE_CHIPS[vi % VALUE_CHIPS.length]}`}
                              >
                                {v}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <p className="text-sm leading-relaxed text-ink-muted">
                            {card.text}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Right column — logo on a baseplate */}
          <Reveal delay={120}>
            <div className="relative">
              <div className="flex min-h-[24rem] flex-col items-center justify-center rounded-[20px] border border-ink-line bg-baseplate p-8 text-center sm:p-10">
                <img
                  src="./logo.png"
                  alt="Logomarca UNIBEM"
                  className="h-auto w-full max-w-sm"
                />
                <p className="mt-7 font-heading text-xl font-semibold leading-snug text-ink sm:text-2xl">
                  Cada criança merece um futuro cheio de possibilidades
                </p>
                <Studs count={4} className="mt-4 text-uni-green" />
                <p className="mt-3 text-sm text-ink-muted">UNIBEM Imbituva — OSC</p>
              </div>

              {/* Floating stat brick */}
              <div className="absolute -bottom-6 -left-4 rounded-brick border-b-4 border-uni-yellow-deep bg-uni-yellow px-5 py-4 text-ink shadow-lift sm:-left-6">
                <div className="font-heading text-2xl font-semibold leading-none">
                  {stats[0].value}
                </div>
                <div className="mt-1 text-xs font-bold opacity-80">
                  {stats[0].label}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Stats strip — snap-together bricks */}
        <div className="mt-24 grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <StatBrick
                value={stat.value}
                label={stat.label}
                tone={STAT_TONES[i % STAT_TONES.length]}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
