import { useEffect } from 'react'
import {
  useItalicStore,
  useSizeStore,
  useSpacingStore,
  useTextAlignStore,
  useTextReplacerStore,
  useWeightStore,
} from 'stores/FontControlsStore'
import { useLocalFontsStore } from 'stores/LocalFontsStore'

const useDevTools = (): void => {
  const { weight } = useWeightStore()
  const { size } = useSizeStore()
  const { letterSpacing } = useSpacingStore()
  const { text } = useTextReplacerStore()
  const { italic } = useItalicStore()
  const { textAlign } = useTextAlignStore()
  const { filteredFonts, fonts, isLoading, filterValue } = useLocalFontsStore()

  useEffect(() => {
    console.warn('WARNING: This is a development build of The Font App')
    window.exposedStores = {
      fontControls: {
        weight,
        size,
        letterSpacing,
        text,
        italic,
        textAlign,
      },
      localFonts: {
        filteredFonts,
        fonts,
        isLoading,
        filterValue,
      },
    }
  }, [])
}
export default useDevTools
