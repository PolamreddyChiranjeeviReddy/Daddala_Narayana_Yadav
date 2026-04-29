import { ArrowRight, ShieldCheck } from 'lucide-react'

import type { SiteConfig } from '../../content/site'
import { ui, type Locale } from '../../content/i18n'
import { Container } from '../Container'
import { Button } from '../Button'
import { Reveal } from '../motion/Reveal'

export function Hero({ site, locale }: { site: SiteConfig; locale: Locale }) {
  return (
    <section id="top" className="relative pt-2 sm:pt-6">
      <Container>
        <div className="grid items-center gap-10 pb-12 pt-6 sm:pb-16 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="flex flex-col gap-6">
            <Reveal>
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-white/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-700">
                <ShieldCheck className="h-4 w-4 text-[color:var(--accent)]" />
                {site.leader.title}
              </div>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-pretty text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl">
                {site.leader.heroLine}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-pretty text-base leading-7 text-slate-600 sm:text-lg">
                {site.leader.heroSubline}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3 sm:flex-row">
                <Button href="#achievements" variant="primary">
                  {ui(locale, 'viewAchievements')}{' '}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button href="#contact" variant="secondary">
                  {ui(locale, 'connect')}
                </Button>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm text-slate-500">
                <span>{site.leader.location}</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-400/60 sm:inline-block" />
                <span>{site.leader.roleLine}</span>
              </div>
            </Reveal>
          </div>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl bg-white/75 ring-1 ring-slate-200">
              <div className="p-6">
                <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-white p-4 ring-1 ring-slate-200">
                  <img
                    src="/leader.jpg"
                    alt={`${site.leader.name} portrait`}
                    className="h-full w-full object-contain object-center"
                    loading="eager"
                    onError={(e) => {
                      const img = e.currentTarget
                      if (img.dataset.fallback !== '1') {
                        img.dataset.fallback = '1'
                        img.src = '/leader.png'
                        return
                      }

                      img.src = '/leader-placeholder.svg'
                    }}
                  />
                </div>
                <div className="mt-5 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      {site.leader.name}
                    </p>
                    <p className="text-sm text-slate-600">{site.leader.title}</p>
                  </div>
                  <div className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200">
                    {ui(locale, 'portfolio')}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
