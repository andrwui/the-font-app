import { type ReactElement } from 'react'

import AppLayout from 'routes/app/AppLayout'

import useKeybinds from 'hooks/useKeybinds'
import { Route, Routes } from 'react-router-dom'
import ContextMenu from 'components/ContextMenu'
import useTheme from 'hooks/useSetTheme'
import PageLayout from 'routes/page/PageLayout'

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
          path="/app/*"
          element={<AppLayout />}
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
