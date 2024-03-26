import type {
  FontData,
  GFItems,
  GoogleFont,
  LocalFont,
  LocalFonts,
} from 'types/FontTypes'
import { type ChangeEvent } from 'react'

// The filter was too long so i just broke it up into an independent function.
export const getLocalFontFilters = (
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

export const getGoogleFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  googleFonts: GFItems,
): GFItems => {
  return googleFonts.filter(gf =>
    gf.family.toLowerCase().includes(e.target.value.toLowerCase()),
  )
}

export const isLocalFont = (font: LocalFont | GoogleFont): font is LocalFont => {
  return Array.isArray(font)
}

export const getFontWithType = (font: LocalFont | GoogleFont): LocalFont | GoogleFont => {
  let curFont: FontData | GoogleFont
  if (isLocalFont(font)) {
    curFont = font[0]
    return curFont
  } else {
    curFont = font
    return curFont
  }
}
