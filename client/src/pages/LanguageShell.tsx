import { useMemo } from 'react'
import { Navigate, Outlet, useParams } from 'react-router-dom'

import {
  getPreferredLanguage,
  LanguageProvider,
  type Language,
} from '../components/i18n/language'

function normalizeLang(value: unknown): Language | null {
  return value === 'en' || value === 'te' ? value : null
}

export function LanguageShell() {
  const params = useParams()
  const lang = normalizeLang(params.lang)
  const preferred = useMemo(() => getPreferredLanguage('en'), [])

  if (!lang) return <Navigate to={`/${preferred}/home`} replace />

  return (
    <LanguageProvider initial={lang} key={lang}>
      <Outlet />
    </LanguageProvider>
  )
}
