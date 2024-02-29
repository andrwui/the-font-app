import { type ReactElement } from 'react'

import TFAIcon from '../icons/TheFontApp.svg?react'
import { Link } from 'react-router-dom'

const AppIcon = (): ReactElement => {
  return (
    <Link
      to="/"
      className="h-full w-[52px] flex justify-center items-center"
    >
      <TFAIcon className="size-8" />
    </Link>
  )
}

export default AppIcon
