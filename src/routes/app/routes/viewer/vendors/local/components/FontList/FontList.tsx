import { type ReactElement } from 'react'
import { Virtuoso } from 'react-virtuoso'
import Font from './components/Font'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
const FontList = (): ReactElement => {
  // Declare the stores
  const { fonts, filteredFonts } = useLocalFontsStore()

  const fontsValues = Object.values(fonts)
  const filteredFontsValues = Object.values(filteredFonts)

  // Gets the window height with a custom hook for virtuoso's calculations

  return (
    // Using Virtuoso as virtualizer, because there can be too many fonts and
    // changing the preview controls's values would mess with the performance
    <Virtuoso
      className="h-full overflow-x-hidden"
      totalCount={filteredFontsValues.length || fontsValues.length}
      itemContent={index => (
        // Returns a Font component for each font
        <Font font={filteredFontsValues[index] || fontsValues[index]} />
      )}
    />
  )
}
export default FontList
