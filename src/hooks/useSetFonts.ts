import { getLocalFonts } from 'helpers/FontHelper'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { useEffect } from 'react'

// Hook that sets the fonts on the store.
// Controls the loading screen too
const useSetLocalFonts = (supported: boolean, hasAccepted: boolean): void => {
  const fonts = useLocalFontsStore(state => state.fonts)
  const setFonts = useLocalFontsStore(state => state.setFonts)
  const setIsLoading = useLocalFontsStore(state => state.setIsLoading)

  useEffect(() => {
    if (supported && hasAccepted) {
      if (!fonts.length) {
        setIsLoading(true)
        getLocalFonts().then((families): void => {
          window.DEV_ENV &&
            console.log('Local font families: ', { families: { ...families } })
          setFonts(families)
          setIsLoading(false)
        })
      }
    }
  }, [fonts, setFonts, setIsLoading, supported])
}

export default useSetLocalFonts
