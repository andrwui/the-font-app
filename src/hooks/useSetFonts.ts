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
        window.queryLocalFonts().then((families): void => {
          console.log('NOT grouped local font families: ', families)
          // @ts-expect-error: Object.groupBy is not defined in Object in this ts version
          const grouped = Object.groupBy(families, ({ family }) => family)
          setFonts(grouped)
          console.log('Grouped local font families: ', fonts)
          setIsLoading(false)
        })
      }
    }
  }, [setFonts, setIsLoading, supported])
}

export default useSetLocalFonts
