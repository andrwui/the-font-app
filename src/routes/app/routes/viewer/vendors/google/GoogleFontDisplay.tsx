import {
  useEffect,
  type Dispatch,
  type ReactElement,
  type SetStateAction,
  useState,
} from 'react'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FavoriteButton from 'routes/app/routes/generics/Font/components/FavoriteButton'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
import { type GFItems, type GoogleFont } from 'types/FontTypes'
import WebFont from 'webfontloader'
import CollectionsDropdown from '../shared/CollectionsDropdown/CollectionsDropdown'
import Pill from 'components/Pill'
import DownloadButton from 'routes/app/routes/generics/Font/components/DownloadButton'

const GoogleFontDisplay = ({
  font,
  setLoadedFonts,
  loadedFonts,
  fromPill,
}: {
  font: GoogleFont
  setLoadedFonts?: Dispatch<SetStateAction<GFItems>>
  loadedFonts?: GFItems
  fromPill?: boolean
}): ReactElement => {
  const [loading, setLoading] = useState<boolean>()
  if (loadedFonts && setLoadedFonts) {
    useEffect(() => {
      if (!loadedFonts.find(f => f === font)) {
        WebFont.load({
          google: {
            families: [font.family],
          },
          loading: () => {
            setLoading(true)
          },
          fontactive: () => {
            setLoading(false)
          },
        })
        setLoadedFonts([...loadedFonts, font])
      }
    }, [font])
  }

  return (
    <FontContainer>
      <FontTopRowContainer
        family={font.family}
        familyLength={font.variants.length}
      >
        <FavoriteButton font={font.family} />
        <CollectionsDropdown font={font} />
        <DownloadButton font={font} />
        {fromPill && <Pill>Google</Pill>}
      </FontTopRowContainer>
      {
        <FontDisplay
          font={font}
          isLoading={loading}
        />
      }
    </FontContainer>
  )
}

export default GoogleFontDisplay
