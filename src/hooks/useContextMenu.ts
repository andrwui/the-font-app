import { type ContextMenuOption } from 'components/ContextMenu'
import { useEffect, type MouseEvent, type RefObject } from 'react'
import useContextMenuStore from 'stores/ContextMenuStore'

const useContextMenu = (
  ref: RefObject<any>,
  options: ContextMenuOption[],
  title?: string,
): void => {
  const { showMenu, hideMenu } = useContextMenuStore()

  useEffect(() => {
    const handleContextMenu = (e: MouseEvent): void => {
      e.preventDefault()
      e.stopPropagation()
      hideMenu()
      showMenu(e.pageX, e.pageY, options, title)
    }

    const element = ref.current
    if (element) {
      element.addEventListener('contextmenu', handleContextMenu)
    }

    return () => {
      if (element) {
        element.removeEventListener('contextmenu', handleContextMenu)
      }
    }
  }, [ref, options, showMenu])
}

export default useContextMenu
