import Studs from './Studs'

interface SectionHeadingProps {
  title: string
  description?: string
  centered?: boolean
  light?: boolean
  accent?: 'yellow' | 'blue' | 'red' | 'green'
}

const ACCENT: Record<string, string> = {
  yellow: 'text-uni-yellow',
  blue: 'text-uni-blue',
  red: 'text-uni-red',
  green: 'text-uni-green',
}

export default function SectionHeading({
  title,
  description,
  centered = true,
  light = false,
  accent = 'blue',
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <h2
        className={`font-heading text-3xl sm:text-4xl lg:text-5xl font-semibold leading-[1.05] tracking-[-0.03em] ${
          light ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      <Studs
        count={4}
        className={`mt-4 ${centered ? 'justify-center' : ''} ${
          light ? 'text-white/90' : ACCENT[accent]
        }`}
      />
      {description && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            centered ? 'mx-auto' : ''
          } ${light ? 'text-white/75' : 'text-ink-muted'}`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
