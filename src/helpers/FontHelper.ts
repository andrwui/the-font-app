import type { FontsRecord, TFont } from 'types/FontTypes'
import { type ChangeEvent } from 'react'
import { groupBy } from 'helpers/Helper'

// Formats the font families for css to pick them up correctly (almost) always.
export const formatFontName = (fontName: string): string => {
  return fontName.includes(' ') ? `"${fontName}"` : fontName
}
// The filter was too long so i just broke it up into an independent function.
export const getFontFilters = (
  e: ChangeEvent<HTMLInputElement>,
  families: TFont[],
): TFont[] => {
  return families.filter(family =>
    family.name.toLowerCase().includes(e.target.value.toLowerCase().trim()),
  )
}

// This converts what the groupBy function returns to the type of data i need the fonts to be.
const convertRecordToArray = (data: FontsRecord): TFont[] => {
  const result = []
  for (const key in data) {
    const fontObject = {
      name: key,
      variants: data[key],
    }
    result.push(fontObject)
  }
  return result
}

// This is all the functions combined, to get the local fonts in the way i feel is the most convenient.
export const getLocalFonts = async (): Promise<TFont[]> => {
  return convertRecordToArray(
    groupBy(await window.queryLocalFonts(), (f: any) => f.family),
  )
}
