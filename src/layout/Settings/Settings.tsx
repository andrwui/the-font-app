import Switch from 'components/Switch'
import Text from 'components/Text'
import ThemeSwitcher from 'components/ThemeSwitcher'
import { type ReactElement } from 'react'

const Settings = (): ReactElement => {
  return (
    <div className="flex w-1/2 flex-col gap-10 py-3">
      <Text size={32}>Settings</Text>
      <ThemeSwitcher />
      <Switch />
      <Switch />
      <Switch />
      <Switch />
      <Switch />
    </div>
  )
}
export default Settings
