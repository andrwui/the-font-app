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

  // TODO: Figure out design, currently is ugly
  // TODO: Add italic switch
  // TODO: Refactor into components

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
      <div className="grid size-full grid-cols-7 overflow-scroll">
        {allLatinChars.map((char: string, key: number) => {
          return (
            <div
              key={key}
              onMouseOver={() => handleMouseOver(char)}
              className="grid aspect-square w-full place-items-center border border-secondary-mid text-5xl transition-colors duration-150 hover:bg-foreground hover:text-background"
            >
              {
                <Text
                  style={{
                    fontFamily: font,
                  }}
                >
                  {char}
                </Text>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default GlyphViewer
