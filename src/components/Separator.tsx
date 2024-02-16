import { type CSSProperties, type ReactElement } from 'react'

const Separator = ({
  className,
  style,
}: {
  className?: string
  style?: CSSProperties
}): ReactElement => {
  return (
    <div
      className={`h-[1px] w-full bg-secondary-light bg-opacity-10 ${className}`}
      style={{ ...style }}
    />
  )
}

export default Separator
