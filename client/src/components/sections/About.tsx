import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'

export function About({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <section id="about" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading
            eyebrow={ui(locale, 'about')}
            title={site.about.headline}
            description={ui(locale, 'aboutDescription')}
          />

          <div className="grid gap-4 md:grid-cols-2">
            {site.about.cards.map((card, idx) => (
              <Reveal key={card.title} delay={idx * 0.05}>
                <a
                  href={card.href}
                  className="group block p-6 hover:bg-slate-50"
                >
                  <div className="text-lg font-semibold text-slate-900">
                    {card.title}
                  </div>
                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {card.description}
                  </p>
                  <p className="mt-4 text-sm font-semibold text-[color:var(--accent)]">
                    {ui(locale, 'explore')}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
