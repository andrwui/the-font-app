import Text from 'components/Text'
import { type ReactElement } from 'react'

const NoCollectionSelected = (): ReactElement => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          size={18}
          weight="400"
        >
          Select one of your collections to manage it!
        </Text>
      </div>
    </div>
  )
}

export default NoCollectionSelected
