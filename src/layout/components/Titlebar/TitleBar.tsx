import { type ReactElement } from 'react'
import SearchBar from './components/SearchBar'
import ThemeSwitcher from 'components/ThemeSwitcher'

const TitleBar = (): ReactElement => {
  return (
    // The component of the top bar, currently just returns the search bar
    <div
      style={{
        cursor: 'grab',
      }}
      className="webkit_app-drag relative z-10 col-span-2 row-span-1 flex justify-end bg-bar-background"
    >
      <SearchBar />
      <ThemeSwitcher />
    </div>
  )
}

export default TitleBar
