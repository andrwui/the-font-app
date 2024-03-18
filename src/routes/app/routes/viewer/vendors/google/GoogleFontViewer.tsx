import { type ReactElement, useEffect, useState } from 'react'
import WebFont from 'webfontloader'
import Loading from '../../../generics/Loading'
import { Virtuoso } from 'react-virtuoso'
import { useTextReplacerStore } from 'stores/FontControlsStore'
import { type GFItems, type GFResponse } from 'types/FontTypes'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
import FavoriteButton from '../../../generics/Font/components/FavoriteButton'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
const GoogleFontViewer = (): ReactElement => {
  const [googleFonts, setGoogleFonts] = useState<GFItems>()

  const API_KEY = 'AIzaSyAffANcQBH_Ld8PS7W_ai2iQTHSSiN320c' as const
  const { text } = useTextReplacerStore()

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?capability=WOFF2&key=${API_KEY}`,
    )
      .then(async f => await f.json())
      .then((data: GFResponse) => {
        setGoogleFonts(data.items)
        console.log(data)
      })
  }, [])

  const loadedFonts: GFItems = []

  return googleFonts ? (
    <Virtuoso
      className="h-full overflow-x-hidden"
      totalCount={googleFonts.length}
      itemContent={index => {
        const font = googleFonts[index]
        if (!loadedFonts.find(f => f === font)) {
          WebFont.load({
            google: {
              families: [font.family],
            },
          })
          loadedFonts.push(googleFonts[index])
        }
        return (
          <FontContainer>
            <FontTopRowContainer
              family={font.family}
              familyLength={font.variants.length}
            >
              <FavoriteButton font={font.family} />
            </FontTopRowContainer>
            <FontDisplay font={font} />
          </FontContainer>
        )
      }}
    />
  ) : (
    <Loading />
  )
}
export default GoogleFontViewer
