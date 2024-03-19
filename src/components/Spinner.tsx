import { type CSSProperties, type ReactElement } from 'react'

// Spinner component for loading states
const Spinner = ({
  size,
  style,
}: {
  size?: number | string
  style?: CSSProperties
}): ReactElement => {
  return (
    <div
      className={`inline-block animate-spin rounded-full border-[3px] border-current border-t-transparent text-regular size-6`}
      role="status"
      aria-label="loading"
      style={{
        ...style,
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <span className="sr-only">Loading...</span>
    </div>
  )
}
export default Spinner
