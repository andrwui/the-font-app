import { create } from 'zustand'

interface ThemeStore {
  light: boolean
  setLightTheme: (light: boolean) => void
}

export const useThemeStore = create<ThemeStore>(set => ({
  light: true,
  setLightTheme: light => set({ light }),
}))

export default useThemeStore
