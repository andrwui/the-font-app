import { type ReactElement, useState } from 'react'
import { motion } from 'framer-motion'
import { LuArrowUpRight } from 'react-icons/lu'
import { useNavigate } from 'react-router-dom'

type LinkProps = {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  to: string
  animated?: boolean
  icon?: boolean
  replace?: boolean
}

const RouterLink = ({
  to,
  children,
  className,
  style,
  animated,
  icon,
  replace,
}: LinkProps): ReactElement => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseEnter = (): void => setIsHovering(true)
  const handleMouseLeave = (): void => setIsHovering(false)

  const navigate = useNavigate()

  return (
    <p
      className={`cursor-pointer items-center justify-center w-max inline-flex ${!animated ? 'underline underline-offset-2' : 'relative'} ${className || ''}`}
      style={{ ...style }}
      onClick={() => navigate(to, { replace: replace ? true : false })}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {icon && (
        <LuArrowUpRight
          size={16}
          className="transition-all duration-100"
          style={{
            translate: animated && isHovering ? '3px -3px' : '',
          }}
        />
      )}
      {animated && (
        <motion.span
          className="origin-left h-[1px] bg-accent absolute bottom-[2px]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovering ? 1 : 0 }}
          exit={{ scaleX: 0 }}
          transition={{ duration: 0.2 }}
          style={{ width: '100%', transformOrigin: isHovering ? 'left' : 'right' }}
        />
      )}
    </p>
  )
}

export default RouterLink
