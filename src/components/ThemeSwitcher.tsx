import Text from 'components/Text'
import { type ReactElement } from 'react'

const ThemeSwitcher = (): ReactElement => {
  const handleChangeTheme = (): void => {
    const rootElement = document.documentElement

    rootElement.classList.add('disable-transitions')

    rootElement.classList.toggle('light')

    setTimeout(() => {
      rootElement.classList.remove('disable-transitions')
    }, 0)
  }

  return (
    <Text className="mr-40 text-bar-foreground" onClick={handleChangeTheme}>
      change theme
    </Text>
  )
}

export default ThemeSwitcher
