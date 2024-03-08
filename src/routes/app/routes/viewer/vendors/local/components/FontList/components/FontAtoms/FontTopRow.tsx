import { useTextAlignStore } from 'stores/FontControlsStore'
import type { TFont } from 'types/FontTypes'
import { type ReactElement } from 'react'
import Text from 'components/Text'
import FavoriteButton from './FavoriteButton'
import CollectionsDropdown from 'routes/app/routes/viewer/vendors/shared/CollectionsDropdown/CollectionsDropdown'
type FontTopRowProps = {
  font: TFont
}
const FontTopRow = ({ font }: FontTopRowProps): ReactElement => {
  const { textAlign } = useTextAlignStore()

  // Returns a simple text with the name of the current font, in case the user
  // replaced the text of the font displayers.

  // It also contains the copy button for copying the name of the font to the clipboard.

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
          {font.name}
        </Text>
        <Text
          weight="200"
          size={13}
          className="opacity-35"
        >
          {`(${font.variants.length})`}
        </Text>
      </div>
      <FavoriteButton font={font.name} />
      <CollectionsDropdown />
    </div>
  )
}
export default FontTopRow
