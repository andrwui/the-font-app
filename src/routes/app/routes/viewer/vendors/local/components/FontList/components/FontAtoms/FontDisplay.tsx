import { type ReactElement } from 'react'
import {
  useSizeStore,
  useTextReplacerStore,
  useWeightStore,
  useItalicStore,
  useSpacingStore,
  useTextAlignStore,
} from 'stores/FontControlsStore'

import type { TFont } from 'types/FontTypes'
import { useColorStore } from 'stores/ColorsStore'

type FontDisplayProps = {
  font: TFont
}

const FontDisplay = ({ font }: FontDisplayProps): ReactElement => {
  // Declare the stores

  const { color } = useColorStore()
  const { text } = useTextReplacerStore()
  const { size } = useSizeStore()
  const { weight } = useWeightStore()
  const { letterSpacing } = useSpacingStore()
  const { italic } = useItalicStore()
  const { textAlign } = useTextAlignStore()

  const curFont = font[0]

  // Returns an element with the font to be showed.
  // It has inline styles to both show the actual font
  // and to being able to control the elements size,
  // so virtuoso is capable of doing its calculations.

  // It also can show either the current font name or the replace
  // text the user will be able to input in the bottom bar.

  // Its style is applied based on what are the current values of the stores.
  // See FontControls for info about how these values are managed.

  return (
    <div
      className="flex items-center gap-1 text-nowrap"
      style={{
        fontSize: `${size}px` || '1em',
        fontWeight: weight,
        fontStyle: italic,
        lineHeight: `${size * 0.98}px`,
        letterSpacing: `${letterSpacing}px`,
        textAlign: `${textAlign}`,
        color: color ? color : '',
      }}
    >
      <p
        style={{
          fontFamily: `${curFont.family}`,
          width: '100%',
          paddingRight: italic ? '.1em' : '',
        }}
      >
        {`${text || curFont.family}`}
      </p>
    </div>
  )
}
export default FontDisplay
