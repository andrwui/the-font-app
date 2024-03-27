import Pill from 'components/Pill'
import { isLocalFont } from 'helpers/FontHelper'
import useFontHelper from 'hooks/useFontHelper'
import { type ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { Virtuoso } from 'react-virtuoso'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
import GoogleFontDisplay from 'routes/app/routes/viewer/vendors/google/GoogleFontDisplay'
import useCollectionsStore from 'stores/CollectionsStore'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
import { useLocalFontsStore } from 'stores/LocalFontsStore'

const CollectionFontList = (): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)
  const url = useLocation().search
  const curCollection = decodeURIComponent(url.split('=')[1])
  const { localFonts } = useLocalFontsStore()
  const { googleFonts } = useGoogleFontStore()

  const { getFontFromFontName } = useFontHelper()
  const navigate = useNavigate()

  if (!localFonts || !googleFonts) {
    console.log('whatthefuck')
    navigate('/', { replace: true })
  }

  return (
    <Virtuoso
      className="h-full overflow-x-hidden"
      totalCount={Object.values(collections[curCollection]).length}
      itemContent={i => {
        const font = getFontFromFontName(
          Object.values(collections[curCollection])[i].family,
          Object.values(collections[curCollection])[i].from,
        )
        console.log(font)
        if (font && isLocalFont(font)) {
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
        } else if (font && !isLocalFont(font)) {
          return (
            <GoogleFontDisplay
              fromPill
              font={font}
            />
          )
        } else {
          return null
        }
      }}
    />
  )
}

export default CollectionFontList
