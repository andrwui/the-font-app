import { type ReactElement } from 'react'
import Tooltip from './Tooltip'
import Text from './Text'

interface LabelProps {
  children: string
  tooltip?: string
  className?: string
}

const Label = ({ children, tooltip, className }: LabelProps): ReactElement => {
  return (
    <label className={`h-min ${className}`}>
      {tooltip ? (
        <Tooltip text={tooltip}>{Label.Text({ children })}</Tooltip>
      ) : (
        Label.Text({ children })
      )}
    </label>
  )
}

Label.Text = ({ children }: { children: string }) => {
  return <Text size={16}>{children}</Text>
}

export default Label
