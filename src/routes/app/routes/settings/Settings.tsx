import Button from 'components/Button'
import Text from 'components/Text'
import useFavorites from 'hooks/useFavorites'
import ThemeSwitcher from './components/ThemeSwitcher'
import { type ReactElement } from 'react'
import useCollections from 'hooks/useCollections'

const Settings = (): ReactElement => {
  const { resetFavorites } = useFavorites()
  const { resetCollections } = useCollections()

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
      <Button
        className="w-40"
        animated
        onClick={resetCollections}
        danger
      >
        Reset collections
      </Button>
    </div>
  )
}
export default Settings
