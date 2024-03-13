import { useLocation } from 'react-router-dom'
import useCollectionsStore from 'stores/CollectionsStore'
import { type ReactElement } from 'react'
import Font from 'routes/app/routes/viewer/vendors/local/components/FontList/components/Font'

const CollectionViewer = (): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)

  const url = useLocation().search
  const curCollection = decodeURIComponent(url.split('=')[1])

  return (
    <div className="w-full h-full flex flex-col">
      {curCollection &&
        collections[curCollection] &&
        collections[curCollection].map((el, i) => {
          return (
            <Font
              key={i}
              font={el.fontData}
            />
          )
        })}
    </div>
  )
}

export default CollectionViewer
