import { type CSSProperties, type ReactElement } from 'react'

// Spinner component for loading states
const FontSpinner = ({
  size,
}: {
  size?: number | string
  childrenStyle?: CSSProperties
  parentStyle?: CSSProperties
}): ReactElement => {
  return (
    <div
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
    >
      <div
        className="inline-block animate-spin rounded-full border-[3px] border-current border-t-transparent text-regular size-6"
        style={{}}
      ></div>
    </div>
  )
}
export default FontSpinner
