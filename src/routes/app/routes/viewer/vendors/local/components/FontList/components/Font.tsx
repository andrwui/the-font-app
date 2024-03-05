import { useRef, type ReactElement } from 'react'
import { useSizeStore } from 'stores/FontControlsStore'
import { type TFont } from 'types/FontTypes'
import FontDisplay from './FontAtoms/FontDisplay'
import FontName from './FontAtoms/FontName'
import { type ContextMenuOption } from 'components/ContextMenu/ContextMenu'
import useContextMenu from 'hooks/useContextMenu'
import Text from 'components/Text'
import { FaStar } from 'react-icons/fa'
import useFavorites from 'hooks/useFavorites'
import { useNavigate } from 'react-router-dom'

interface TFontProps {
  font: TFont
}

const Font = ({ font }: TFontProps): ReactElement => {
  const navigate = useNavigate()
  const { size } = useSizeStore()
  const { isFavorite, toggleFavorite } = useFavorites(font.name)
  const fontRef = useRef<HTMLDivElement>(null)

  // Returns a wrapper for the FontName and FontDisplay elements.

  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  const contextOptions: ContextMenuOption[] = [
    {
      text: (
        <Text
          size={13}
          weight="500"
        >
          {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        </Text>
      ),
      icon: <FaStar className="size-[15px] " />,
      action: () => {
        toggleFavorite()
      },
    },
    {
      text: (
        <Text
          size={13}
          weight="500"
        >
          Test font Glyphs
        </Text>
      ),
      icon: (
        <Text
          size={13}
          weight="800"
        >
          Aa
        </Text>
      ),
      action: () => {
        navigate(`/app/glyphs?font=${font.name}`, { replace: true })
      },
    },
  ]

  useContextMenu(fontRef, contextOptions, font.name)

  return (
    <div
      ref={fontRef}
      className="flex h-max w-full flex-col justify-center gap-2"
      style={{
        paddingBottom: `${size * 0.5}px`,
      }}
    >
      <FontName font={font} />
      <FontDisplay font={font} />
    </div>
  )
}
export default Font
