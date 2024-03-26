import { isLocalFont } from 'helpers/FontHelper'
import useCollectionsStore from 'stores/CollectionsStore'
import { type CollectionItem } from 'types/CollectionTypes'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'

const useCollections = (): any => {
  const collections = useCollectionsStore(s => s.collections)
  const setCollections = useCollectionsStore(s => s.setCollections)
  const toggleInCollection = (
    collection: string,
    item: CollectionItem<LocalFont | GoogleFont>,
  ): void => {
    useCollectionsStore.setState(prevState => {
      // Add collection if it doesn't exist
      if (!prevState.collections[collection]) {
        prevState.collections[collection] = []
      }

      // Check if item exists in collection
      if (
        !prevState.collections[collection].some(i => {
          if (isLocalFont(i.family) && isLocalFont(item.family)) {
            return i.family[0].family === item.family[0].family && i.from === item.from
          } else if (!isLocalFont(i.family) && !isLocalFont(item.family)) {
            return i.family.family === item.family.family && i.from === item.from
          }
          return null
        })
      ) {
        prevState.collections[collection].push(item)
      } else {
        // Remove item from collection

        prevState.collections[collection] = prevState.collections[collection].filter(
          i => {
            if (isLocalFont(i.family) && isLocalFont(item.family)) {
              return !(
                i.family[0].family === item.family[0].family && i.from === item.from
              )
            } else if (!isLocalFont(i.family) && !isLocalFont(item.family)) {
              return !(i.family.family === item.family.family && i.from === item.from)
            }
            return true
          },
        )
      }

      return prevState
    })
    localStorage.setItem('collections', JSON.stringify(collections))
  }

  const resetCollections = (): void => {
    setCollections({})
    localStorage.setItem('collections', JSON.stringify({}))
  }

  return { toggleInCollection, resetCollections }
}

export default useCollections
