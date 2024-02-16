import { type ReactElement } from 'react'
import LocationLink from './components/LocationLink'
import { AiFillHome } from 'react-icons/ai'
import { IoIosSettings } from 'react-icons/io'

const Sidebar = (): ReactElement => {
  return (
    // The component of the sidebar, displays the links to navigate between features
    <div
      id="sidebar"
      className=" relative z-10 col-span-1 row-span-2 flex h-full w-full flex-col items-center justify-start gap-5 bg-bar-background p-4"
    >
      <LocationLink to="/font-viewer/local" tooltip="Local Fonts">
        <AiFillHome />
      </LocationLink>
      <LocationLink to="/settings" tooltip="Settings">
        <IoIosSettings />
      </LocationLink>
    </div>
  )
}

export default Sidebar
