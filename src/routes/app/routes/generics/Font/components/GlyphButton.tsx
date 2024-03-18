import Tooltip from 'components/Tooltip'
import { type LocalFont } from 'types/FontTypes'
import GlyphIcon from './glyphs.svg?react'
import { type ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
const GlyphButton = ({ font }: { font: LocalFont }): ReactElement => {
  const navigate = useNavigate()
  return (
    <Tooltip text="Font glyphs">
      <button
        onClick={() => navigate(`/app/glyphs?font=${font[0].family}`, { replace: false })}
      >
        <GlyphIcon className="*:fill-accent cursor-pointer size-4" />
      </button>
    </Tooltip>
  )
}

export default GlyphButton
