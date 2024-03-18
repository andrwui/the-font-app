import { type Font, parse } from 'opentype.js'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { type LocalFont } from 'types/FontTypes'

const useFontHelper = (): {
  getFontFromFontName: (
    fontName: string,
    from: 'google' | 'local',
  ) => LocalFont | undefined
  getOpenTypeFont: (fontBlob: Blob) => Promise<Font | undefined>
} => {
  const { fonts } = useLocalFontsStore()

  const getFontFromFontName = (
    fontName: string,
    from: 'google' | 'local',
  ): LocalFont | undefined => {
    let match
    if (from === 'local') {
      console.log('fontName: ', fontName)
      console.log('localFonts: ', fonts)
      match = fonts[fontName]
      console.log('match: ', match)
    }
    return match
  }

  const getOpenTypeFont = async (fontBlob: Blob): Promise<Font | undefined> => {
    const fontBuffer = await fontBlob.arrayBuffer()
    let fontFile
    try {
      fontFile = parse(fontBuffer)
    } catch {
      return undefined
    }
    return fontFile
  }

  return { getFontFromFontName, getOpenTypeFont }
}

export default useFontHelper
