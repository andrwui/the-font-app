import useClickOutside from 'hooks/useClickOutside'
import { type ReactElement, type Dispatch, type SetStateAction } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import CollectionDropdownItem from './CollectionDropdownItem'
import useCollectionsStore from 'stores/CollectionsStore'
import useCollections from 'hooks/useCollections'
import { type GoogleFont, type LocalFont } from 'types/FontTypes'
import CollectionDropdownInput from './CollectionsDropdownInput'
import { isLocalFont } from 'helpers/FontHelper'

const CollectionsDropdownList = ({
  isOpen,
  setIsOpen,
  font,
}: {
  font: LocalFont | GoogleFont
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}): ReactElement | null => {
  const collections = useCollectionsStore(s => s.collections)
  const { toggleInCollection } = useCollections()

  const handleItemClick = (collection: string, font: LocalFont | GoogleFont): void => {
    setIsOpen(false)
    toggleInCollection(collection, {
      family: isLocalFont(font) ? font[0].family : font.family,
      from: isLocalFont(font) ? 'local' : 'google',
      date: new Date(),
    })
  }

  const menuRef = useClickOutside(() => {
    setIsOpen(false)
  })

  return (
    <AnimatePresence>
      {isOpen && (
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
          ref={menuRef}
          className="w-max bg-dark rounded-md p-2 absolute top-full flex flex-col gap-2 z-50"
        >
          <div className="flex ">
            <CollectionDropdownInput
              font={font}
              setIsOpen={setIsOpen}
            />
          </div>
          {Object.keys(collections).map((item, i: number) => {
            return (
              <CollectionDropdownItem
                key={i}
                onClick={() => handleItemClick(item, font)}
              >
                {item}
              </CollectionDropdownItem>
            )
          })}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default CollectionsDropdownList
