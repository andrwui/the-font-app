import { useEffect, type ReactElement, useState } from 'react'
import { type Font, parse } from 'opentype.js'

const Tests = (): ReactElement => {
  const [fontData, setFontData] = useState<{
    font: Font
    glyphs: number
    fontName: string
  }>()

  useEffect(() => {
    const getFontData = async (): Promise<{
      font: Font
      glyphs: number
      fontName: string
    }> => {
      const index = 187
      const fonts = await window.queryLocalFonts()
      const fontBlob: Blob = await fonts[index].blob()
      const fontBuffer = await fontBlob.arrayBuffer()
      const font = parse(fontBuffer)

      return { font, glyphs: font.numGlyphs, fontName: fonts[index].family }
    }

    getFontData().then(setFontData)
  }, [])

  return (
    <div className="flex flex-col gap-5 w-full">
      <h1 className="text-6xl font-extrabold">{fontData?.fontName}</h1>
      <div className="grid size-full grid-cols-5">
        {Array.from({ length: fontData?.glyphs || 0 }, (_, i) => (
          <div
            className="w-30 flex"
            key={i}
            style={{ fontFamily: fontData?.fontName }}
          >
            <div>{fontData?.font.glyphIndexToName(i)}</div> ={' '}
            <div>{String.fromCharCode(i)}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Tests
