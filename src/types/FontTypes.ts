// Type for the record of grouped fonts.
// It's used on the parameter of the convertRecordToArray function.
export type FontData = {
  family: string
  fullName: string
  postscriptName: string
  style: string
}
// Type for a singular local font
export type TFont = FontData[]

export type TLocalFonts = Record<string, TFont>
