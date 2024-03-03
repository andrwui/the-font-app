import ReactLenis from '@studio-freight/react-lenis'
import { type ReactElement } from 'react'
import Header from 'routes/header/Header'
import Presentation from './sections/presentation/Presentation'

const PageLayout = (): ReactElement => {
  return (
    <ReactLenis root>
      <Header className="fixed" />
      <Presentation />
    </ReactLenis>
  )
}
export default PageLayout
