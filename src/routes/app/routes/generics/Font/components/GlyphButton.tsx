import Tooltip from 'components/Tooltip'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'
import GlyphIcon from './glyphs.svg?react'
import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import { isLocalFont } from 'helpers/FontHelper'
const GlyphButton = ({ font }: { font: LocalFont | GoogleFont }): ReactElement => {
  const navigate = useNavigate()
  const from = isLocalFont(font) ? 'local' : 'google'
  const fontName = isLocalFont(font) ? font[0].family : font.family
  return (
    <Tooltip text="Font glyphs">
      <button
        onClick={() =>
          navigate(`/app/glyphs?font=${fontName}&from=${from}`, { replace: false })
        }
      >
        <GlyphIcon className="*:fill-accent cursor-pointer size-4" />
      </button>
    </Tooltip>
  )
}

export default GlyphButton
