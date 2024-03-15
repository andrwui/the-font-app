import ActionText from 'components/ActionText'
import Text from 'components/Text'
import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

const NoCollectionSelected = (): ReactElement => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate('/app/font-viewer/local', { replace: true })
  }

  return (
    <div className="h-full w-full grid place-items-center">
      <div className="flex flex-col items-center justify-center">
        <Text
          size={18}
          weight="400"
        >
          Select one of your collection to manage them!
        </Text>
      </div>
    </div>
  )
}

export default NoCollectionSelected
