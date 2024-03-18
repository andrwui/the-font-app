import { create } from 'zustand'
import { type LocalFonts } from 'types/FontTypes'

// Types for the local fonts store
type LocalFontStore = {
  fonts: LocalFonts
  setFonts: (localFonts: LocalFonts) => void

  isLoading: boolean | null
  setIsLoading: (isLoading: boolean) => void

  filteredFonts: LocalFonts
  setFilteredFonts: (localFamilies: LocalFonts) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

// Local fonts store
export const useLocalFontsStore = create<LocalFontStore>(set => ({
  fonts: {} as LocalFonts,
  setFonts: (fonts: LocalFonts) => {
    set({ fonts })
  },
  isLoading: null,
  setIsLoading: isLoading => {
    set({ isLoading })
  },
  filteredFonts: {} as LocalFonts,
  setFilteredFonts: (filteredFonts: LocalFonts) => {
    set({ filteredFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
