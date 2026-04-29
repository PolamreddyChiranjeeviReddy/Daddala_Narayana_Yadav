import { ExternalLink } from 'lucide-react'

import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'

export function Media({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <section id="media" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading eyebrow={ui(locale, 'media')} title={site.media.headline} />

          <div className="grid gap-4">
            {site.media.items.map((m, idx) => (
              <Reveal key={m.title} delay={idx * 0.04}>
                <a
                  href={m.href}
                  className="group flex flex-col justify-between gap-2 p-6 hover:bg-slate-50"
                  target={m.href.startsWith('http') ? '_blank' : undefined}
                  rel={m.href.startsWith('http') ? 'noreferrer' : undefined}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-base font-semibold text-slate-900">
                        {m.title}
                      </div>
                      <div className="mt-1 text-sm text-slate-600">
                        {m.source} • {m.date}
                      </div>
                    </div>
                    <ExternalLink className="mt-1 h-5 w-5 text-slate-400 transition group-hover:text-slate-700" />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
