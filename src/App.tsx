import { type ReactElement } from 'react'

import AppLayout from 'routes/app/AppLayout'

import useKeybinds from 'hooks/useKeybinds'
import { Navigate, Route, Routes } from 'react-router-dom'
import useTheme from 'hooks/useSetTheme'
import PageLayout from 'routes/page/PageLayout'

const App = (): ReactElement => {
  // The main App component just renders the layout wrapped on the ThemeUI Provider
  // Enables custom devtools if in dev mode

  useKeybinds()
  useTheme()

  return (
    <>
      <Routes>
        <Route
          path="/app/*"
          element={<AppLayout />}
        />
        {/* This is temporary as I think about a "Homepage" for the app itself */}
        <Route
          path="/app/"
          element={
            <Navigate
              replace
              to="/app/font-viewer/local"
            />
          }
        />
        <Route
          path="/"
          element={<PageLayout />}
        />
      </Routes>
    </>
  )
}

export default App
