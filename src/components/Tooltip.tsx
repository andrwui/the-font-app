import {
  type ReactNode,
  type ReactElement,
  useState,
  useRef,
  type CSSProperties,
} from 'react'

import { AnimatePresence, motion } from 'framer-motion'

import Text from './Text'

interface TooltipProps {
  children: ReactNode
  direction?: 'top' | 'down' | 'left' | 'right'
  text: string
  className?: string
  delay?: number
}

const Tooltip = ({
  children,
  direction,
  text,
  className,
  delay,
}: TooltipProps): ReactElement => {
  const appearDelay = delay || 200

  const [isVisible, setIsVisible] = useState<boolean>(false)
  const isHovered = useRef<boolean>(false)

  const handleMouseOver = (): void => {
    isHovered.current = true
    setTimeout(() => {
      if (isHovered.current) {
        setIsVisible(true)
      }
    }, appearDelay)
  }

  const handleMouseLeave = (): void => {
    isHovered.current = false
    setIsVisible(false)
  }

  return (
    <div
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className ? className : ''}`}
    >
      {children}
      <Tooltip.Tooltip
        text={text}
        isVisible={isVisible}
        direction={direction}
      />
    </div>
  )
}

Tooltip.Tooltip = ({
  text,
  isVisible,
  direction,
}: {
  text: string
  direction?: 'top' | 'down' | 'left' | 'right'
  isVisible: boolean
}): ReactElement => {
  // Figure out the position based on the given direction
  // Defaults to up
  let styles: CSSProperties = {
    top: 0,
    left: '50%',
    translate: '-50% -120%',
  }

  switch (direction) {
    case 'down':
      styles = {
        top: '100%',
        left: '50%',
        translate: '-50% 20%',
      }
      break
    case 'right':
      styles = {
        top: '50%',
        right: '0%',
        translate: '105% -50%',
      }
      break
    case 'left':
      styles = {
        top: '50%',
        left: '0%',
        translate: '-105% -50%',
      }
      break
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -20,
          }}
          transition={{
            duration: 0.1,
          }}
          className="text-13 pointer-events-none absolute z-[10000] w-max max-w-36 text-wrap rounded-md bg-secondary-dark px-2 py-1 text-center shadow-md"
          style={{
            ...styles,
          }}
        >
          {
            <Text
              size={13}
              wrap
              lineHeight={'15'}
            >
              {text}
            </Text>
          }
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Tooltip
