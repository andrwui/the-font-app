import { type ReactElement } from 'react'

import Layout from 'layout/Layout'

import useKeybinds from 'hooks/useKeybinds'
import { Navigate, Route, Routes } from 'react-router-dom'
import ContextMenu from 'components/ContextMenu'
import useTheme from 'hooks/useSetTheme'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  // Enables custom devtools if in dev mode

  useKeybinds()
  useTheme()

  return (
    <>
      <ContextMenu />
      <Routes>
        <Route
          path="/"
          element={
            <Navigate
              replace
              to="/font-viewer/local/"
            />
          }
        />
        <Route
          path="/*"
          element={<Layout />}
        />
      </Routes>
    </>
  )
}

export default App
