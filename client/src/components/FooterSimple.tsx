import { Container } from './Container'
import { LanguageToggle } from './i18n/LanguageToggle'
import type { HomeContent } from '../content/types'

export function FooterSimple({ content }: { content: HomeContent }) {
  const { leader } = content

  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-slate-500">
          <div className="flex items-center justify-between gap-4">
            <p className="text-slate-700">{leader.name}</p>
            <LanguageToggle />
          </div>
          <p className="text-slate-600">
            {leader.position} · {leader.region}
          </p>
          <p>© {new Date().getFullYear()} {leader.name}. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}
