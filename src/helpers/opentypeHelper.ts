import { Font, parse } from 'opentype.js'

export const parseBufferToOpentype = (buffer: ArrayBuffer): Promise<Font | null> => {
  return new Promise(resolve => {
    try {
      const parsed = parse(buffer)
      resolve(parsed)
    } catch (error) {
      console.error(error)
      resolve(null)
    }
  })
}
