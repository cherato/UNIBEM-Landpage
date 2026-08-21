interface SectionHeadingProps {
  tag?: string
  title: string
  description?: string
  centered?: boolean
  light?: boolean
}

export default function SectionHeading({
  tag,
  title,
  description,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <div className={`mb-12 ${centered ? 'text-center' : ''}`}>
      {tag && (
        <span
          className={`inline-block text-sm font-semibold uppercase tracking-widest mb-3 px-4 py-1 rounded-full ${
            light
              ? 'bg-white/20 text-white'
              : 'bg-brand-orange/10 text-brand-orange'
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`font-heading text-3xl sm:text-4xl font-bold leading-tight ${
          light ? 'text-white' : 'text-brand-brown'
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-white/80' : 'text-brand-gray'
          }`}
        >
          {description}
        </p>
      )}
    </div>
  )
}
