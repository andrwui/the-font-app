import { type ReactElement } from 'react'
import ReplaceBar from './components/ReplaceBar'
import FontControls from './components/FontControls/FontControls'
import LocalFontManager from './vendors/local/LocalFontManager'
import { Route, Routes } from 'react-router-dom'
const FontViewer = (): ReactElement => {
  return (
    <div className="flex h-full flex-col">
      <FontControls />
      <Routes>
        <Route
          path="local"
          element={<LocalFontManager />}
        />
      </Routes>
      <ReplaceBar />
    </div>
  )
}

export default FontViewer
