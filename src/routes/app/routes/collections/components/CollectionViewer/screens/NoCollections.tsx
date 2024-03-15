import RouterLink from 'components/RouterLink'
import Text from 'components/Text'
import { type ReactElement } from 'react'

const NoCollectionSelected = (): ReactElement => {
  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          size={18}
          weight="300"
        >
          It seems you don&apos;t have collections.
        </Text>
        <RouterLink
          icon
          animated
          to={'/app/font-viewer/local'}
          className="text-[18px] font-bold"
          replace
        >
          Go to the font viewer to get some!
        </RouterLink>
      </div>
    </div>
  )
}

export default NoCollectionSelected
