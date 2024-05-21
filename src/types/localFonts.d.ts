type FontData = {
  postscriptName: string
  family: string
  fullName: string
  style: string
  blob: () => Promise<Blob>
}

interface Window {
  queryLocalFonts: () => Promise<FontData[]>
}
