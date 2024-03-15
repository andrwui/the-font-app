import { type ReactElement } from 'react'
import Text from 'components/Text'
import { useLocation, useNavigate } from 'react-router-dom'

const CollectionCard = ({ children }: { children: string }): ReactElement => {
  const location = useLocation().search
  const isCurrentCollection = decodeURIComponent(location).includes(children)

  console.log('ICC: ', isCurrentCollection)
  console.log('location: ', location)
  console.log('decodedLocation: ', decodeURIComponent(location))

  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`?col=${children}`)
  }

  return (
    <div
      onClick={handleClick}
      className={`px-5 py-3 rounded-md cursor-pointer transition-all duration-75 ${isCurrentCollection ? 'bg-accent text-accent' : 'bg-dark text-regular'}`}
    >
      <Text
        size={18}
        align="center"
      >
        {children}
      </Text>
    </div>
  )
}

export default CollectionCard
