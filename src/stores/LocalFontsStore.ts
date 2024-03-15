import { create } from 'zustand'
import { type TLocalFonts } from 'types/FontTypes'

// Types for the local fonts store
type LocalFontStore = {
  fonts: TLocalFonts
  setFonts: (localFonts: TLocalFonts) => void

  isLoading: boolean | null
  setIsLoading: (isLoading: boolean) => void

  filteredFonts: TLocalFonts
  setFilteredFonts: (localFamilies: TLocalFonts) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

// Local fonts store
export const useLocalFontsStore = create<LocalFontStore>(set => ({
  fonts: {} as TLocalFonts,
  setFonts: (fonts: TLocalFonts) => {
    set({ fonts })
  },
  isLoading: null,
  setIsLoading: isLoading => {
    set({ isLoading })
  },
  filteredFonts: {} as TLocalFonts,
  setFilteredFonts: (filteredFonts: TLocalFonts) => {
    set({ filteredFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
