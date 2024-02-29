import Text from 'components/Text'
import { type ReactElement } from 'react'

const NoFontsFound = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div className="grid h-[calc(100vh-80px)] place-items-center text-foreground">
      <Text
        size={13}
        weight="400"
      >
        No fonts were found.
      </Text>
    </div>
  )
}

export default NoFontsFound
