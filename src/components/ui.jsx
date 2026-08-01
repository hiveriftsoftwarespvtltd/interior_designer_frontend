// GoldDivider - a centered decorative element with a thin gold line and diamond
export function GoldDivider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`}>
      <span className="block w-16 h-px bg-gold-border/50" />
      <span className="block w-1.5 h-1.5 bg-gold-primary rotate-45" />
      <span className="block w-16 h-px bg-gold-border/50" />
    </div>
  )
}

// GoldLine - a left-aligned short gold accent line
export function GoldLine({ className = '' }) {
  return <span className={`block w-10 h-px bg-gold-primary ${className}`} />
}

// SectionHeader - reusable section title block (eyebrow + heading + optional subtitle)
export function SectionHeader({
  eyebrow,
  heading,
  headingGold,
  subtitle,
  centered = false,
  light = false,
}) {
  return (
    <div className={`flex flex-col gap-3 ${centered ? 'items-center text-center' : 'items-start'}`}>
      {eyebrow && (
        <span className="eyebrow-label">{eyebrow}</span>
      )}
      <h2
        className={`font-heading font-semibold leading-tight ${
          light ? 'text-text-heading text-4xl lg:text-5xl' : 'text-text-heading text-3xl lg:text-4xl'
        }`}
      >
        {heading}
        {headingGold && (
          <>
            <br />
            <span className="text-gradient-gold italic">{headingGold}</span>
          </>
        )}
      </h2>
      {centered && <GoldDivider className="my-1" />}
      {!centered && <GoldLine className="mt-1" />}
      {subtitle && (
        <p className="font-sans text-sm text-text-paragraph leading-relaxed max-w-xl mt-1">
          {subtitle}
        </p>
      )}
    </div>
  )
}

// StatItem - numeric stat with icon label
export function StatItem({ icon: Icon, value, label }) {
  return (
    <div className="flex items-start gap-4">
      {Icon && <Icon size={24} className="text-gold-primary flex-shrink-0 mt-0.5" />}
      <div>
        <p className="font-heading text-2xl font-bold text-text-heading">{value}</p>
        <p className="font-sans text-xs text-text-paragraph leading-snug mt-0.5">{label}</p>
      </div>
    </div>
  )
}
