import { create } from 'zustand'

type ColorStore = {
  color: string
  setColor: (color: string) => void
}

export const useColorStore = create<ColorStore>(set => ({
  color: '',
  setColor: (color: string) => {
    set({ color })
  },
}))
