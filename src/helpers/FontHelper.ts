import type { TLocalFonts } from 'types/FontTypes'
import { type ChangeEvent } from 'react'

// Formats the font families for css to pick them up correctly (almost) always.
export const formatFontName = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}
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
