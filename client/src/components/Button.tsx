import type { PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost'

const variants: Record<Variant, string> = {
  primary:
    'bg-[color:var(--accent2)] text-white hover:opacity-95 shadow-[0_10px_30px_-14px_rgba(2,6,23,0.35)]',
  secondary:
    'bg-[color:var(--accent)] text-white hover:opacity-95 shadow-[0_10px_30px_-14px_rgba(2,6,23,0.25)]',
  ghost: 'bg-transparent text-slate-900 hover:bg-slate-900/5',
}

export function Button({
  href,
  to,
  onClick,
  variant = 'primary',
  className,
  children,
}: PropsWithChildren<{
  href?: string
  to?: string
  onClick?: () => void
  variant?: Variant
  className?: string
}>) {
  const base =
    'inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold tracking-wide transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20'
  const classes = `${base} ${variants[variant]} ${className ?? ''}`

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
