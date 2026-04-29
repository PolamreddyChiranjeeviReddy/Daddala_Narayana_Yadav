import type { PropsWithChildren } from 'react'

export function SectionHeading({
  eyebrow,
  title,
  description,
  children,
}: PropsWithChildren<{
  eyebrow?: string
  title: string
  description?: string
}>) {
  return (
    <div className="flex max-w-3xl flex-col gap-3">
      {eyebrow ? (
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-pretty text-3xl font-semibold leading-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="text-pretty text-base leading-7 text-slate-600 sm:text-lg">
          {description}
        </p>
      ) : null}
      {children}
    </div>
  )
}
