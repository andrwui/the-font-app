import { AnimatePresence, motion } from 'framer-motion'
import { type ReactElement, useRef } from 'react'
import Text from 'components/Text'
import Separator from 'components/Separator'
import { type ContextMenuOption } from './types'
import OptionItem from './OptionItem'
import Dropdown from 'components/Dropdown'

interface ContextMenuListProps {
  isVisible: boolean
  position: { x: number; y: number }
  options: ContextMenuOption[]
  title?: string
  hideMenu: () => void
}

const menuVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
}

const OptionList = ({
  isVisible,
  position,
  options,
  title,
  hideMenu,
}: ContextMenuListProps): ReactElement => {
  const menuRef = useRef<HTMLUListElement>(null)

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.ul
          key="contextMenu"
          variants={menuVariants}
          initial={'initial'}
          animate={'animate'}
          exit={'exit'}
          transition={{ duration: 0.1 }}
          ref={menuRef}
          className="absolute z-50 flex w-max flex-col items-center gap-2 rounded-md bg-dark p-2"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          {title && (
            <motion.li
              className="flex w-full flex-col items-start gap-2 rounded-md px-2 py-1"
              initial="initial"
              animate="animate"
            >
              <Text
                className="text-disabled"
                weight="600"
              >
                {title}
              </Text>
              <Separator />
            </motion.li>
          )}
          {options.map((option, index) => (
            <OptionItem
              key={index}
              option={option}
              index={index}
              handleClick={() => {
                option.action()
                hideMenu()
              }}
            />
          ))}
          <Dropdown options={[{ action: () => console.log('asd'), name: 'asd' }]}>
            kiondaperro
          </Dropdown>
        </motion.ul>
      )}
    </AnimatePresence>
  )
}
export default OptionList
