import Studs from './Studs'

export type StatTone = 'blue' | 'green' | 'red' | 'yellow'

const TONES: Record<
  StatTone,
  { box: string; studs: string }
> = {
  blue: {
    box: 'bg-uni-blue text-white border-uni-blue-dark',
    studs: 'text-uni-blue',
  },
  green: {
    box: 'bg-uni-green text-ink border-uni-green-dark',
    studs: 'text-uni-green',
  },
  red: {
    box: 'bg-uni-red text-white border-uni-red-deep',
    studs: 'text-uni-red',
  },
  yellow: {
    box: 'bg-uni-yellow text-ink border-uni-yellow-deep',
    studs: 'text-uni-yellow',
  },
}

interface StatBrickProps {
  value: string
  label: string
  tone: StatTone
}

export default function StatBrick({ value, label, tone }: StatBrickProps) {
  const t = TONES[tone]
  return (
    <div
      className={`relative rounded-brick border-b-4 px-4 pt-5 pb-4 text-center shadow-brick ${t.box}`}
    >
      <Studs count={3} className={`mx-auto mb-2 justify-center ${t.studs}`} />
      <div className="font-heading font-bold text-3xl sm:text-4xl leading-none">
        {value}
      </div>
      <div className="mt-2 text-xs sm:text-sm font-semibold opacity-90">
        {label}
      </div>
    </div>
  )
}
