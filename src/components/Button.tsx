import { type CSSProperties, type ReactElement, type ReactNode } from 'react'

type ButtonProps = {
  className?: string
  style?: CSSProperties
  animated?: boolean
  danger?: boolean
  warn?: boolean

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
  warn,
}: ButtonProps): ReactElement => {
  return (
    <button
      style={{
        ...style,
      }}
      onClick={onClick}
      className={`${className}
      ${animated ? 'transition-all duration-75 active:translate-y-[3px]' : ''}
      ${danger ? 'bg-error text-white' : ''}
      ${warn ? 'bg-warning text-white' : ''}
      font-semibold rounded-md bg-accent p-2 text-background
    `}
    >
      {children}
    </button>
  )
}
export default Button
