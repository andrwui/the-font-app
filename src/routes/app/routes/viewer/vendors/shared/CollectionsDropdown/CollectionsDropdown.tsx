// CollectionsDropdown.js
import Tooltip from 'components/Tooltip'
import { useState, type ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa'
import CollectionsDropdownList from './components/CollectionsDropdownList'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'

type CollectionsDropdownProps = { font: LocalFont | GoogleFont }

const CollectionsDropdown = ({ font }: CollectionsDropdownProps): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = (): void => {
    setIsOpen(true)
  }

  return (
    <div className="relative">
      <Tooltip text="Add to collections">
        <button onClick={handleClick}>{<FaPlus />}</button>
      </Tooltip>
      <CollectionsDropdownList
        font={font}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default CollectionsDropdown
