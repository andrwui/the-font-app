import Button from 'components/Button'
import useClickOutside from 'hooks/useClickOutside'
import { useCallback, type ReactElement, type Dispatch, type SetStateAction } from 'react'
import { FaPlus } from 'react-icons/fa'
import { useFavoritesStore } from 'stores/SettingsStore'
import { AnimatePresence, motion } from 'framer-motion'
import CollectionDropdownItem from './CollectionDropdownItem'

const CollectionsDropdownList = ({
  setIsOpen,
  isOpen,
}: {
  font: any
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}): ReactElement | null => {
  const { favorites } = useFavoritesStore()

  const handleItemClick = useCallback((func?: () => void) => {
    if (func) {
      func()
    }
    setIsOpen(false)
  }, [])
  const domNode = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <AnimatePresence>
      {isOpen ? (
        <motion.ul
          initial={{
            opacity: 0,
            y: -50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            y: -50,
          }}
          transition={{
            type: 'spring',
            damping: 20,
            mass: 0.2,
            stiffness: 363,
            velocity: 0.05,
          }}
          ref={domNode}
          className="w-max bg-dark rounded-md p-3 absolute top-full flex flex-col gap-2"
        >
          <Button
            onClick={() => alert('Collection created')}
            className={`gap-2 flex items-center justify-center ${favorites.length ? 'mb-3' : ''}`}
          >
            <FaPlus />
            New collection
          </Button>
          {favorites?.map((_: any, i: number) => {
            return (
              <CollectionDropdownItem
                key={i}
                onClick={handleItemClick}
              >
                {_}
              </CollectionDropdownItem>
            )
          })}
        </motion.ul>
      ) : null}{' '}
    </AnimatePresence>
  )
}

export default CollectionsDropdownList
