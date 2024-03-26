import { isLocalFont } from 'helpers/FontHelper'
import useCollections from 'hooks/useCollections'
import {
  type Dispatch,
  type SetStateAction,
  useEffect,
  useState,
  useRef,
  type ReactElement,
  type ChangeEvent,
} from 'react'
import { FaPlus } from 'react-icons/fa'
import useCollectionsStore from 'stores/CollectionsStore'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'

const CollectionDropdownInput = ({
  setIsOpen,
  font,
}: {
  font: LocalFont | GoogleFont
  setIsOpen: Dispatch<SetStateAction<boolean>>
}): ReactElement => {
  const collections = useCollectionsStore(s => s.collections)
  const { toggleInCollection } = useCollections()
  const [inputValue, setInputValue] = useState<string>('')
  const handleItemKeydown = (e: KeyboardEvent): void => {
    if (e.key === 'Enter') {
      toggleInCollection(inputValue, {
        family: font,
        from: isLocalFont(font) ? 'local' : 'google',
        date: new Date(),
      })
      setIsOpen(false)
    }
  }

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.addEventListener('keydown', handleItemKeydown)
    }
    return () => {
      if (inputRef.current) {
        inputRef.current.removeEventListener('keydown', handleItemKeydown)
      }
    }
  }, [inputValue])
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target?.value)
  }

  const inputRef = useRef<HTMLInputElement>(null)
  return (
    <div className="flex relative">
      <input
        ref={inputRef}
        type="text"
        name="Collections"
        className={`bg-transparent placeholder-regular text-regular h-10 p-2 ${Object.keys(collections).length > 0 ? 'border-b-2 border-opacity-50 border-light' : ''}`}
        placeholder="Create new collection..."
        onChange={handleInputChange}
      />
      <FaPlus className="absolute right-2 top-1/2 -translate-y-1/2 text-regular text-opacity-50" />
    </div>
  )
}

export default CollectionDropdownInput
