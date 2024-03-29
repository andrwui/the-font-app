import { type ReactElement } from 'react'
import LocationLink from './components/LocationLink'
import { AiFillHome } from 'react-icons/ai'
import { IoIosSettings } from 'react-icons/io'
import { RiTestTubeFill } from 'react-icons/ri'
import { BsCollectionFill } from 'react-icons/bs'
import { SiGooglefonts } from 'react-icons/si'
const Sidebar = (): ReactElement => {
  return (
    // The component of the sidebar, displays the links to navigate between features
    <div
      id="sidebar"
      className="max-sm:hidden relative z-10 col-span-1 row-span-2 flex h-full w-full flex-col items-center justify-start gap-4 bg-background px-6"
    >
      <LocationLink
        to="/app/font-viewer/local"
        tooltip="Local Fonts"
      >
        <AiFillHome />
      </LocationLink>
      <LocationLink
        to="/app/font-viewer/google"
        tooltip="Google Fonts"
      >
        <SiGooglefonts />
      </LocationLink>
      <LocationLink
        to="/app/collections"
        tooltip="Collections"
      >
        <BsCollectionFill />
      </LocationLink>
      {window.dev && (
        <LocationLink
          to="/app/tests"
          tooltip="Tests"
        >
          {' '}
          <RiTestTubeFill />
        </LocationLink>
      )}
      <LocationLink
        to="/app/settings"
        tooltip="Settings"
      >
        <IoIosSettings />
      </LocationLink>
    </div>
  )
}

export default Sidebar
