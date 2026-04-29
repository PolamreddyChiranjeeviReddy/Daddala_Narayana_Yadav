import { ArrowRight } from 'lucide-react'

import { Container } from '../Container'
import { Button } from '../Button'
import type { HomeContent } from '../../content/types'
import { useLanguage } from '../i18n/language'

export function HeroSection({
  content,
  ctaHref,
  achievementPreview,
}: {
  content: HomeContent
  ctaHref: string
  achievementPreview?: Array<{ year: string; title: string }>
}) {
  const { lang } = useLanguage()
  const { leader, hero } = content

  return (
    <section className="relative py-12 sm:py-16">
      <Container>
        <div className="relative min-h-[600px] sm:min-h-[700px]">
          <div className="group relative mx-auto max-w-5xl">
            <div className="relative">
              
              {/* Content wrapper */}
              <div className="relative p-6 sm:p-8 md:p-10">
                <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] items-start">
                  
                  {/* LEFT: Text & Info */}
                  <div className="space-y-5 sm:space-y-6">
                    {/* Badges */}
                    <div className="flex flex-wrap gap-2">
                      {leader.badges.map((badge) => (
<span
                          key={badge}
                          className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold tracking-wide bg-slate-800 text-white transition-all cursor-default"
                        >
                          ✨ {badge}
                        </span>
                      ))}
                    </div>

                    {/* Main headline */}
                    <h1 className="text-4xl sm:text-5xl md:text-5xl font-bold text-slate-900 leading-tight">
                      {hero.headline}
                    </h1>

                    {/* Tagline */}
                    <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium max-w-2xl">
                      {hero.tagline}
                    </p>

                    {/* Stats Grid - Integrated */}
                    <div className="grid grid-cols-2 gap-3 sm:gap-4">
                      {hero.stats.map((stat) => (
                        <div
                          key={stat.label}
                          className="rounded-xl p-3 sm:p-4 border border-slate-200 transition-all group/stat cursor-default"
                        >
                          <div className="text-xs font-bold uppercase tracking-wider text-slate-600 group-hover/stat:text-blue-600 transition">
                            {stat.label}
                          </div>
                          <div className="mt-2 text-lg sm:text-xl font-bold text-slate-900 group-hover/stat:text-blue-700 transition">
                            {stat.value}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Achievements Preview - Integrated */}
                    {achievementPreview?.length ? (
                      <div className="rounded-xl p-4 border border-amber-200">
                        <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-3">
                          🏆 {lang === 'te' ? 'ముఖ్య సాధనలు' : 'Key Achievements'}
                        </div>
                        <div className="space-y-2">
                          {achievementPreview.slice(0, 3).map((achievement) => (
                            <div key={`${achievement.year}-${achievement.title}`} className="flex items-start gap-2">
                              <span className="text-xs font-bold px-2 py-1 rounded-lg bg-amber-600/20 text-amber-700 shrink-0">
                                {achievement.year}
                              </span>
                              <span className="text-sm font-semibold text-slate-700">{achievement.title}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ) : null}

                    {/* Did you know box */}
                    <div className="rounded-xl p-4 border border-cyan-200">
                      <div className="text-xs font-bold uppercase tracking-wider text-cyan-700 mb-2">
                        ℹ️ {hero.didYouKnow.label}
                      </div>
                      <p className="text-sm leading-6 text-slate-700">{hero.didYouKnow.fact}</p>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                      <Button to={ctaHref} variant="primary" className="group/btn">
                        <span className="flex items-center justify-center gap-2">
                          {lang === 'te' ? 'సాధనలు చూడండి' : 'View Achievements'}
                          <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </Button>
                      <Button to={`/${lang}/contact`} variant="secondary">
                        {lang === 'te' ? 'సంప్రదించండి' : 'Connect Now'}
                      </Button>
                    </div>

                    {/* Footer info */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-slate-600 font-medium pt-2">
                      <span className="font-bold text-slate-900">{leader.position}</span>
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                      <span>{leader.region}</span>
                    </div>
                  </div>

                  {/* RIGHT: Profile Picture */}
                  <div className="relative">
                    <div className="relative rounded-2xl overflow-hidden p-2 sm:p-3 shadow-xl">
                      <div className="rounded-lg overflow-hidden aspect-square sm:aspect-auto">
                        <img
                          src={leader.portrait}
                          alt={`${leader.name} portrait`}
                          className="w-full h-full object-cover object-center"
                          loading="eager"
                          onError={(e) => {
                            const img = e.currentTarget
                            img.src = '/leader-placeholder.svg'
                          }}
                        />
                      </div>
                    </div>

                    {/* Name plate under image */}
                    <div className="mt-4 text-center space-y-1">
                      <p className="text-lg sm:text-xl font-bold text-slate-900 transition-all">
                        {leader.name}
                      </p>
                      <p className="text-xs sm:text-sm font-semibold text-slate-600">{leader.position}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
