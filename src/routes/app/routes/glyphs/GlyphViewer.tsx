import Text from 'components/Text'
import { useState, type ReactElement, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type Font } from 'opentype.js'
import useFontHelper from 'hooks/useFontHelper'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'
import { toValidSVG } from 'helpers/SVGHelper'
import Loading from '../generics/Loading'

import { FaArrowLeft } from 'react-icons/fa6'
import FontControls from '../viewer/components/FontControls/FontControls'
import { isLocalFont } from 'helpers/FontHelper'

const GlyphViewer = (): ReactElement => {
  const { getFontFromFontName, getLocalOpenTypeFont, getGoogleOpenTypeFont } =
    useFontHelper()

  const navigate = useNavigate()

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [font, setFont] = useState<LocalFont | GoogleFont>()
  const [otFont, setOtFont] = useState<Font>()
  const [currentGlyph, setCurrentGlyph] = useState<string>('A')

  const params = useLocation().search.split('&')
  const fontName = decodeURIComponent(params[0].split('=')[1])
  const from = decodeURIComponent(params[1].split('=')[1]) as 'google' | 'local'

  useEffect(() => {
    setFont(getFontFromFontName(fontName, from))
  }, [])

  useEffect(() => {
    setIsLoading(true)
    if (font && isLocalFont(font)) {
      getLocalOpenTypeFont(font).then(f => {
        setIsLoading(false)
        setOtFont(f)
      })
    } else if (font && !isLocalFont(font)) {
      getGoogleOpenTypeFont(font).then(f => {
        setIsLoading(false)
        setOtFont(f)
      })
    } else {
      setIsLoading(false)
    }
  }, [font])

  const handleMouseOver = (char: string): void => {
    setCurrentGlyph(char)
  }

  return !isLoading ? (
    <div className="flex flex-col w-full">
      <FontControls />
      <div className="grid size-full grid-cols-2 h-full overflow-y-auto">
        <div
          className="relative grid size-full place-items-center text-[25em]"
          style={{
            fontFamily: fontName,
          }}
        >
          {currentGlyph}
          <span
            onClick={() => {
              navigate(`/app`, { replace: true })
            }}
            className="absolute top-0 left-0 rounded-full bg-dark h-8 aspect-square text-lg font-bold grid place-items-center cursor-pointer"
          >
            <FaArrowLeft />
          </span>
        </div>
        <div className="grid size-full grid-cols-7 overflow-scroll">
          {Array.from({ length: otFont?.glyphs.length || 0 }).map((_, i) => {
            const glyph = otFont?.glyphs.get(i)
            return glyph?.unicode &&
              String.fromCharCode(glyph?.unicode).trim() !== '' &&
              String.fromCharCode(glyph?.unicode).trim() !== '­' ? (
              <div
                key={i}
                // @ts-expect-error: I don't know why it doesn't get that neither glyph or glyph.unicode are undefined
                onMouseOver={() => handleMouseOver(String.fromCharCode(glyph?.unicode))}
                className="relative grid aspect-square w-full place-items-center border border-dark text-5xl transition-colors duration-150 hover:bg-accent hover:text-background"
              >
                {
                  <>
                    <Text
                      onClick={async () => {
                        await navigator.clipboard.writeText(
                          toValidSVG(glyph.getPath().toSVG(5)),
                        )
                        console.log('copiado bobo')
                      }}
                      style={{
                        fontFamily: fontName,
                      }}
                    >
                      {String.fromCharCode(glyph?.unicode)}
                    </Text>
                    <Text className="text-xs absolute top-2 left-2 text-light font-bold">
                      {`#${i}`}
                    </Text>
                  </>
                }
              </div>
            ) : (
              ''
            )
          })}
        </div>
      </div>
    </div>
  ) : (
    <Loading />
  )
}
export default GlyphViewer
