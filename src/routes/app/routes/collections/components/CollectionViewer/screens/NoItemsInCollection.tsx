import RouterLink from 'components/RouterLink'
import Text from 'components/Text'
import { type ReactElement } from 'react'

const NoItemsInCollection = (): ReactElement => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          size={18}
          weight="400"
        >
          This seems kinda empty...
        </Text>
        <RouterLink
          icon
          animated
          to={'/app/font-viewer/local'}
          className="text-[18px] font-bold"
          replace
        >
          Go add fonts to your collection!
        </RouterLink>
      </div>
    </div>
  )
}

export default NoItemsInCollection
