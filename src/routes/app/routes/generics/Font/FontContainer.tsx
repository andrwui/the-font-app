import { type ReactElement, type ReactNode } from 'react'
import { useSizeStore } from 'stores/FontControlsStore'

type FontContainerProps = {
  children: ReactNode
}

const FontContainer = ({ children }: FontContainerProps): ReactElement => {
  const { size } = useSizeStore()

  return (
    <div
      className="flex h-max w-full flex-col justify-center gap-2"
      style={{
        paddingBottom: `${size * 0.5}px`,
      }}
    >
      {children}
    </div>
  )
}

export default FontContainer
