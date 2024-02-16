import { type ReactElement } from 'react'

import Layout from 'layout/Layout'

import useDevTools from 'hooks/useDevTools'
import useKeybinds from 'hooks/useKeybinds'
import { Navigate, Route, Routes } from 'react-router-dom'
import ContextMenu from 'components/ContextMenu'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  // Enables custom devtools if in dev mode
  if (window.DEV_ENV) {
    useDevTools()
  }

  useKeybinds()

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
