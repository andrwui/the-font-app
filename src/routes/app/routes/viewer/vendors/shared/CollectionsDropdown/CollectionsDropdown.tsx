// CollectionsDropdown.js
import Tooltip from 'components/Tooltip'
import { useState, type ReactElement } from 'react'
import { FaPlus } from 'react-icons/fa'
import CollectionsDropdownList from './components/CollectionsDropdownList'

const CollectionsDropdown = (): ReactElement => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <Tooltip text="Add to collections">
        <button onClick={() => setIsOpen(true)}>{<FaPlus />}</button>
      </Tooltip>
      <CollectionsDropdownList
        font={null}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </div>
  )
}

export default CollectionsDropdown
