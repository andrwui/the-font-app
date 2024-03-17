import type { TLocalFonts } from 'types/FontTypes'
import { type ChangeEvent } from 'react'

// The filter was too long so i just broke it up into an independent function.
export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  localFonts: TLocalFonts,
): any => {
  const filteredRecord: Record<string, any> = {}

  for (const key in localFonts) {
    if (key.toLowerCase().includes(e.target.value.toLowerCase())) {
      filteredRecord[key] = localFonts[key]
    }
  }
  return filteredRecord
}

export const getFontByFontName = (fontName: string, from: string) => {}
