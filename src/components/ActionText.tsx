import { type ReactElement, useState } from 'react'
import { motion } from 'framer-motion'

type ActionTextProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  onClick: () => void
  animated?: boolean
}

const ActionText = ({
  onClick,
  children,
  className,
  style,
}: ActionTextProps): ReactElement => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = (): void => setIsHovering(true)
  const handleMouseLeave = (): void => setIsHovering(false)

  return (
    <a
      className={`cursor-pointer items-center justify-center w-max inline-flex relative ${className || ''}`}
      style={{ ...style }}
      onClick={onClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      <motion.span
        className="origin-left h-[1px] bg-accent absolute bottom-[2px]"
        initial={{
          scaleX: 0,
          filter: 'blur(2px)',
        }}
        animate={{
          scaleX: isHovering ? 1 : 0,
          filter: isHovering ? 'blur(0px)' : 'blur(2px)',
        }}
        exit={{
          scaleX: 0,
          filter: 'blur(2px)',
        }}
        transition={{ duration: 0.2 }}
        style={{
          width: '100%',
          transformOrigin: isHovering ? 'left' : 'right',
        }}
      />
    </a>
  )
}

export default ActionText
