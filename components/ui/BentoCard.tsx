import * as React from "react"

export interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string
  description?: string
  children?: React.ReactNode
}

export function BentoCard({
  className,
  title,
  description,
  children,
  ...props
}: BentoCardProps) {
  return (
    <div
      className={`bento-card flex flex-col ${className || ""}`}
      {...props}
    >
      {(title || description) && (
        <div className="flex flex-col gap-1.5 mb-4">
          {title && <h3 className="text-xl font-medium tracking-tight text-[var(--color-foreground)]">{title}</h3>}
          {description && <p className="text-sm text-[var(--color-muted-fg)]">{description}</p>}
        </div>
      )}
      <div className="flex-1">
        {children}
      </div>
    </div>
  )
}
