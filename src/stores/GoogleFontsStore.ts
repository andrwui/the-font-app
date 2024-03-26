import { create } from 'zustand'
import { type GFItems } from 'types/FontTypes'

// Types for the local fonts store
type GoogleFontStore = {
  googleFonts: GFItems
  setGoogleFonts: (googleFonts: GFItems) => void

  filteredGoogleFonts: GFItems
  setFilteredGoogleFonts: (googleFonts: GFItems) => void
}

// Local fonts store
export const useGoogleFontStore = create<GoogleFontStore>(set => ({
  googleFonts: [] as GFItems,
  setGoogleFonts: (googleFonts: GFItems) => {
    set({ googleFonts })
  },
  filteredGoogleFonts: [] as GFItems,
  setFilteredGoogleFonts: (filteredFonts: GFItems) => {
    set({ filteredGoogleFonts: filteredFonts })
  },
}))
