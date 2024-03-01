import { type ReactElement } from 'react'
import Header from 'routes/header/Header'
import Presentation from './sections/presentation/Presentation'

const PageLayout = (): ReactElement => {
  return (
    <>
      <Header className="fixed" />
      <Presentation />
    </>
  )
}
export default PageLayout
