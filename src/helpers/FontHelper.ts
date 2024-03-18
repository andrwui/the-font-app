import type { GoogleFont, LocalFont, LocalFonts } from 'types/FontTypes'
import { type ChangeEvent } from 'react'

// The filter was too long so i just broke it up into an independent function.
export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  localFonts: LocalFonts,
): any => {
  const filteredRecord: Record<string, any> = {}

  for (const key in localFonts) {
    if (key.toLowerCase().includes(e.target.value.toLowerCase())) {
      filteredRecord[key] = localFonts[key]
    }
  }
  return filteredRecord
}

export const isLocalFont = (font: LocalFont | GoogleFont): font is LocalFont => {
  return Array.isArray(font)
}
