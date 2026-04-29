import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'
import { CountUp } from '../CountUp'

export function Achievements({
  site,
  locale,
}: {
  site: SiteConfig
  locale: Locale
}) {
  return (
    <section id="achievements" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading
            eyebrow={ui(locale, 'achievements')}
            title={site.achievements.headline}
            description={site.achievements.highlight}
          />

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {site.achievements.stats.map((s, idx) => (
              <Reveal key={s.label} delay={idx * 0.05}>
                <div className="p-6">
                  <div className="text-3xl font-semibold text-slate-900">
                    <CountUp value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-2 text-sm text-slate-600">{s.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
