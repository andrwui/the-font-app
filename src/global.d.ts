import { type Theme } from 'theme-ui'
import { type Font } from './types/FontTypes'
import { type TextAlignTypes, type ItalicTypes } from './stores/FontControlsStore'
import 'react'

declare module 'react' {
  interface CSSProperties {
    textWrap?: string
  }
}

declare global {
  interface Window {
    queryLocalFonts: () => Promise<
      [
        {
          family: string
          fullName: string
          postscriptName: string
          style: string
        },
      ]
    >
    currentTheme: Theme
    exposedStores: {
      localFonts: {
        fonts: Font[]
        isLoading: boolean | null
        filteredFonts: Font[]
        filterValue: string
      }
      fontControls: {
        size: number
        weight: number
        letterSpacing: number
        text: string
        italic: ItalicTypes
        textAlign: TextAlignTypes
      }
    }

    DEV_ENV: boolean
  }
}

// declare module '*.svg' {
//   import { ReactElement, SVGProps } from 'react';
//   const content: (props: SVGProps<SVGElement>) => ReactElement;
//   export default content;
// }
