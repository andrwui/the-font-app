import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FavoriteButton from 'routes/app/routes/generics/Font/components/FavoriteButton'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
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
            <FontContainer>
              <FontTopRowContainer></FontTopRowContainer>
              <FontDisplay />
            </FontContainer>
          )
        })}
    </div>
  )
}

export default CollectionFontList
