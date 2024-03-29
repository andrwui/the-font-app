import { type ReactElement, useEffect, useState } from 'react'
import { useLocalFontsStore } from 'stores/LocalFontsStore'
import { requestLocalFontsPermission } from 'helpers/LocalFontPermissions'
import NoFontsFound from '../shared/NoFontsFound'
import Loading from '../../../generics/Loading'
import FontList from './components/FontList'
import useSetLocalFonts from 'hooks/useSetFonts'
import NotSupported from './components/NotSupported'
import NotAccepted from './components/NotAccepted'
import { usePolicyStore } from 'stores/PolicyStore'
import { useFontFilterStore } from 'stores/FontControlsStore'

const LocalFontViewer = (): ReactElement => {
  const { filteredLocalFonts: filteredFonts } = useLocalFontsStore()
  const { filterValue } = useFontFilterStore()
  const { isLoading } = useLocalFontsStore()
  const { hasAccepted, setHasAccepted } = usePolicyStore()

  const [supported, setSupported] = useState(false)
  const [isReady, setIsReady] = useState(false)

  // Using the hook that sets the fonts in the store and shows the loading screen
  useEffect(() => {
    setTimeout(() => {
      setIsReady(true)
    }, 0)
    requestLocalFontsPermission(false)
      .then(accepted => {
        setSupported(true)
        setHasAccepted(accepted)
      })
      .catch(() => setSupported(false))
  }, [hasAccepted, supported])

  useSetLocalFonts(supported, hasAccepted)

  // I ABSOLUTELY know this is ugly and not the best, but right now i can't
  // come up with nothing else...

  return !isReady ? (
    <Loading />
  ) : !supported ? (
    <NotSupported />
  ) : !hasAccepted ? (
    <NotAccepted />
  ) : isLoading ? (
    <Loading />
  ) : filterValue && Object.keys(filteredFonts).length < 1 ? (
    <NoFontsFound />
  ) : (
    <FontList />
  )
}
export default LocalFontViewer
