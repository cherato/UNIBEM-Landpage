import React from 'react'

type Variant = 'primary' | 'secondary' | 'outline' | 'light'
type Color = 'yellow' | 'blue' | 'red' | 'green' | 'ink'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: Variant
  color?: Color
  size?: Size
  studs?: boolean
  children: React.ReactNode
  onClick?: () => void
  href?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  className?: string
  ariaLabel?: string
}

// Filled bricks: white text on blue/red/ink, ink text on yellow/green.
const COLOR_MAP: Record<
  Color,
  { fill: string; hover: string; ring: string; stud: string }
> = {
  ink: {
    fill: 'bg-ink text-white border-ink-soft',
    hover: 'hover:bg-ink-soft',
    ring: 'focus:ring-uni-yellow',
    stud: 'bg-white/20',
  },
  blue: {
    fill: 'bg-uni-blue text-white border-uni-blue-dark',
    hover: 'hover:bg-uni-blue-dark',
    ring: 'focus:ring-uni-blue',
    stud: 'bg-white/20',
  },
  red: {
    fill: 'bg-uni-red text-white border-uni-red-deep',
    hover: 'hover:bg-uni-red-deep',
    ring: 'focus:ring-uni-red',
    stud: 'bg-white/20',
  },
  green: {
    fill: 'bg-uni-green text-ink border-uni-green-dark',
    hover: 'hover:bg-uni-green-dark',
    ring: 'focus:ring-uni-green',
    stud: 'bg-ink/15',
  },
  yellow: {
    fill: 'bg-uni-yellow text-ink border-uni-yellow-deep',
    hover: 'hover:bg-uni-yellow-deep',
    ring: 'focus:ring-uni-yellow',
    stud: 'bg-ink/15',
  },
}

const SIZE_CLASSES: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-7 py-3.5 text-base',
}

export default function Button({
  variant = 'primary',
  color = 'blue',
  size = 'md',
  studs = false,
  children,
  onClick,
  href,
  type = 'button',
  disabled = false,
  className = '',
  ariaLabel,
}: ButtonProps) {
  const base =
    'inline-flex items-center justify-center gap-2 font-heading font-semibold rounded-brick border-b-4 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  let variantClasses: string
  switch (variant) {
    case 'primary': {
      const c = COLOR_MAP[color]
      variantClasses = `${c.fill} ${c.hover} ${c.ring}`
      break
    }
    case 'secondary':
      variantClasses =
        'bg-white text-ink border-ink-line hover:border-ink-soft hover:shadow-card focus:ring-ink-softest'
      break
    case 'outline':
      variantClasses =
        'bg-transparent text-white border-white/70 hover:bg-white/10 focus:ring-white'
      break
    case 'light':
      variantClasses =
        'bg-white text-ink border-ink-line hover:bg-bone focus:ring-uni-yellow'
      break
  }

  const classes = `${base} ${variantClasses} ${SIZE_CLASSES[size]} ${className}`

  const inner =
    studs && variant === 'primary' ? (
      <span className="flex flex-col items-center gap-1.5">
        <span className="flex items-center gap-1">
          {Array.from({ length: 3 }).map((_, i) => (
            <span
              key={i}
              className={`h-1.5 w-1.5 rounded-full ${COLOR_MAP[color].stud}`}
            />
          ))}
        </span>
        <span>{children}</span>
      </span>
    ) : (
      children
    )

  if (href) {
    return (
      <a href={href} className={classes} aria-label={ariaLabel}>
        {inner}
      </a>
    )
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      aria-label={ariaLabel}
    >
      {inner}
    </button>
  )
}
