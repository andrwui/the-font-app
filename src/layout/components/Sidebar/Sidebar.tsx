import { type ReactElement } from 'react'
import LocationLink from './components/LocationLink'
import { AiFillHome } from 'react-icons/ai'
import { IoIosSettings } from 'react-icons/io'
import { RiTestTubeFill } from 'react-icons/ri'

const Sidebar = (): ReactElement => {
  return (
    // The component of the sidebar, displays the links to navigate between features
    <div
      id="sidebar"
      className=" relative z-10 col-span-1 row-span-2 flex h-full w-full flex-col items-center justify-start gap-4 bg-background px-6"
    >
      <LocationLink
        to="/font-viewer/local"
        tooltip="Local Fonts"
      >
        <AiFillHome />
      </LocationLink>
      <LocationLink
        to="/settings"
        tooltip="Settings"
      >
        <IoIosSettings />
      </LocationLink>
      <LocationLink
        to="/tests"
        tooltip="Tests"
      >
        <RiTestTubeFill />
      </LocationLink>
    </div>
  )
}

export default Sidebar
