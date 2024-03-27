import { type ReactElement } from 'react'
import { Route, Routes } from 'react-router-dom'
import FontViewer from './routes/viewer/FontViewer'
import Sidebar from './sidebar/Sidebar'
import Settings from './routes/settings/Settings'
import GlyphViewer from './routes/glyphs/GlyphViewer'
import Test from './routes/tests/Tests'
import Header from 'routes/header/Header'
import Collections from './routes/collections/Collections'
import useLoadLocalStorage from 'hooks/useLoadLocalStorage'
import useLoadGoogleFonts from 'hooks/useLoadGoogleFonts'

const AppLayout = (): ReactElement => {
  // Returns a wrapper of all the main panels of the application
  useLoadLocalStorage()
  useLoadGoogleFonts()
  return (
    <div
      className="grid h-full w-full max-sm:grid-cols-1
     grid-cols-layout grid-rows-layout flex-col *:focus:outline-none"
    >
      <Header />
      <Sidebar />
      <div className={`col-start-2 flex w-full justify-center sm:pr-6`}>
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
            path="/collections/"
            element={<Collections />}
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
