import { type ReactElement } from 'react'
import { Virtuoso } from 'react-virtuoso'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import FontContainer from 'routes/app/routes/generics/Font/FontContainer'
import FontTopRowContainer from 'routes/app/routes/generics/Font/components/FontTopRowContainer'
import FavoriteButton from '../../../../generics/Font/components/FavoriteButton'
import FontDisplay from 'routes/app/routes/generics/Font/components/FontDisplay'
import GlyphButton from 'routes/app/routes/generics/Font/components/GlyphButton'
import CollectionsDropdown from '../../shared/CollectionsDropdown/CollectionsDropdown'
const FontList = (): ReactElement => {
  // Declare the stores
  const { localFonts: fonts, filteredLocalFonts: filteredFonts } = useLocalFontsStore()

  const fontsValues = Object.values(fonts)
  const filteredFontsValues = Object.values(filteredFonts)

  // Gets the window height with a custom hook for virtuoso's calculations

  return (
    // Using Virtuoso as virtualizer, because there can be too many fonts and
    // changing the preview controls's values would mess with the performance
    <Virtuoso
      className="h-full overflow-x-hidden"
      totalCount={filteredFontsValues.length || fontsValues.length}
      itemContent={index => {
        const font = filteredFontsValues[index] || fontsValues[index]
        return (
          // Returns a Font component for each font
          <FontContainer>
            <FontTopRowContainer
              family={font[0].family}
              familyLength={font.length}
            >
              <FavoriteButton font={font[0].family} />
              <CollectionsDropdown font={font} />
              <GlyphButton font={font} />
            </FontTopRowContainer>
            <FontDisplay font={font} />
          </FontContainer>
        )
      }}
    />
  )
}
export default FontList
