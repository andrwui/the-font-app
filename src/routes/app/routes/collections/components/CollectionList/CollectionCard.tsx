import { type ReactElement } from 'react'
import Text from 'components/Text'
import { useNavigate } from 'react-router-dom'

const CollectionCard = ({ children }: { children: string }): ReactElement => {
  const navigate = useNavigate()

  const handleClick = (): void => {
    navigate(`?col=${children}`)
  }

  return (
    <div
      onClick={handleClick}
      className="px-5 py-3 bg-dark rounded-md hover:bg-light transition-all duration-75"
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
