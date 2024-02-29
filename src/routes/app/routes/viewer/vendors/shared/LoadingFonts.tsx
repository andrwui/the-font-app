import Spinner from 'components/Spinner'
import Text from 'components/Text'
import { type ReactElement } from 'react'
const LoadingFonts = (): ReactElement => {
  // Returns a placeholder element for when no fonts are found and the filter is currently set.
  return (
    <div
      className="grid 
      h-[calc(100vh-80px)] place-items-center text-foreground"
    >
      <div className="flex h-max flex-col place-items-center justify-center gap-2">
        <Text>Loading fonts...</Text>
        <Spinner />
      </div>
    </div>
  )
}

export default LoadingFonts
