import { useLocation, useNavigate } from 'react-router-dom'
import { useLanguage, type Language } from './language'

function swapLangInPath(pathname: string, next: Language) {
  const parts = pathname.split('/').filter(Boolean)
  if (parts.length === 0) return `/${next}/home`

  const current = parts[0]
  if (current === 'en' || current === 'te') {
    parts[0] = next
    return '/' + parts.join('/')
  }

  return `/${next}/home`
}

export function LanguageToggle() {
  const { lang, setLang } = useLanguage()
  const navigate = useNavigate()
  const location = useLocation()

  const onToggle = (next: Language) => {
    setLang(next)
    navigate({ pathname: swapLangInPath(location.pathname, next), search: location.search }, { replace: true })
  }

  return (
    <div className="inline-flex items-center rounded-full bg-white/75 p-1">
      <button
        type="button"
        onClick={() => onToggle('en')}
        className={
          lang === 'en'
            ? 'rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white'
            : 'rounded-full px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900'
        }
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => onToggle('te')}
        className={
          lang === 'te'
            ? 'rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold text-white'
            : 'rounded-full px-3 py-1 text-xs font-semibold text-slate-700 hover:text-slate-900'
        }
        aria-pressed={lang === 'te'}
      >
        తె
      </button>
    </div>
  )
}
