import { type CSSProperties, type ReactElement, type ReactNode } from 'react'

interface ButtonProps {
  className?: string
  style?: CSSProperties
  animated?: boolean
  danger?: boolean

  children: ReactNode
  onClick: () => void
}

const Button = ({
  style,
  className,
  children,
  onClick,
  animated,
  danger,
}: ButtonProps): ReactElement => {
  return (
    <button
      style={{
        ...style,
      }}
      onClick={onClick}
      className={`${className}
      ${animated ? 'transition-all duration-75 active:scale-[0.95]' : ''}
      ${danger ? 'bg-red-700 text-white' : ''}
      text-bold rounded-md bg-foreground p-2 text-background
    `}
    >
      {children}
    </button>
  )
}
export default Button
