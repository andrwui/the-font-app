import Tooltip from 'components/Tooltip'
import { useState, useEffect, type ReactElement } from 'react'
import { FaStar } from 'react-icons/fa'
import { useFavoritesStore } from 'stores/SettingsStore'

const FavoriteButton = ({ font }: { font: string }): ReactElement => {
  const { favorites, setFavorites } = useFavoritesStore()
  const [isFavorite, setIsFavorite] = useState(favorites.includes(font))

  useEffect(() => {
    setIsFavorite(favorites.includes(font))
    localStorage.setItem('favorites', favorites.join(';'))
  }, [favorites, font])

  const handleClick = (): void => {
    if (!isFavorite) {
      setFavorites([...favorites, font])
    } else {
      setFavorites(favorites.filter(f => f !== font))
    }
    console.log(localStorage.getItem('favorites'))
  }

  return (
    <Tooltip text={isFavorite ? 'Remove from favorites' : 'Add to favorites'}>
      <button onClick={handleClick}>
        <FaStar className={isFavorite ? 'text-yellow-400' : ''} />
      </button>
    </Tooltip>
  )
}

export default FavoriteButton
