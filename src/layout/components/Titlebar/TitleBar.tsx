import { type ReactElement } from 'react'

import TFAIcon from './icons/TheFontApp.svg?react'
import Text from 'components/Text'
import Link from 'components/Link'
const TitleBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div className="webkit_app-drag z-1 relative col-span-2 row-span-1 flex justify-between bg-bar-background px-6">
      <div className="h-full flex gap-2 items-center">
        <TFAIcon className="size-8" />
        <Text
          size={18}
          className="h-min"
        >
          The Font App
        </Text>
      </div>
      <nav>
        <ul className="flex gap-7 h-full items-center">
          <li>
            <Link
              animated
              to="/"
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              animated
              to="/"
            >
              Docs
            </Link>
          </li>
          <li>
            <Link
              animated
              icon
              to="/"
            >
              Github
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default TitleBar
