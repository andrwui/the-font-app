import { type Theme } from 'theme-ui'
import { type Font } from './types/FontTypes'
import { type TextAlignTypes, type ItalicTypes } from './stores/FontControlsStore'
import 'react'

declare module 'react' {
  type CSSProperties = {
    textWrap?: string
  }
}

declare global {
  // eslint-disable-next-line @typescript-eslint/consistent-type-definitions
  interface Window {
    queryLocalFonts: () => Promise<
      Array<{
        family: string
        fullName: string
        postscriptName: string
        style: string
        blob: () => Promise<Blob>
      }>
    >
  }
}

// declare module '*.svg' {
//   import { ReactElement, SVGProps } from 'react';
//   const content: (props: SVGProps<SVGElement>) => ReactElement;
//   export default content;
// }
