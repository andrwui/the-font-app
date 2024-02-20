import Text from 'components/Text'
import { useState, type ReactElement } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { allLatinChars } from './components/allLatinChars'

const GlyphViewer = (): ReactElement => {
  const font = decodeURIComponent(useLocation().search.split('=')[1])

  const [currentGlyph, setCurrentGlyph] = useState<string>('A')

  const handleMouseOver = (char: string): void => {
    setCurrentGlyph(char)
  }

  return (
    <div className="grid size-full grid-cols-2">
      <div
        className="grid size-full place-items-center text-[25em]"
        style={{
          fontFamily: font,
        }}
      >
        {currentGlyph}
      </div>
      <div className="grid size-full grid-cols-6 gap-5 overflow-scroll p-5">
        {allLatinChars.map((char: string, key: number) => {
          return (
            <div
              key={key}
              onMouseOver={() => handleMouseOver(char)}
              className="grid aspect-square w-full place-items-center rounded-md border-2 border-secondary-dark text-5xl"
              style={{
                fontFamily: font,
              }}
            >
              {char}
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default GlyphViewer
