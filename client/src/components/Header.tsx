import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'

import { Container } from './Container'
import { LanguageToggle } from './i18n/LanguageToggle'
import { useLanguage } from './i18n/language'

const SOCIAL_LINKS = [
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com', label: 'Facebook' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
]

const NAV: Array<{ key: string; to: (lang: string) => string; label: { en: string; te: string } }> = [
  { key: 'home', to: (lang) => `/${lang}/home`, label: { en: 'Home', te: 'హోమ్' } },
  { key: 'achievements', to: (lang) => `/${lang}/achievements`, label: { en: 'Achievements', te: 'సాధనలు' } },
  { key: 'impact', to: (lang) => `/${lang}/impact`, label: { en: 'Impact', te: 'ప్రభావం' } },
  { key: 'media', to: (lang) => `/${lang}/media`, label: { en: 'Media', te: 'మీడియా' } },
  { key: 'contact', to: (lang) => `/${lang}/contact`, label: { en: 'Contact', te: 'సంప్రదించండి' } },
]

export function Header({ leaderName }: { leaderName: string }) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 bg-white/75 supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to={`/${lang}/home`} className="font-semibold tracking-tight text-slate-900 shrink-0">
            {leaderName}
          </Link>

          <nav className="hidden items-center gap-7 text-base text-slate-600 md:flex flex-1 justify-center">
            {NAV.map((item) => (
              <NavLink
                key={item.key}
                to={item.to(lang)}
                className={({ isActive }) =>
                  `px-3 py-1.5 rounded-full transition-colors ${
                    isActive 
                      ? 'bg-[color:var(--accent)] text-white' 
                      : 'hover:bg-[color:var(--accent2)] hover:text-white'
                  }`
                }
              >
                {item.label[lang === 'te' ? 'te' : 'en']}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex shrink-0">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 transition hover:bg-[color:var(--accent2)] hover:text-white"
                    aria-label={social.label}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              })}
            </div>
            <div className="h-5 w-px bg-slate-200" />
            <LanguageToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-900/10"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {open ? (
        <div className="fixed inset-0 z-50 bg-white/80 md:hidden">
          <Container>
            <div className="flex h-16 items-center justify-between">
              <span className="font-semibold text-slate-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-slate-900/5 p-2 text-slate-900 ring-1 ring-slate-200 transition hover:bg-slate-900/10"
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-6 grid gap-2 pb-6">
              {NAV.map((item) => (
                <Link
                  key={item.key}
                  to={item.to(lang)}
                  className="rounded-2xl bg-white px-5 py-4 text-base font-semibold text-slate-900 ring-1 ring-slate-200"
                >
                  {item.label[lang === 'te' ? 'te' : 'en']}
                </Link>
              ))}
            </div>

            <div className="border-t border-slate-200 pt-6">
              <div className="text-sm font-semibold text-slate-900 mb-3">Follow us</div>
              <div className="flex gap-3">
                {SOCIAL_LINKS.map((social) => {
                  const Icon = social.icon
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center rounded-full p-3 bg-white ring-1 ring-slate-200 text-slate-600 transition hover:text-slate-900 hover:bg-slate-50"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  )
                })}
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  )
}
