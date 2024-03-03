import { type CSSProperties, type ReactElement } from 'react'
import { motion } from 'framer-motion'

interface SplitTextProps {
  children: string

  style?: CSSProperties
  className?: string
  childrenClassName?: string

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
  delay,
  split,
  style,
  childrenClassName,
}: SplitTextProps): ReactElement => {
  const comps = children.split(split === 'letters' ? '' : ' ')

  return (
    <div
      className={`${split === 'letters' ? 'overflow-hidden px-2' : ''} ${className ? className : ''}`}
    >
      {comps.map((el, i) => {
        return split === 'letters' ? (
          <>
            <motion.p
              className={`inline-block ${childrenClassName ? childrenClassName : ''}`}
              key={i}
              style={{
                ...style,
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
                delay: i * (stagger ? stagger / 100 : 1) + (delay ? delay : 0),
                type: 'spring',
                damping: 20,
                stiffness: 200,
              }}
            >
              {`${el}`}
            </motion.p>
          </>
        ) : (
          <div
            key={i}
            className="overflow-hidden inline-block w-max max-sm:py-2 py-[3dvw] 2xl:py-[20px]"
          >
            <motion.p
              className={`inline-block ${childrenClassName ? childrenClassName : ''}`}
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
                delay: i * (stagger ? stagger / 100 : 1) + (delay || 0),
                type: 'spring',
                damping: 20,
                stiffness: 200,
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
