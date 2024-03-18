// Type for the record of grouped fonts.
// It's used on the parameter of the convertRecordToArray function.
export type FontData = {
  family: string
  fullName: string
  postscriptName: string
  style: string
  blob: () => Promise<Blob>
}
// Type for a singular local font
export type LocalFont = FontData[]

export type LocalFonts = Record<string, LocalFont>

export type GFResponse = {
  kind: string
  items: GFItems
}

export type GFItems = GoogleFont[]

export type GoogleFont = {
  family: string
  variants: string[]
  subsets: string[]
  version: string
  lastModified: string
  files: Record<string, string>
  category: string
  kind: string
  menu: string
}
