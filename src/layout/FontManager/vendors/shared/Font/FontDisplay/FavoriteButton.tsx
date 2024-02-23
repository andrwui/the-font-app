import Tooltip from 'components/Tooltip'
import useFavorites from 'hooks/useFavorites'
import { type ReactElement } from 'react'
import { FaStar } from 'react-icons/fa'

const FavoriteButton = ({ font }: { font: string }): ReactElement => {
  const { isFavorite, toggleFavorite } = useFavorites(font)

  return (
    <Tooltip text={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <button onClick={toggleFavorite}>
        <FaStar
          className={`${isFavorite ? 'text-yellow-400' : 'text-light'} transition-all duration-75`}
        />
      </button>
    </Tooltip>
  )
}

export default FavoriteButton
