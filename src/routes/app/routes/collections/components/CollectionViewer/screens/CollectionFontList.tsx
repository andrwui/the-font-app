import Pill from 'components/Pill'
import { isLocalFont } from 'helpers/FontHelper'
import { type ReactElement } from 'react'
import { useLocation } from 'react-router-dom'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
import useCollectionsStore from 'stores/CollectionsStore'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'

const CollectionFontList = (): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)

  const url = useLocation().search
  const curCollection = decodeURIComponent(url.split('=')[1])

  return (
    <div className="h-full flex flex-col">
      {collections[curCollection] &&
        collections[curCollection].map((el, i) => {
          let font: LocalFont | GoogleFont
          if (isLocalFont(el.family)) {
            font = el.family
            return (
              <FontContainer key={i}>
                <FontTopRowContainer
                  family={font[0].family}
                  familyLength={font.length}
                >
                  <Pill>Local</Pill>
                </FontTopRowContainer>
                <FontDisplay font={font} />
              </FontContainer>
            )
          } else if (!isLocalFont(el.family)) {
            font = el.family
            return (
              <FontContainer key={i}>
                <FontTopRowContainer
                  family={font.family}
                  familyLength={font.variants.length}
                >
                  <Pill>Google</Pill>
                </FontTopRowContainer>
                <FontDisplay font={font} />
              </FontContainer>
            )
          } else {
            return null
          }
        })}
    </div>
  )
}

export default CollectionFontList
