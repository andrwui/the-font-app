import { create } from 'zustand'

interface ThemeStore {
  darkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
}

export const useThemeStore = create<ThemeStore>(set => ({
  darkTheme: true,
  setDarkTheme: darkTheme => set({ darkTheme }),
}))

export default useThemeStore
