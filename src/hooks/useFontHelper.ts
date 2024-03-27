import { type Font, parse } from 'opentype.js'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'

const useFontHelper = (): {
  getFontFromFontName: (
    fontName: string,
    from: 'google' | 'local',
  ) => LocalFont | GoogleFont | undefined
  getLocalOpenTypeFont: (font: LocalFont) => Promise<Font | undefined>
  getGoogleOpenTypeFont: (font: GoogleFont) => Promise<Font | undefined>
} => {
  const { localFonts } = useLocalFontsStore()
  const { googleFonts } = useGoogleFontStore()

  const getFontFromFontName = (
    fontName: string,
    from: 'google' | 'local',
  ): LocalFont | GoogleFont | undefined => {
    let match
    if (from === 'local') {
      match = localFonts[fontName]
    }
    if (from === 'google') {
      match = googleFonts.find(i => {
        return i.family === fontName
      })
    }
    return match
  }

  const getLocalOpenTypeFont = async (font: LocalFont): Promise<Font | undefined> => {
    const fontBlob = await font[0].blob()
    const fontBuffer = await fontBlob.arrayBuffer()
    let fontFile
    try {
      fontFile = parse(fontBuffer)
    } catch {
      return undefined
    }
    return fontFile
  }

  const getGoogleOpenTypeFont = async (font: GoogleFont): Promise<Font | undefined> => {
    const url = Object.values(font.files)[0]
    console.log(url)
    const fontBuffer = fetch(url).then(async res => await res.arrayBuffer())
    console.log(await fontBuffer)
    console.log(url)
    let fontFile
    try {
      console.log('parseando')
      fontFile = parse(await fontBuffer)
      console.log('termino de parsear')
    } catch (e) {
      console.log(e)
      return undefined
    }
    console.log('devuelve')
    return fontFile
  }

  return { getFontFromFontName, getLocalOpenTypeFont, getGoogleOpenTypeFont }
}

export default useFontHelper
