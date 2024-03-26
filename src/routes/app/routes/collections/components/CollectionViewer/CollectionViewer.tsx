import { useLocation } from 'react-router-dom'
import useCollectionsStore from 'stores/CollectionsStore'
import { type ReactElement } from 'react'
import CollectionFontList from './screens/CollectionFontList'
import NoCollectionSelected from './screens/NoCollectionSelected'
import NoCollections from './screens/NoCollections'
import NoItemsInCollection from './screens/NoItemsInCollection'

const CollectionViewer = (): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)

  const url = useLocation().search
  const curCollection = url ? decodeURIComponent(url.split('=')[1]) : undefined

  return (
    <div className="w-full h-full">
      {!Object.keys(collections).length ? (
        <NoCollections />
      ) : curCollection ? (
        collections[curCollection].length ? (
          <CollectionFontList />
        ) : (
          <NoItemsInCollection />
        )
      ) : (
        <NoCollectionSelected />
      )}
    </div>
  )
}

export default CollectionViewer
