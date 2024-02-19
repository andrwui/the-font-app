import { create } from 'zustand'

interface ThemeStore {
  darkTheme: boolean
  setDarkTheme: (darkTheme: boolean) => void
}

export const useThemeStore = create<ThemeStore>(set => ({
  darkTheme: true,
  setDarkTheme: darkTheme => set({ darkTheme }),
}))

interface FavoritesStore {
  favorites: string[]
  setFavorites: (favorites: string[]) => void
}

export const useFavoritesStore = create<FavoritesStore>(set => ({
  favorites: [] as string[],
  setFavorites: (favorites: string[]) => {
    set({ favorites })
  },
}))
