import * as React from "react"

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
}

export function Button({
  className,
  variant = "primary",
  size = "md",
  ...props
}: ButtonProps) {
  const base = "inline-flex items-center justify-center whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[var(--color-primary-base)] disabled:pointer-events-none disabled:opacity-50"

  const sizes = {
    sm: "text-sm h-9 px-4 rounded-lg",
    md: "text-sm h-11 px-6 rounded-lg",
    lg: "text-base h-14 px-10 rounded-xl"
  }

  const variants = {
    primary: "bg-gradient-to-r from-[var(--color-primary-dark)] to-[var(--color-primary-base)] text-white hover:from-[var(--color-primary-base)] hover:to-[var(--color-primary-hover)] shadow-md",
    secondary: "bg-gradient-to-r from-zinc-900 to-zinc-700 text-white hover:from-zinc-800 hover:to-zinc-600 shadow-md",
    outline: "border-2 border-[var(--color-foreground)] text-[var(--color-foreground)] hover:bg-gradient-to-r hover:from-[var(--color-primary-dark)] hover:to-[var(--color-primary-base)] hover:text-white hover:border-transparent",
    ghost: "text-[var(--color-muted-fg)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-surface)]"
  }

  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className || ""}`}
      {...props}
    />
  )
}
