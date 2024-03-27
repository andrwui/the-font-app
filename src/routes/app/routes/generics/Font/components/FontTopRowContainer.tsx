import Text from 'components/Text'
import { type ReactElement, type ReactNode } from 'react'
import { useTextAlignStore } from 'stores/FontControlsStore'

type FontTopRowProps = {
  children?: ReactNode
  family: string
  familyLength: number | string
}

const FontTopRowContainer = ({
  children,
  family,
  familyLength,
}: FontTopRowProps): ReactElement => {
  const { textAlign } = useTextAlignStore()

  return (
    <div
      className="flex items-center gap-4 font-light text-secondary-light"
      style={{ justifyContent: textAlign }}
    >
      <div className="flex items-center gap-1 font-light text-secondary-light">
        <Text
          weight="300"
          size={13}
        >
          {family}
        </Text>
        <Text
          weight="200"
          size={13}
          className="opacity-35"
        >
          {familyLength}
        </Text>
      </div>
      {children}
    </div>
  )
}

export default FontTopRowContainer
