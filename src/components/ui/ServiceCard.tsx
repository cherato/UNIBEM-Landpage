import {
  BookOpen,
  Dumbbell,
  Music,
  UtensilsCrossed,
  HeartHandshake,
  Heart,
  GraduationCap,
  ShieldCheck,
  Users,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceItem } from '@/types'
import Studs from './Studs'

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Dumbbell,
  Music,
  UtensilsCrossed,
  HeartHandshake,
  Heart,
  GraduationCap,
  ShieldCheck,
  Users,
}

interface ServiceCardProps {
  service: ServiceItem
  color?: 'blue' | 'green' | 'red' | 'yellow'
}

// Each brick owns its band, icon tile, and tag chips.
const ACCENT = {
  blue: {
    band: 'bg-uni-blue',
    bandStuds: 'text-uni-blue',
    iconBox: 'bg-uni-blue text-white border-uni-blue-dark',
    chip: 'bg-uni-blue/10 text-uni-blue border-uni-blue/30',
  },
  green: {
    band: 'bg-uni-green',
    bandStuds: 'text-uni-green',
    iconBox: 'bg-uni-green text-ink border-uni-green-dark',
    chip: 'bg-uni-green/10 text-uni-green-dark border-uni-green/40',
  },
  red: {
    band: 'bg-uni-red',
    bandStuds: 'text-uni-red',
    iconBox: 'bg-uni-red text-white border-uni-red-deep',
    chip: 'bg-uni-red/10 text-uni-red-deep border-uni-red/30',
  },
  yellow: {
    band: 'bg-uni-yellow',
    bandStuds: 'text-uni-yellow',
    iconBox: 'bg-uni-yellow text-ink border-uni-yellow-deep',
    chip: 'bg-uni-yellow/15 text-uni-yellow-ink border-uni-yellow-deep/40',
  },
} as const

export default function ServiceCard({
  service,
  color = 'blue',
}: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? BookOpen
  const a = ACCENT[color]

  return (
    <div className="group overflow-hidden rounded-brick border border-ink-line bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      {/* Toy-brick band with studs */}
      <div className={`relative h-9 ${a.band}`}>
        <Studs
          count={5}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${a.bandStuds}`}
        />
      </div>

      <div className="flex flex-col gap-4 p-6">
        <div className="flex items-start gap-4">
          <div
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-[10px] border-b-[3px] ${a.iconBox}`}
          >
            <Icon className="h-6 w-6" strokeWidth={2} />
          </div>
          <h3 className="font-heading text-xl font-semibold leading-snug text-ink">
            {service.title}
          </h3>
        </div>

        <p className="flex-1 text-sm leading-relaxed text-ink-muted">
          {service.description}
        </p>

        {service.tags && service.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {service.tags.map((tag) => (
              <span
                key={tag}
                className={`rounded-[8px] border px-2.5 py-1 text-xs font-bold ${a.chip}`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
