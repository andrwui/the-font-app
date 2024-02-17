import Text from 'components/Text'
import ThemeSwitcher from 'components/ThemeSwitcher'
import { useRef, type ReactElement } from 'react'

const Settings = (): ReactElement => {
  const testRef = useRef<HTMLParagraphElement>(null)

  const textStyles = testRef.current

  if (testRef.current) {
    console.log(getComputedStyle(testRef.current))
  } else {
    console.log('QUE PIJA')
  }

  return (
    <div className="flex w-1/2 flex-col gap-10 py-3">
      <Text size={32}>Settings</Text>
      <ThemeSwitcher />
    </div>
  )
}
export default Settings
