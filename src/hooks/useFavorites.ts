import { useState, useEffect } from 'react'
import { useFavoritesStore } from 'stores/SettingsStore'

const useFavorites = (
  font?: string,
): { isFavorite: boolean; toggleFavorite: () => void; resetFavorites: () => void } => {
  const { favorites, setFavorites } = useFavoritesStore()
  const [isFavorite, setIsFavorite] = useState(favorites.includes(font!))

  useEffect(() => {
    setIsFavorite(favorites.includes(font!))

    localStorage.setItem('favorites', favorites.join(';'))
  }, [favorites, font])

  const resetFavorites = (): void => {
    setFavorites([])
  }

  const addFavorite = (font: string): void => {
    if (!favorites.includes(font)) {
      setFavorites([...favorites, font])
    }
  }

  const removeFavorite = (font: string): void => {
    setFavorites(favorites.filter(f => f !== font))
  }

  const toggleFavorite = (): void => {
    isFavorite ? removeFavorite(font!) : addFavorite(font!)
  }

  return { isFavorite, toggleFavorite, resetFavorites }
}

export default useFavorites
