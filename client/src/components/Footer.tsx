import type { SiteConfig } from '../content/site'
import { ui, type Locale } from '../content/i18n'
import { Container } from './Container'

export function Footer({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <footer className="border-t border-slate-200/70 py-10">
      <Container>
        <div className="flex flex-col gap-3 text-sm text-slate-500">
          <p className="text-slate-700">{site.leader.name}</p>
          <p>{site.footer.note}</p>
          <p>
            © {new Date().getFullYear()} {site.leader.name}.{' '}
            {ui(locale, 'rightsReserved')}
          </p>
        </div>
      </Container>
    </footer>
  )
}
