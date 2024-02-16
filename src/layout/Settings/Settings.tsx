import Switch from 'components/Switch'
import Text from 'components/Text'
import { type ReactElement } from 'react'

const Settings = (): ReactElement => {
  return (
    <div className="flex flex-col px-60 py-3">
      <Text size={32}>Settings</Text>
      <Switch></Switch>
    </div>
  )
}
export default Settings
