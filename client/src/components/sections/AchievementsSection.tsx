import { CheckCircle2 } from 'lucide-react'

import type { AchievementItem } from '../../content/types'
import { Container } from '../Container'
import { Reveal } from '../motion/Reveal'

export function AchievementsSection({
  headline,
  items,
}: {
  headline: string
  items: AchievementItem[]
}) {
  return (
    <section className="py-12 sm:py-14">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            {headline}
          </h2>
        </Reveal>

        <div className="mt-8 grid gap-4">
          {items.map((it, idx) => (
            <Reveal key={`${it.year}-${it.title}-${idx}`} delay={Math.min(0.22, idx * 0.03)}>
              <article className="p-5">
                <div className="flex items-start gap-4">
                  <div className="mt-1 inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900/5">
                    <CheckCircle2 className="h-5 w-5 text-[color:var(--accent)]" />
                  </div>
                  <div className="min-w-0">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
                        {it.year}
                      </span>
                      <h3 className="text-base font-semibold text-slate-900">{it.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-600">{it.impact}</p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  )
}
