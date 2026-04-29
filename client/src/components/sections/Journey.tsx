import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'

export function Journey({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <section id="journey" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading
            eyebrow={ui(locale, 'journey')}
            title={site.journey.headline}
          />

          <div className="grid gap-4">
            {site.journey.items.map((item, idx) => (
              <Reveal key={item.year} delay={idx * 0.05}>
                <div className="p-6">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div className="text-sm font-semibold text-[color:var(--accent)]">
                      {item.year}
                    </div>
                    <div className="sm:max-w-3xl">
                      <div className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-slate-600">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
