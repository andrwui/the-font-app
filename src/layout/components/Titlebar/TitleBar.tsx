import { type ReactElement } from 'react'
import SearchBar from './components/SearchBar'

const TitleBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div className="webkit_app-drag z-1 relative col-span-2 row-span-1 flex justify-end bg-bar-background">
      <SearchBar />
    </div>
  )
}

export default TitleBar
