import { type ReactElement, type ChangeEvent, useState, useRef, useEffect } from 'react'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { getFontFilters } from 'helpers/FontHelper'
import { AnimatePresence, motion } from 'framer-motion'
import Button from 'components/Button'
import { IoSearch } from 'react-icons/io5'
import Text from 'components/Text'
const SearchButton = (): ReactElement => {
  const { fonts, setFilteredFonts, filterValue, setFilterValue } = useLocalFontsStore()

  const [isVisible, setIsVisible] = useState(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const filterFonts = (e: ChangeEvent<HTMLInputElement>): void => {
    setFilterValue(e.target.value)
    setFilteredFonts(getFontFilters(e, fonts))
  }

  const handleKeydown = (e: KeyboardEvent): void => {
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault()
      showSearchbar()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeydown)
    return () => window.removeEventListener('keydown', handleKeydown)
  }, [])

  const showSearchbar = (): void => {
    setIsVisible(true)
    setTimeout(() => {
      inputRef.current?.focus()
    }, 0)
  }

  const handleBlur = (): void => {
    setIsVisible(false)
  }

  return (
    <>
      <AnimatePresence>
        {isVisible && (
          <motion.input
            initial={{
              y: -20,
              x: '-50%',
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              y: 100,
              x: '-50%',
            }}
            exit={{
              opacity: 0,
              y: -20,
              x: '-50%',
            }}
            ref={inputRef}
            id="SearchBar"
            type="text"
            onChange={filterFonts}
            onBlur={handleBlur}
            name="Search Bar"
            placeholder="Search fonts..."
            value={filterValue}
            className="absolute left-1/2 top-2 z-50 h-[50px] w-1/3 -translate-x-1/2 rounded-md bg-dark text-center text-sm text-regular placeholder-regular"
          />
        )}
      </AnimatePresence>

      <Button
        animated
        onClick={showSearchbar}
        className="w-[120px] flex items-center justify-center gap-1"
      >
        <IoSearch />
        <Text
          size={16}
          weight={'600'}
        >
          Search
        </Text>
      </Button>
    </>
  )
}

export default SearchButton
