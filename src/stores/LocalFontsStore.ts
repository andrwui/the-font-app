import { create } from 'zustand'
import { type LocalFonts } from 'types/FontTypes'

// Types for the local fonts store
type LocalFontStore = {
  localFonts: LocalFonts
  setLocalFonts: (localFonts: LocalFonts) => void

  isLoading: boolean | null
  setIsLoading: (isLoading: boolean) => void

  filteredLocalFonts: LocalFonts
  setFilteredLocalFonts: (localFamilies: LocalFonts) => void
}

// Local fonts store
export const useLocalFontsStore = create<LocalFontStore>(set => ({
  localFonts: {} as LocalFonts,
  setLocalFonts: (localFonts: LocalFonts) => {
    set({ localFonts })
  },
  isLoading: null,
  setIsLoading: isLoading => {
    set({ isLoading })
  },
  filteredLocalFonts: {} as LocalFonts,
  setFilteredLocalFonts: (filteredLocalFonts: LocalFonts) => {
    set({ filteredLocalFonts })
  },
}))
