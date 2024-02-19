import { useState, useEffect } from 'react'
import { useFavoritesStore } from 'stores/SettingsStore'

const useFavorites = (
  font: string,
): { isFavorite: boolean; toggleFavorite: () => void } => {
  const { favorites, setFavorites } = useFavoritesStore()
  const [isFavorite, setIsFavorite] = useState(favorites.includes(font))

  useEffect(() => {
    setIsFavorite(favorites.includes(font))

    localStorage.setItem('favorites', favorites.join(';'))
  }, [favorites, font])

  const addFavorite = (font: string): void => {
    if (!favorites.includes(font)) {
      setFavorites([...favorites, font])
    }
  }

  const removeFavorite = (font: string): void => {
    setFavorites(favorites.filter(f => f !== font))
  }

  const toggleFavorite = (): void => {
    isFavorite ? removeFavorite(font) : addFavorite(font)
  }

  return { isFavorite, toggleFavorite }
}

export default useFavorites
