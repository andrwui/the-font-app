import { useEffect } from 'react'
import { useThemeStore } from 'stores/SettingsStore'

const useTheme = (): void => {
  const { darkTheme, setDarkTheme } = useThemeStore()

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode')
    if (savedTheme !== null) {
      setDarkTheme(savedTheme === 'true')
    }
  }, [setDarkTheme])

  useEffect(() => {
    const rootElement = document.documentElement

    if (darkTheme) {
      rootElement.classList.remove('light')
    } else {
      rootElement.classList.add('light')
    }
  }, [darkTheme])
}

export default useTheme
