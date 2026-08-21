import {
  BookOpen,
  Dumbbell,
  Music,
  UtensilsCrossed,
  HeartHandshake,
  GraduationCap,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceItem } from '@/types'

const ICON_MAP: Record<string, LucideIcon> = {
  BookOpen,
  Dumbbell,
  Music,
  UtensilsCrossed,
  HeartHandshake,
  GraduationCap,
}

interface ServiceCardProps {
  service: ServiceItem
}

export default function ServiceCard({ service }: ServiceCardProps) {
  const Icon = ICON_MAP[service.icon] ?? BookOpen

  return (
    <div className="bg-white rounded-2xl p-7 shadow-sm border border-gray-100 flex flex-col gap-4 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-14 h-14 rounded-2xl bg-brand-cream flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-brand-orange" strokeWidth={1.8} />
      </div>

      <div className="flex flex-col gap-2 flex-1">
        <h3 className="font-heading text-xl font-bold text-brand-brown leading-snug">
          {service.title}
        </h3>
        <p className="text-brand-gray text-sm leading-relaxed">
          {service.description}
        </p>
      </div>

      {service.tags && service.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 pt-1">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-brand-cream text-brand-orange px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}
