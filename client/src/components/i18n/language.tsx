import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type PropsWithChildren,
} from 'react'

export type Language = 'en' | 'te'

const STORAGE_KEY = 'leader_lang'

function normalizeLanguage(value: unknown): Language | null {
  return value === 'en' || value === 'te' ? value : null
}

function readStoredLanguage(): Language | null {
  if (typeof window === 'undefined') return null
  return normalizeLanguage(window.localStorage.getItem(STORAGE_KEY))
}

function storeLanguage(lang: Language) {
  if (typeof window === 'undefined') return
  window.localStorage.setItem(STORAGE_KEY, lang)
}

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

export function LanguageProvider({
  initial,
  children,
}: PropsWithChildren<{ initial: Language }>) {
  const [lang, setLangState] = useState<Language>(() => {
    return initial
  })

  const setLang = (next: Language) => {
    setLangState(next)
    storeLanguage(next)
  }

  useEffect(() => {
    document.documentElement.lang = lang
    storeLanguage(lang)
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

export function getPreferredLanguage(fallback: Language = 'en'): Language {
  return readStoredLanguage() ?? fallback
}
