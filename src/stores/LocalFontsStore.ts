import { create } from 'zustand'
import { type TFont } from 'types/FontTypes'

// Types for the local fonts store
interface LocalFontStore {
  fonts: TFont[]
  setFonts: (localFonts: TFont[]) => void

  isLoading: boolean | null
  setIsLoading: (isLoading: boolean) => void

  filteredFonts: TFont[]
  setFilteredFonts: (localFamilies: TFont[]) => void

  filterValue: string
  setFilterValue: (filterValue: string) => void
}

// Local fonts store
export const useLocalFontsStore = create<LocalFontStore>(set => ({
  fonts: [] as TFont[],
  setFonts: (fonts: TFont[]) => {
    set({ fonts })
  },
  isLoading: null,
  setIsLoading: isLoading => {
    set({ isLoading })
  },
  filteredFonts: [] as TFont[],
  setFilteredFonts: (filteredFonts: TFont[]) => {
    set({ filteredFonts })
  },
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
