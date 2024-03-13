import { type ReactElement } from 'react'
import useCollectionsStore from 'stores/CollectionsStore'
import CollectionCard from './CollectionCard'

const CollectionList = (): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)

  return (
    <div className="flex flex-col gap-4 w-1/8 h-full pr-6">
      {Object.keys(collections).map(col => {
        return <CollectionCard key={''}>{col}</CollectionCard>
      })}
    </div>
  )
}

export default CollectionList
