import { useEffect } from 'react'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
import { type GFResponse } from 'types/FontTypes'

const useLoadGoogleFonts = (): void => {
  const API_KEY = 'AIzaSyAffANcQBH_Ld8PS7W_ai2iQTHSSiN320c' as const
  const { setGoogleFonts } = useGoogleFontStore()

  useEffect(() => {
    fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
      .then(async f => await f.json())
      .then((data: GFResponse) => {
        setGoogleFonts(data.items)
      })
  }, [])
}

export default useLoadGoogleFonts
