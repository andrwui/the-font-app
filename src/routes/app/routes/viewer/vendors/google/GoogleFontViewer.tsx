import { type ReactElement, useState } from 'react'
import Loading from '../../../generics/Loading'
import { Virtuoso } from 'react-virtuoso'
import { type GFItems } from 'types/FontTypes'
import GoogleFontDisplay from './GoogleFontDisplay'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
const GoogleFontViewer = (): ReactElement => {
  const { googleFonts, filteredGoogleFonts } = useGoogleFontStore()
  const [loadedFonts, setLoadedFonts] = useState<GFItems>([])

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
