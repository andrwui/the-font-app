import { useEffect, useState } from 'react'
import { getSystemFonts } from '../helpers/systemFontsHelper'
import { Font } from 'opentype.js'
import { parseBufferToOpentype } from '../helpers/opentypeHelper'

export const useLoadFonts = (): { isLoading: boolean; fonts: Font[] } => {
  const [fonts, setFonts] = useState<Font[]>([])
  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    setIsLoading(true)
    getSystemFonts().then(buffers => {
      const fontPromises = buffers.map(buffer => parseBufferToOpentype(buffer))
      Promise.all(fontPromises).then(parsedFonts => {
        setFonts(parsedFonts.filter((font): font is Font => font !== null))
        setIsLoading(false)
      })
    })
  }, [])

  return { isLoading, fonts }
}
