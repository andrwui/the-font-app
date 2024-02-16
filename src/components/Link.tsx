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
      className={`${className} flex items-center justify-center gap-1 underline underline-offset-2`}
      style={{ ...style }}
      href={to}
    >
      {children}
    </a>
  )
}

export default Link
