import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { createPortal } from 'react-dom'
import { Menu, X, Instagram, Facebook, Twitter, Youtube, X as CloseIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'

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

export function NewHeader({ leaderName }: { leaderName: string }) {
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [showLogoModal, setShowLogoModal] = useState(false)
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

  useEffect(() => {
    document.body.style.overflow = showLogoModal ? 'hidden' : ''
  }, [showLogoModal])

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
      {/* Top bar: Logo + Leader Name + Social + Language */}
      <Container>
        <div className="flex h-24 items-center justify-between gap-4">
          <div className="flex items-center gap-5">
            <button
              type="button"
              onClick={() => setShowLogoModal(true)}
              className="h-20 w-20 rounded-full overflow-hidden bg-slate-200 ring-4 ring-blue-600 shadow-xl shrink-0 cursor-pointer hover:ring-blue-400 transition-all hover:scale-105"
              aria-label="View logo in full size"
            >
              <img
                src="/logo2.png"
                alt={leaderName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/leader-placeholder.svg'
                }}
              />
            </button>
            <Link to={`/${lang}/home`} className="font-bold text-2xl text-slate-900 tracking-tight">
              {leaderName}
            </Link>
          </div>

          <div className="hidden items-center gap-4 md:flex shrink-0">
            <div className="flex items-center gap-2">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-full p-2 text-slate-600 transition hover:bg-blue-50 hover:text-blue-600"
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
              className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-900 transition hover:bg-slate-200"
              aria-label="Open menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>

      {/* Bottom bar: Navigation Links */}
      <nav className="border-t border-slate-100 bg-slate-50/80 backdrop-blur-sm">
        <Container>
          <div className="hidden items-center justify-center gap-2 py-1 md:flex">
            {NAV.map((item) => (
              <NavLink
                key={item.key}
                to={item.to(lang)}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                    isActive
                      ? 'bg-green-600 text-white shadow-lg shadow-green-600/30'
                      : 'text-slate-600 hover:bg-green-50 hover:text-green-700 hover:shadow-md'
                  }`
                }
              >
                {item.label[lang === 'te' ? 'te' : 'en']}
              </NavLink>
            ))}
          </div>
        </Container>
      </nav>

      {/* Mobile menu */}
      {open ? (
        <div className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md md:hidden">
          <Container>
            <div className="flex h-20 items-center justify-between">
              <span className="font-semibold text-slate-900">Menu</span>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-slate-100 p-2 text-slate-900 transition hover:bg-slate-200"
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
                  className="rounded-2xl bg-slate-50 px-5 py-4 text-base font-semibold text-slate-900 ring-1 ring-slate-200 transition hover:bg-white"
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

      {/* Logo Modal - Rendered via Portal to body */}
      {showLogoModal && createPortal(
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', backdropFilter: 'blur(16px)' }}
          onClick={() => setShowLogoModal(false)}
        >
          <div
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="h-80 w-80 rounded-full overflow-hidden bg-white"
              style={{
                border: '8px solid white',
                boxShadow: '0 25px 100px rgba(0, 0, 0, 0.5), 0 0 0 20px rgba(255, 255, 255, 0.3)'
              }}
            >
              <img
                src="/logo2.png"
                alt={leaderName}
                className="h-full w-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/leader-placeholder.svg'
                }}
              />
            </div>
            <button
              type="button"
              onClick={() => setShowLogoModal(false)}
              className="absolute -top-3 -right-3 rounded-full bg-white p-2 text-slate-900 shadow-lg hover:bg-slate-100 hover:scale-110 transition-all"
              aria-label="Close"
              style={{ boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)' }}
            >
              <CloseIcon className="h-6 w-6" />
            </button>
          </div>
        </div>,
        document.body
      )}
    </header>
  )
}
