import { type ReactElement } from 'react'

import TFAIcon from '../icons/TheFontApp.svg?react'
import { Link } from 'react-router-dom'

const AppIcon = ({ className }: { className?: string }): ReactElement => {
  return (
    <Link
      to="/"
      className={className}
    >
      <TFAIcon className="size-8 *:fill-accent" />
    </Link>
  )
}

export default AppIcon
