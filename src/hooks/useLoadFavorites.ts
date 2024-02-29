import { useEffect } from 'react'
import { useFavoritesStore } from 'stores/SettingsStore'

const useLoadFavorites = (): void => {
  const { setFavorites } = useFavoritesStore()

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    const favsArr = storedFavorites ? storedFavorites.split(';') : []
    setFavorites(favsArr)
  }, [])
}
export default useLoadFavorites
