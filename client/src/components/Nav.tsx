import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

import type { NavItem } from '../content/site'
import { ui, type Locale } from '../content/i18n'
import { Container } from './Container'

export function Nav({
  leaderName,
  items,
  locale,
  onLocaleChange,
}: {
  leaderName: string
  items: NavItem[]
  locale: Locale
  onLocaleChange: (next: Locale) => void
}) {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/75 supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a
            href="#top"
            className="font-semibold tracking-tight text-slate-900"
            onClick={() => setOpen(false)}
          >
            {leaderName}
          </a>

          <nav className="hidden items-center gap-7 text-base text-slate-600 md:flex">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3 py-1.5 rounded-full transition-colors hover:bg-[color:var(--accent2)] hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <div className="group relative">
              <button
                type="button"
                className="inline-flex items-center gap-2 transition-colors hover:text-slate-900"
                aria-label={ui(locale, 'language')}
              >
                {ui(locale, 'language')} <span className="text-slate-400">▾</span>
              </button>
              <div className="absolute right-0 top-full mt-2 w-44 translate-y-1 rounded-2xl bg-white/90 p-2 opacity-0 ring-1 ring-slate-200 transition group-focus-within:pointer-events-auto group-focus-within:translate-y-0 group-focus-within:opacity-100 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                <button
                  type="button"
                  onClick={() => onLocaleChange('en')}
                  className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  English
                </button>
                <button
                  type="button"
                  onClick={() => onLocaleChange('te')}
                  className="mt-1 w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-slate-700 transition hover:bg-slate-50 hover:text-slate-900"
                >
                  తెలుగు
                </button>
              </div>
            </div>
          </nav>

          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-900/10 md:hidden"
            aria-label={ui(locale, 'openMenu')}
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 bg-white/80">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <span className="font-semibold text-slate-900">
                {ui(locale, 'menu')}
              </span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-900/10"
                aria-label={ui(locale, 'closeMenu')}
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-2 pb-10">
              {items.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl bg-white px-5 py-4 text-base font-semibold text-slate-900 ring-1 ring-slate-200"
                >
                  {item.label}
                </a>
              ))}

              <div className="mt-4 rounded-2xl bg-white px-5 py-4 ring-1 ring-slate-200">
                <div className="text-sm font-semibold text-slate-900">
                  {ui(locale, 'language')}
                </div>
                <div className="mt-3 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('en')
                      setOpen(false)
                    }}
                    className="rounded-xl bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200"
                  >
                    English
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      onLocaleChange('te')
                      setOpen(false)
                    }}
                    className="rounded-xl bg-slate-900/5 px-3 py-2 text-sm font-semibold text-slate-900 ring-1 ring-slate-200"
                  >
                    తెలుగు
                  </button>
                </div>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
