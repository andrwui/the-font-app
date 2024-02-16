import { Fragment, useEffect, type ReactElement, useRef } from 'react'
import useContextMenuStore from 'stores/ContextMenuStore'
import Text from './Text'
import Separator from './Separator'
import { motion, AnimatePresence } from 'framer-motion'

export interface ContextMenuOption {
  feedback?: 'danger' | 'accent' | 'success'
  text: string | ReactElement
  icon?: ReactElement
  action: () => void
}

const ContextMenu = (): ReactElement | null => {
  const { isVisible, position, options, title, hideMenu } = useContextMenuStore()
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (
        (menuRef.current as HTMLElement) &&
        !(menuRef.current as HTMLElement).contains(e.target as Node)
      ) {
        hideMenu()
      }
    }

    if (isVisible) {
      document.addEventListener('click', handleClickOutside)
    }

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isVisible, hideMenu])

  const menuVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const optionVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  }

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
          className="absolute z-50 flex w-max flex-col items-center gap-2 rounded-md bg-secondary-dark p-2"
          style={{ top: `${position.y}px`, left: `${position.x}px` }}
        >
          {title && (
            <motion.li
              className="flex w-full flex-col items-start gap-2 rounded-md px-2 py-1"
              variants={optionVariants}
              initial="initial"
              animate="animate"
            >
              <Text
                className="text-secondary-light"
                weight="600"
              >
                {title}
              </Text>
              <Separator />
            </motion.li>
          )}
          {options.map((option, index) => (
            <Fragment key={index}>
              <motion.li
                key={index}
                variants={optionVariants}
                initial="initial"
                animate="animate"
                transition={{ delay: index * 0.05 }}
                onClick={() => {
                  option.action()
                  hideMenu()
                }}
                className=" flex w-full items-center gap-2 rounded-md px-2 py-2 hover:bg-secondary-mid"
              >
                {option.icon}

                {typeof option.text === 'string' ? (
                  <Text
                    size={13}
                    weight="500"
                  >
                    {option.text}
                  </Text>
                ) : (
                  option.text
                )}
              </motion.li>
            </Fragment>
          ))}
        </motion.ul>
      )}
    </AnimatePresence>
  )
}

export default ContextMenu
