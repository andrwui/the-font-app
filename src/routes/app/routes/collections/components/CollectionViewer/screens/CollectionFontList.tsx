import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import Font from 'routes/app/routes/viewer/vendors/local/components/FontList/components/Font'
import useCollectionsStore from 'stores/CollectionsStore'

const CollectionFontList = ({
  currCollection,
}: {
  currCollection: string
}): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)

  const url = useLocation().search
  const curCollection = decodeURIComponent(url.split('=')[1])
  return (
    <div className="h-full flex flex-col">
      {collections[curCollection] &&
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

export default CollectionFontList
