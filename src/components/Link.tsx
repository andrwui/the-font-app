import { type ReactElement, type ReactNode } from 'react'

interface LinkProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  to: string
}

const Link = ({ to, children, className, style }: LinkProps): ReactElement => {
  return (
    <a
      className={`flex items-center justify-center gap-1 underline underline-offset-2 ${className}`}
      style={{ ...style }}
      href={to}
    >
      {children}
    </a>
  )
}

export default Link
