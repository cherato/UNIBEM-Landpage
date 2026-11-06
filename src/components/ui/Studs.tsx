interface StudsProps {
  count?: number
  className?: string
}

export default function Studs({ count = 4, className = '' }: StudsProps) {
  return (
    <div className={`flex items-center gap-1.5 ${className}`} aria-hidden="true">
      {Array.from({ length: count }).map((_, i) => (
        <span key={i} className="stud" />
      ))}
    </div>
  )
}
