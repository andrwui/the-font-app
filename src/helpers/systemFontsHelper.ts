export const getSystemFonts = async (): Promise<ArrayBuffer[]> => {
  const localFonts = await window.queryLocalFonts()

  const buffers = await Promise.all(localFonts.map(async font => (await font.blob()).arrayBuffer()))

  return buffers
}
