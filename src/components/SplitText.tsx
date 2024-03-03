import { type CSSProperties, type ReactElement } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  children: string

  style: CSSProperties
  className: string
  childrenClassName?: string

  split: 'words' | 'letters'
  from: 'up' | 'down'
  delay: number
  spacing?: number | string
}

const SplitText = ({
  children,
  className,
  from,
  delay,
  split,
  style,
  childrenClassName,
}: SplitTextProps): ReactElement => {
  const comps = children.split(split === 'letters' ? '' : ' ')

  return (
    <div className={`${split === 'letters' ? 'overflow-hidden px-2' : ''} ${className}`}>
      {comps.map((el, i) => {
        return split === 'letters' ? (
          <motion.p
            className={`inline-block ${childrenClassName}`}
            key={i}
            style={{
              ...style,
              width: '20%',
            }}
            initial={{
              opacity: 0,
              y: from === 'up' ? '-100%' : '100%',
            }}
            animate={{
              opacity: 100,
              y: 0,
            }}
            transition={{
              duration: 4,
              delay: i * (delay / 100),
              type: 'spring',
              damping: 20,
              stiffness: 200,
            }}
          >
            {`${el}`}
          </motion.p>
        ) : (
          <div
            key={i}
            className="overflow-hidden inline-block w-max max-sm:py-2 py-6"
          >
            <motion.p
              className={`inline-block ${childrenClassName}`}
              key={i}
              style={{
                ...style,
              }}
              initial={{
                opacity: 0,
                y: from === 'up' ? '-200' : '200',
              }}
              animate={{
                opacity: 100,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: i * (delay / 100),
                type: 'spring',
                damping: 20,
                stiffness: 200,
              }}
            >
              {`${el}`}
            </motion.p>
          </div>
        )
      })}
    </div>
  )
}

export default SplitText
