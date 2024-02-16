import { type CSSProperties, type ReactElement, type ReactNode } from 'react'

interface ButtonProps {
  className?: string
  style?: CSSProperties
  animated?: boolean

  children: ReactNode
  onClick: () => void
}

const Button = ({
  style,
  className,
  children,
  onClick,
  animated,
}: ButtonProps): ReactElement => {
  return (
    <button
      style={{
        ...style,
      }}
      onClick={onClick}
      className={`${className} rounded-md bg-foreground p-2 ${
        animated ? 'transition-all duration-75 active:scale-[0.8]' : ''
      }`}
    >
      {children}
    </button>
  )
}
export default Button
