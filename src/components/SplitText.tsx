import { Fragment, useRef, type CSSProperties, type ReactElement } from 'react'
import { motion, useInView } from 'framer-motion'

type SplitTextProps = {
  children: string

  style?: CSSProperties
  className?: string
  childrenClassName?: string

  opacity?: boolean
  split: 'words' | 'letters'
  from: 'up' | 'down'
  stagger?: number
  delay?: number
  duration?: number
}

const SplitText = ({
  children,
  className,
  from,
  stagger,
  duration,
  delay,
  opacity,
  split,
  style,
  childrenClassName,
}: SplitTextProps): ReactElement => {
  const comps = children.split(split === 'letters' ? '' : ' ')
  const elRef = useRef<HTMLParagraphElement>(null)

  const inView = useInView(elRef, { once: false, margin: '-50px' })

  return (
    <div
      className={`${split === 'letters' ? 'overflow-hidden px-2' : ''} ${className ? className : ''}`}
    >
      {comps.map((el, i) => {
        return split === 'letters' ? (
          <Fragment key={i}>
            <motion.p
              ref={elRef}
              className={`inline-block ${childrenClassName ? childrenClassName : ''}`}
              key={i}
              style={{
                ...style,
              }}
              initial={{
                opacity: opacity ? 0 : 1,
                y: from === 'up' ? '-100%' : '100%',
              }}
              animate={{
                opacity: opacity ? (inView ? 1 : 0) : 1,
                y: inView ? 0 : from === 'up' ? '-100%' : '100%',
              }}
              transition={{
                duration: duration || 0.3,
                delay: stagger
                  ? i * (stagger ? stagger / 100 : 1) + (delay || 0)
                  : delay || 0,
                ease: [0.23, 0.81, 0.63, 0.97],
              }}
            >
              {`${el}`}
            </motion.p>
          </Fragment>
        ) : (
          <div
            key={i}
            className="overflow-hidden inline-block w-max"
          >
            <motion.p
              ref={elRef}
              className={`inline-block ${childrenClassName ? childrenClassName : ''}`}
              key={i}
              style={{
                ...style,
              }}
              initial={{
                opacity: opacity ? 0 : 1,
                y: from === 'up' ? '-100%' : '100%',
              }}
              animate={{
                opacity: opacity ? (inView ? 1 : 0) : 1,
                y: inView ? 0 : from === 'up' ? '-100%' : '100%',
              }}
              transition={{
                duration: duration || 0.3,
                delay: stagger
                  ? i * (stagger ? stagger / 100 : 1) + (delay || 0)
                  : delay || 0,
                ease: [0.23, 0.81, 0.63, 0.97],
              }}
            >
              {`${el}`}
            </motion.p>
            {comps[i + 1] ? (
              <span dangerouslySetInnerHTML={{ __html: '&nbsp;' }} />
            ) : null}
          </div>
        )
      })}
    </div>
  )
}

export default SplitText
