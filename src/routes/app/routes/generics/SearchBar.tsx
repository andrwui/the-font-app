import { getGoogleFontFilters, getLocalFontFilters } from 'helpers/FontHelper'
import { useState, type ChangeEvent, type ReactElement, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useFontFilterStore } from 'stores/FontControlsStore'
import { useGoogleFontStore } from 'stores/GoogleFontsStore'
import { useLocalFontsStore } from 'stores/LocalFontsStore'

const SearchBar = (): ReactElement | null => {
  const { filterValue, setFilterValue } = useFontFilterStore()
  const { googleFonts, setFilteredGoogleFonts } = useGoogleFontStore()
  const { localFonts, setFilteredLocalFonts } = useLocalFontsStore()
  const [isVisible, setIsVisible] = useState<boolean>()

  const location = useLocation().pathname
  useEffect(() => {
    setIsVisible(
      location.split('/')[2] === 'font-viewer' ||
        location.split('/')[2] === 'collections',
    )
  }, [location])

  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)
    setFilteredGoogleFonts(getGoogleFontFilters(e, googleFonts))
    setFilteredLocalFonts(getLocalFontFilters(e, localFonts))
  }

  return isVisible ? (
    <input
      id="SearchBar"
      type="text"
      onChange={filterFonts}
      name="Search Bar"
      placeholder="Search fonts..."
      value={filterValue}
      className="absolute left-1/2 top-3 z-50 h-[40px] w-1/3 -translate-x-1/2 rounded-md bg-dark text-center text-sm text-regular placeholder-regular"
    />
  ) : null
}

export default SearchBar
