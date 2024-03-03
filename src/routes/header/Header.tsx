import { type ReactElement } from 'react'

import Link from 'components/Link'
import AppIcon from './appicon/AppIcon'
import { useLocation, useNavigate } from 'react-router-dom'
import Button from 'components/Button'

const Header = ({ className }: { className?: string }): ReactElement => {
  const path = useLocation().pathname
  const navigate = useNavigate()

  return (
    // The component of the top bar, currently just returns the search bar
    <header
      className={`z-1 col-span-2 row-span-1 flex justify-between bg-bar-background px-6 h-[60px] w-full top-0 bg-background/50 ${className || ''}`}
    >
      <AppIcon className="w-[52px] flex justify-center items-center " />
      <nav className="flex items-center gap-10">
        {path.split('/')[1] !== 'app' && (
          <Button
            className={'h-3/4'}
            onClick={() => navigate(`/app/font-viewer/local`, { replace: true })}
          >
            Get Started
          </Button>
        )}
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
