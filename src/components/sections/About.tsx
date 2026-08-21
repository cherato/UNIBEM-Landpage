import { Target, Eye, Star } from 'lucide-react'
import SectionHeading from '@/components/ui/SectionHeading'
import { ABOUT_CONTENT } from '@/constants/content'

export default function About() {
  const { mission, vision, values, stats, sectionTag, headline, body } =
    ABOUT_CONTENT

  return (
    <section id="quem-somos" className="bg-brand-cream section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left column */}
          <div>
            <SectionHeading
              tag={sectionTag}
              title={headline}
              centered={false}
            />

            <div className="flex flex-col gap-4 mb-10">
              {body.map((paragraph, i) => (
                <p key={i} className="text-brand-gray leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Mission / Vision / Values */}
            <div className="flex flex-col gap-4">
              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-l-4 border-brand-orange shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Target className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-brown mb-1">
                    {mission.label}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {mission.text}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-l-4 border-brand-orange shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Eye className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-brown mb-1">
                    {vision.label}
                  </h3>
                  <p className="text-brand-gray text-sm leading-relaxed">
                    {vision.text}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-white rounded-xl p-5 border-l-4 border-brand-orange shadow-sm">
                <div className="w-10 h-10 rounded-full bg-brand-cream flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-5 h-5 text-brand-orange" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-brand-brown mb-2">
                    {values.label}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {values.items.map((v) => (
                      <span
                        key={v}
                        className="text-xs font-medium bg-brand-cream text-brand-orange px-3 py-1 rounded-full border border-brand-orange/20"
                      >
                        {v}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column — illustration / visual */}
          <div className="relative">
            {/* Main visual card */}
            <div className="relative bg-gradient-to-br from-brand-orange to-brand-orange-dark rounded-3xl overflow-hidden aspect-[4/5] flex flex-col items-center justify-center text-white p-10 shadow-2xl">
              {/* Pattern overlay */}
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="hearts" width="40" height="40" patternUnits="userSpaceOnUse">
                      <text x="10" y="28" fontSize="20">♥</text>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#hearts)" />
                </svg>
              </div>

              <div className="relative z-10 text-center">
                <div className="text-8xl mb-4">🌱</div>
                <p className="font-heading font-bold text-2xl leading-snug">
                  Cada criança merece um futuro cheio de possibilidades
                </p>
                <div className="mt-6 w-16 h-1 bg-white/40 rounded-full mx-auto" />
                <p className="mt-4 text-white/80 text-sm">
                  UNIBEM Imbituva — OSC
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-5 flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-brand-orange flex items-center justify-center">
                <span className="text-white font-heading font-bold text-lg">
                  {stats[0].value}
                </span>
              </div>
              <div>
                <div className="font-heading font-bold text-brand-brown text-sm">
                  {stats[0].label}
                </div>
                <div className="text-brand-gray text-xs">em Imbituva</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading font-extrabold text-4xl sm:text-5xl text-brand-orange">
                {stat.value}
              </div>
              <div className="text-brand-gray text-sm mt-2 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
