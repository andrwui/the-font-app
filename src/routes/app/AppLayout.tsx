import { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import FontViewer from './routes/viewer/FontViewer'
import Sidebar from './sidebar/Sidebar'
import Settings from './routes/settings/Settings'
import GlyphViewer from './routes/glyphs/GlyphViewer'
import Test from './routes/tests/Tests'
import Header from 'routes/header/Header'

const AppLayout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application

  return (
    <div
      className="grid h-full w-full
     grid-cols-layout grid-rows-layout flex-col *:focus:outline-none"
    >
      <Header />
      <Sidebar />
      <div className={`col-start-2 flex w-full justify-center pr-6`}>
        <Routes>
          <Route
            path="/font-viewer/*"
            element={<FontViewer />}
          />
          <Route
            path="/settings/"
            element={<Settings />}
          />
          <Route
            path="/glyphs/*"
            element={<GlyphViewer />}
          />
          <Route
            path="/tests/"
            element={<Test />}
          />
        </Routes>
      </div>
    </div>
  )
}
export default AppLayout
