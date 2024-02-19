import Text from 'components/Text'
import ThemeSwitcher from 'layout/Settings/components/ThemeSwitcher'
import { type ReactElement } from 'react'

const Settings = (): ReactElement => {
  return (
    <div className="flex w-1/2 flex-col gap-10 py-3">
      <Text size={32}>Settings</Text>
      <ThemeSwitcher />
    </div>
  )
}
export default Settings
