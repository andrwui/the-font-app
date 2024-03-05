import { useEffect, type ReactElement, useRef } from 'react'
import useContextMenuStore from 'stores/ContextMenuStore'
import OptionList from './components/OptionList'

const ContextMenu = (): ReactElement | null => {
  const { isVisible, position, options, title, hideMenu } = useContextMenuStore()
  const menuRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent): void => {
      if (!menuRef.current?.contains(e.target as Node)) {
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

  return (
    <OptionList
      isVisible={isVisible}
      position={position}
      options={options}
      title={title}
      hideMenu={hideMenu}
    />
  )
}

export default ContextMenu
