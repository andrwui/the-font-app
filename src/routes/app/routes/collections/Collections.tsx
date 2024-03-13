import { type ReactElement } from 'react'
import CollectionList from './components/CollectionList/CollectionList'
import CollectionViewer from './components/CollectionViewer/CollectionViewer'

const Collections = (): ReactElement => {
  return (
    <div className="w-full h-full flex">
      <CollectionList />
      <CollectionViewer />
    </div>
  )
}

export default Collections
