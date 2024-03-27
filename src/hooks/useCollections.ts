import useCollectionsStore from 'stores/CollectionsStore'
import { type CollectionItem } from 'types/CollectionTypes'

const useCollections = (): any => {
  const collections = useCollectionsStore(s => s.collections)
  const setCollections = useCollectionsStore(s => s.setCollections)
  const toggleInCollection = (collection: string, item: CollectionItem): void => {
    useCollectionsStore.setState(prevState => {
      // Add collection if it doesn't exist
      if (!prevState.collections[collection]) {
        prevState.collections[collection] = []
      }

      // Check if item exists in collection
      if (
        !prevState.collections[collection].some(
          i => i.family === item.family && i.from === item.from,
        )
      ) {
        prevState.collections[collection].push(item)
      } else {
        // Remove item from collection

        prevState.collections[collection] = prevState.collections[collection].filter(
          i => !(i.family === item.family && i.from === item.from),
        )
      }

      localStorage.setItem('collections', JSON.stringify(collections))
      return prevState
    })
  }

  const resetCollections = (): void => {
    setCollections({})
    localStorage.setItem('collections', JSON.stringify({}))
  }

  return { toggleInCollection, resetCollections }
}

export default useCollections
