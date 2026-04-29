import { animate, useInView, useMotionValue } from 'framer-motion'
import { useEffect, useMemo, useRef, useState } from 'react'

export function CountUp({
  value,
  duration = 1.4,
  suffix,
}: {
  value: number
  duration?: number
  suffix?: string
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true, amount: 0.6 })

  const motionValue = useMotionValue(0)
  const [display, setDisplay] = useState('0')

  const formatter = useMemo(
    () => new Intl.NumberFormat(undefined, { maximumFractionDigits: 0 }),
    [],
  )

  useEffect(() => {
    const unsubscribe = motionValue.on('change', (latest) => {
      setDisplay(formatter.format(latest))
    })

    return () => unsubscribe()
  }, [formatter, motionValue])

  useEffect(() => {
    if (!isInView) return

    const controls = animate(motionValue, value, {
      duration,
      ease: 'easeOut',
    })

    return () => controls.stop()
  }, [duration, isInView, motionValue, value])

  return (
    <span ref={ref} className="tabular-nums">
      {display}
      {suffix ?? ''}
    </span>
  )
}
