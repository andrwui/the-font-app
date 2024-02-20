import Button from 'components/Button'
import Text from 'components/Text'
import useFavorites from 'hooks/useFavorites'
import ThemeSwitcher from 'layout/Settings/components/ThemeSwitcher'
import { type ReactElement } from 'react'

const Settings = (): ReactElement => {
  const { resetFavorites } = useFavorites()

  return (
    <div className="flex w-1/2 flex-col gap-10 py-3">
      <Text size={32}>Settings</Text>
      <ThemeSwitcher />
      <Button
        className="w-40"
        animated
        onClick={resetFavorites}
        danger
      >
        Reset favorites
      </Button>
    </div>
  )
}
export default Settings
