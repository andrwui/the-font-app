// Type for the record of grouped fonts.
// It's used on the parameter of the convertRecordToArray function.
export type FontsRecord = Record<
  string,
  Array<{
    family: string
    fullName: string
    postscriptName?: string
    style: string
    path?: string
    type?: string
    weight?: number
  }>
>
// Type for a singular local font
export interface TFont {
  font: any
  name: string
  variants: Array<{
    family: string
    fullName: string
    postscriptName?: string
    style: string
    path?: string
    type?: string
    weight?: number
  }>
}
