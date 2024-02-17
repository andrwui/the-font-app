import Text from 'components/Text'
import { useState, type ChangeEvent, type ReactElement, useEffect } from 'react'
import Switch from './Switch'

const ThemeSwitcher = (): ReactElement => {
  const [darkTheme, setDarkTheme] = useState(() => {
    const savedTheme = localStorage.getItem('dark-mode')
    return savedTheme === 'true'
  })

  useEffect(() => {
    const rootElement = document.documentElement

    if (darkTheme) {
      rootElement.classList.remove('light')
    } else {
      rootElement.classList.add('light')
    }
  }, [darkTheme])

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
