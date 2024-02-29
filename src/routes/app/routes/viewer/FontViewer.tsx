import { type ReactElement } from 'react'
import ReplaceBar from './components/ReplaceBar'
import FontControls from './components/FontControls/FontControls'
import LocalFontViewer from './vendors/local/LocalFontViewer'
import { Route, Routes } from 'react-router-dom'
import useLoadFavorites from 'hooks/useLoadFavorites'

const FontViewer = (): ReactElement => {
  useLoadFavorites()

  return (
    <div className="flex h-full w-full flex-col">
      <FontControls />
      <Routes>
        <Route
          path="local"
          element={<LocalFontViewer />}
        />
      </Routes>
      <ReplaceBar />
    </div>
  )
}

export default FontViewer
