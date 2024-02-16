import { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import TitleBar from './components/Titlebar/TitleBar'
import FontViewer from './FontManager/FontManager'
import Sidebar from './components/Sidebar/Sidebar'
import Settings from './Settings/Settings'
const Layout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application

  return (
    <div
      className="grid h-full w-full
     grid-cols-layout grid-rows-layout flex-col *:focus:outline-none"
    >
      <TitleBar />
      <Sidebar />
      <div className="col-start-2">
        <Routes>
          <Route
            path="font-viewer/*"
            element={<FontViewer />}
          />
          <Route
            path="settings/"
            element={<Settings />}
          ></Route>
        </Routes>
      </div>
    </div>
  )
}
export default Layout
