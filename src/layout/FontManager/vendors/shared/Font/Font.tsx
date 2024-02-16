import { useRef, type ReactElement } from 'react'
import { useSizeStore } from 'stores/FontControlsStore'
import { type TFont } from 'types/FontTypes'
import FontDisplay from './FontDisplay/FontDisplay'
import FontName from './FontDisplay/FontName'
import { type ContextMenuOption } from 'components/ContextMenu'
import useContextMenu from 'hooks/useContextMenu'
import { FaMagnifyingGlass } from 'react-icons/fa6'
import Text from 'components/Text'
import { LuTrash2 } from 'react-icons/lu'

interface TFontProps {
  font: TFont
}

const Font = ({ font }: TFontProps): ReactElement => {
  const { size } = useSizeStore()
  const fontRef = useRef<HTMLDivElement>(null)
  // Returns a wrapper for the FontName and FontDisplay elements.

  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  const deleteFamily = async (font: TFont): Promise<void> => {
    window.ipcRenderer.invoke('deleteFamily', font.name).then(res => {
      console.log(res)
    })
  }

  const contextOptions: ContextMenuOption[] = [
    {
      text: (
        <Text
          size={13}
          weight="500"
        >
          Inspect family
        </Text>
      ),
      icon: <FaMagnifyingGlass className="size-[15px] " />,
      action: () => {
        console.log(`${font.name} inspected`)
      },
    },
    {
      text: (
        <Text
          danger
          size={13}
        >
          Delete family
        </Text>
      ),
      icon: <LuTrash2 className="size-[15px] text-red-500" />,
      action: () => {
        deleteFamily(font).then(() => console.log(`${font.name} deleted`))
      },
    },
  ]

  useContextMenu(fontRef, contextOptions, font.name)

  return (
    <div
      ref={fontRef}
      className="flex h-max w-full flex-col justify-center gap-2 px-8"
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
