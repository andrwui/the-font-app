import { type ReactElement, useEffect, useState } from 'react'
import Loading from '../../../generics/Loading'
import { Virtuoso } from 'react-virtuoso'
import { type GFItems, type GFResponse } from 'types/FontTypes'
import GoogleFontDisplay from './GoogleFontDisplay'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
const GoogleFontViewer = (): ReactElement => {
  const { googleFonts, setGoogleFonts, filteredGoogleFonts } = useGoogleFontStore()
  const [loadedFonts, setLoadedFonts] = useState<GFItems>([])

  const API_KEY = 'AIzaSyAffANcQBH_Ld8PS7W_ai2iQTHSSiN320c' as const

  useEffect(() => {
    fetch(
      `https://www.googleapis.com/webfonts/v1/webfonts?capability=WOFF2&key=${API_KEY}`,
    )
      .then(async f => await f.json())
      .then((data: GFResponse) => {
        setGoogleFonts(data.items)
        console.log(data)
      })

    return () => {
      setLoadedFonts([])
    }
  }, [])

  return googleFonts ? (
    <Virtuoso
      className="h-full overflow-x-hidden"
      totalCount={filteredGoogleFonts.length || googleFonts.length}
      itemContent={index => {
        const font = filteredGoogleFonts[index] || googleFonts[index]
        return (
          <GoogleFontDisplay
            font={font}
            setLoadedFonts={setLoadedFonts}
            loadedFonts={loadedFonts}
          />
        )
      }}
    />
  ) : (
    <Loading />
  )
}
export default GoogleFontViewer
