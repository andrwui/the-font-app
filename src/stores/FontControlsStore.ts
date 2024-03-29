import { create } from 'zustand'

// In this file are all the stores that are related to the viewer's settings.

// ====== SIZE STORE ======
type SizeStore = {
  size: number
  setSize: (size: number) => void
  resetSize: () => void
}
const initialSize = {
  size: 80,
}
export const useSizeStore = create<SizeStore>(set => ({
  ...initialSize,
  setSize: (size: number) => {
    set({ size })
  },
  resetSize: () => {
    set(initialSize)
  },
}))

// ====== WEIGHT STORE ======
type WeightStore = {
  weight: number
  setWeight: (weight: number) => void
  resetWeight: () => void
}
const initialWeight = {
  weight: 500,
}
export const useWeightStore = create<WeightStore>(set => ({
  ...initialWeight,
  setWeight: (weight: number) => {
    set({ weight })
  },
  resetWeight: () => {
    set(initialWeight)
  },
}))

// ====== SPACING STORE ======
type SpacingStore = {
  letterSpacing: number
  setLetterSpacing: (letterSpacing: number) => void
  resetLetterSpacing: () => void
}
const initialSpacing = {
  letterSpacing: 0,
}
export const useSpacingStore = create<SpacingStore>(set => ({
  ...initialSpacing,
  setLetterSpacing: (letterSpacing: number) => {
    set({ letterSpacing })
  },
  resetLetterSpacing: () => {
    set(initialSpacing)
  },
}))

// ====== TEXT REPLACER STORE ======
type TextReplacerStore = {
  text: string
  setText: (text: string) => void
  resetText: () => void
}
const initialText = {
  text: '',
}

export const useTextReplacerStore = create<TextReplacerStore>(set => ({
  ...initialText,
  setText: (text: string) => {
    set({ text })
  },
  resetText: () => {
    set(initialText)
  },
}))

// ====== STYLESTORE ======

export type ItalicTypes = 'italic' | ''
type ItalicStore = {
  italic: ItalicTypes
  setItalic: (italic: ItalicTypes) => void
}

export const useItalicStore = create<ItalicStore>(set => ({
  italic: '',
  setItalic: (italic: ItalicTypes) => {
    set({ italic })
  },
}))

export type TextAlignTypes = 'center' | 'right' | 'left'
type TextAlignStore = {
  textAlign: TextAlignTypes
  setTextAlign: (textAlign: TextAlignTypes) => void
}

export const useTextAlignStore = create<TextAlignStore>(set => ({
  textAlign: 'left',
  setTextAlign: (textAlign: TextAlignTypes) => {
    set({ textAlign })
  },
}))

type FontFilterStore = {
  filterValue: string
  setFilterValue: (filterValue: string) => void
}

export const useFontFilterStore = create<FontFilterStore>(set => ({
  filterValue: '',
  setFilterValue: (filterValue: string) => {
    set({ filterValue })
  },
}))
