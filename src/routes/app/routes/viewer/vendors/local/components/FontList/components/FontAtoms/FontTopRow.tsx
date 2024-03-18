import { useTextAlignStore } from 'stores/FontControlsStore'
import type { LocalFont } from 'types/FontTypes'
import { type ReactElement } from 'react'
import Text from 'components/Text'
import FavoriteButton from '../../../../../../../generics/Font/components/FavoriteButton'
import CollectionsDropdown from '../../../../../shared/CollectionsDropdown/CollectionsDropdown'
import GlyphButton from '../../../../../../../generics/Font/components/GlyphButton'

type FontTopRowProps = {
  font: LocalFont
}
const FontTopRow = ({ font }: FontTopRowProps): ReactElement => {
  const { textAlign } = useTextAlignStore()

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

  const curFont = font[0]
  const family = curFont.family
  const familyLength = font.length

  return (
    <div
      className="flex items-center  gap-4 font-light text-secondary-light"
      style={{ justifyContent: textAlign }}
    >
      <div className="flex items-center gap-1 font-light text-secondary-light">
        <Text
          weight="300"
          size={13}
        >
          {family}
        </Text>
        <Text
          weight="200"
          size={13}
          className="opacity-35"
        >
          {familyLength}
        </Text>
      </div>
      <FavoriteButton font={family} />
      <CollectionsDropdown font={font} />
      <GlyphButton font={font} />
    </div>
  )
}
export default FontTopRow
