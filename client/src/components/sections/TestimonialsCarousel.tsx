import { useEffect, useRef, useState } from 'react'
import { Reveal } from '../motion/Reveal'
import { Container } from '../Container'

export function TestimonialsCarousel({
  headline,
  items,
}: {
  headline: string
  items: Array<{
    name: string
    role: string
    photo: string
    story: string
    videoUrl?: string
  }>
}) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    let scrollSpeed = 0.5
    let lastTime = performance.now()

    const animate = (currentTime: number) => {
      if (!isPaused) {
        const delta = currentTime - lastTime
        container.scrollLeft += scrollSpeed * delta * 0.06

        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        }
      }
      lastTime = currentTime
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [isPaused])

  const extractYouTubeId = (url: string): string | null => {
    const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/)
    return match ? match[1] : null
  }

  return (
    <section className="py-12 sm:py-14 overflow-hidden">
      <Container>
        <Reveal>
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl mb-8">
            {headline}
          </h2>
        </Reveal>

        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Duplicate items for seamless loop */}
          {[...items, ...items].map((t, idx) => {
            const videoId = t.videoUrl ? extractYouTubeId(t.videoUrl) : null
            const isHovered = hoveredIndex === idx

            return (
              <div
                key={`${t.name}-${idx}`}
                className={`flex-shrink-0 w-80 sm:w-96 transition-all duration-300 ${
                  isHovered ? 'scale-105 z-10' : 'scale-100'
                }`}
                onMouseEnter={() => {
                  setHoveredIndex(idx)
                  setIsPaused(true)
                }}
                onMouseLeave={() => {
                  setHoveredIndex(null)
                  setIsPaused(false)
                }}
              >
                <div
                  className="h-full rounded-2xl bg-white p-6 shadow-xl ring-1 ring-slate-200/50 transition-all duration-300 flex flex-col"
                  style={{
                    boxShadow: isHovered
                      ? '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px -10px rgba(59, 130, 246, 0.15)'
                      : '0 10px 30px -5px rgba(0, 0, 0, 0.1)',
                  }}
                >
                  {videoId ? (
                    <>
                      <div className="mb-4 aspect-video overflow-hidden rounded-xl">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=0&rel=0`}
                          title={t.name}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="h-full w-full"
                        />
                      </div>
                      <div className="mt-auto">
                        <div className="text-sm font-semibold text-slate-900 break-words">{t.name}</div>
                        <div className="text-xs text-slate-600 break-words mt-0.5">{t.role}</div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="flex items-start gap-3 mb-4">
                        <div className="h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shrink-0">
                          <img
                            src={t.photo}
                            alt={t.name}
                            className="h-full w-full object-contain"
                            loading="lazy"
                            onError={(e) => {
                              e.currentTarget.src = '/leader-placeholder.svg'
                            }}
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-slate-900 break-words">{t.name}</div>
                          <div className="text-xs text-slate-600 break-words mt-0.5">{t.role}</div>
                        </div>
                      </div>
                      <p className="text-sm leading-6 text-slate-600 flex-1">{t.story}</p>
                    </>
                  )}
                </div>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
