import { Mail, MapPin, Phone } from 'lucide-react'

import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'
import { SectionHeading } from '../SectionHeading'
import { Button } from '../Button'

export function Contact({
  site,
  locale,
}: {
  site: SiteConfig
  locale: Locale
}) {
  return (
    <section id="contact" className="scroll-mt-24 py-10 sm:py-14">
      <Container>
        <div className="grid gap-8">
          <SectionHeading
            eyebrow={ui(locale, 'contact')}
            title={site.contact.headline}
            description={site.contact.subheadline}
          />

          <div className="grid gap-4 lg:grid-cols-3">
            <Reveal>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[color:var(--accent)]" />
                  <div className="text-sm font-semibold text-slate-900">
                    {ui(locale, 'email')}
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-600">
                  {site.leader.email}
                </div>
                <div className="mt-5">
                  <Button
                    href={`mailto:${site.leader.email}`}
                    variant="secondary"
                    className="w-full"
                  >
                    {ui(locale, 'sendEmail')}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[color:var(--accent)]" />
                  <div className="text-sm font-semibold text-slate-900">
                    {ui(locale, 'phone')}
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-600">{site.contact.phone}</div>
                <div className="mt-5">
                  <Button href="#" variant="secondary" className="w-full">
                    {ui(locale, 'callSetLink')}
                  </Button>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="p-6">
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[color:var(--accent)]" />
                  <div className="text-sm font-semibold text-slate-900">
                    {ui(locale, 'office')}
                  </div>
                </div>
                <div className="mt-3 text-sm text-slate-600">{site.contact.address}</div>
                <div className="mt-5">
                  <Button href="#" variant="secondary" className="w-full">
                    {ui(locale, 'directionsSetLink')}
                  </Button>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="flex flex-wrap gap-3">
            {site.contact.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                className="px-4 py-2 text-sm font-semibold text-slate-700 transition hover:text-slate-900"
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
