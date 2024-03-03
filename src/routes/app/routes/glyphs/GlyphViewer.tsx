import Text from 'components/Text'
import { useState, type ReactElement } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { allLatinChars } from './helpers/allLatinChars'

const GlyphViewer = (): ReactElement => {
  const font = decodeURIComponent(useLocation().search.split('=')[1])
  const latinChars = allLatinChars()

  const [currentGlyph, setCurrentGlyph] = useState<string>(latinChars[0])
  const navigate = useNavigate()

  const handleMouseOver = (char: string): void => {
    setCurrentGlyph(char)
  }

  // TODO: Figure out design, currently is ugly
  // TODO: Add italic switch
  // TODO: Refactor into components

  return (
    <div className="grid size-full grid-cols-2">
      <div
        className="relative grid size-full place-items-center text-[25em]"
        style={{
          fontFamily: font,
        }}
      >
        {currentGlyph}
        <span
          onClick={() => {
            navigate(`/app`, { replace: true })
          }}
          className="absolute top-0 left-0 rounded-full bg-dark h-8 aspect-square text-lg font-bold grid place-items-center cursor-pointer"
        >
          X
        </span>
      </div>
      <div className="grid size-full grid-cols-7 overflow-scroll">
        {latinChars.map((char: string, key: number) => {
          return (
            <div
              key={key}
              onMouseOver={() => handleMouseOver(char)}
              className="relative grid aspect-square w-full place-items-center border border-dark text-5xl transition-colors duration-150 hover:bg-accent hover:text-background"
            >
              {
                <>
                  <Text
                    style={{
                      fontFamily: font,
                    }}
                  >
                    {char}
                  </Text>
                  <Text className="text-xs absolute top-2 left-2 text-light font-bold">
                    {`#${char.charCodeAt(0)}`}
                  </Text>
                </>
              }
            </div>
          )
        })}
      </div>
    </div>
  )
}
export default GlyphViewer
