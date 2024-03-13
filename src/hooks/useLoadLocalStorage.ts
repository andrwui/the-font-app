import { useEffect } from 'react'
import useCollectionsStore from 'stores/CollectionsStore'
import { useFavoritesStore } from 'stores/SettingsStore'

const useLoadLocalStorage = (): void => {
  const { setFavorites } = useFavoritesStore()
  const setCollections = useCollectionsStore(s => s.setCollections)

  useEffect(() => {
    const storedFavorites = localStorage.getItem('favorites')
    const storedCollections = localStorage.getItem('collections')
    const favsArr = storedFavorites ? storedFavorites.split(';') : []
    const collsObj = storedCollections ? JSON.parse(storedCollections) : {}
    setFavorites(favsArr)
    setCollections(collsObj)
  }, [])
}
export default useLoadLocalStorage
