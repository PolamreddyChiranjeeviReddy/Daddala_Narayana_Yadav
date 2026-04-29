import { motion, useReducedMotion, type MotionProps } from 'framer-motion'
import type { PropsWithChildren } from 'react'

export function Reveal({
  children,
  delay = 0,
  className,
  ...rest
}: PropsWithChildren<
  MotionProps & {
    delay?: number
    className?: string
  }
>) {
  const prefersReduced = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={prefersReduced ? false : { opacity: 0, y: 14 }}
      whileInView={prefersReduced ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay }}
      {...rest}
    >
      {children}
    </motion.div>
  )
}
