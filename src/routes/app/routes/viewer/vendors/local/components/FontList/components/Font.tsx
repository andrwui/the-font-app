import { useRef, type ReactElement } from 'react'
import { useSizeStore } from 'stores/FontControlsStore'
import { type TFont } from 'types/FontTypes'
import FontDisplay from './FontAtoms/FontDisplay'
import FontTopRow from './FontAtoms/FontTopRow'

type TFontProps = {
  font: TFont
}

const Font = ({ font }: TFontProps): ReactElement => {
  const { size } = useSizeStore()
  const fontRef = useRef<HTMLDivElement>(null)

  // Returns a wrapper for the FontName and FontDisplay elements.
  // Uses the stored size of the fonts to calculate its height, this was done for spacing purposes.
  // As (at my knowledge) Virtuoso cannot measure correctly the height of the elements if they
  // have margins or gaps, the height of the font wrapper is increased in order to make some calculable space between fonts.

  return (
    <div
      ref={fontRef}
      className="flex h-max w-full flex-col justify-center gap-2"
      style={{
        paddingBottom: `${size * 0.5}px`,
      }}
    >
      <FontTopRow font={font} />
      <FontDisplay font={font} />
    </div>
  )
}
export default Font
