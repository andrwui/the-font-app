import { type ContextMenuOption } from 'components/ContextMenu'
import { create } from 'zustand'

interface ContextMenuStore {
  isVisible: boolean
  position: { x: number; y: number }
  title?: string
  options: ContextMenuOption[]
  showMenu: (x: number, y: number, options: ContextMenuOption[], title?: string) => void
  hideMenu: () => void
}

const useContextMenuStore = create<ContextMenuStore>(set => ({
  isVisible: false,
  position: { x: 0, y: 0 },
  title: '',
  options: [] as ContextMenuOption[],
  showMenu: (x, y, options, title) =>
    set({ isVisible: true, position: { x, y }, options, title }),
  hideMenu: () => set({ isVisible: false }),
}))

export default useContextMenuStore
