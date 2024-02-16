import { useEffect } from 'react'

// Hook to ease the use of some keybinds i think are useful.
const useKeybinds = (): void => {
  const keybinds = (e: KeyboardEvent): void => {
    // Ctrl + F for the search bar
    if (e.ctrlKey && e.key === 'f') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('#SearchBar')!.focus()
    }

    // Ctrl + R for the replace bar
    if (e.ctrlKey && e.key === 'r') {
      e.preventDefault()
      document.querySelector<HTMLInputElement>('#ReplaceBar')!.focus()
    }

    if (e.key === 'Escape') {
      const activeElement = document.activeElement as HTMLElement
      activeElement.blur()
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', keybinds)
    return () => {
      window.removeEventListener('keydown', keybinds)
    }
  }, [keybinds])
}
export default useKeybinds
