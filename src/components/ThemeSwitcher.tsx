import { type ChangeEvent, type ReactElement } from 'react'
import Switch from './Switch'
import { useThemeStore } from 'stores/SettingsStore'

const ThemeSwitcher = (): ReactElement => {
  const { darkTheme, setDarkTheme } = useThemeStore()

  const handleChangeTheme = (e: ChangeEvent<HTMLInputElement>): void => {
    const isChecked = e.target.checked
    setDarkTheme(isChecked)
    localStorage.setItem('dark-mode', isChecked.toString())
  }

  return (
    <Switch
      onChange={handleChangeTheme}
      value={darkTheme}
      label="Dark mode"
    ></Switch>
  )
}

export default ThemeSwitcher
