import { type ReactElement } from 'react'

import Link from 'components/Link'
import AppIcon from './appicon/AppIcon'
import SearchBar from 'routes/app/routes/generics/SearchBar'

const Header = ({ className }: { className?: string }): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <header
      className={`z-50 col-span-2 row-span-1 flex justify-between bg-bar-background px-6 h-[60px] w-full top-0 bg-background/95 backdrop-blur-sm ${className || ''}`}
    >
      <SearchBar></SearchBar>
      <AppIcon className="w-[52px] flex justify-center items-center " />
      <nav className="flex items-center gap-10">
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
