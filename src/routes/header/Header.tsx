import { type ReactElement } from 'react'

import Link from 'components/Link'
import AppIcon from './appicon/AppIcon'

const Header = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <header className="z-1 col-span-2 row-span-1 flex justify-between bg-bar-background px-6 h-[60px] sticky top-0">
      <AppIcon />
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
    </header>
  )
}

export default Header
