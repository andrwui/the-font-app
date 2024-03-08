import { type MutableRefObject, useEffect, useRef } from 'react'

// Creates a ref, that will fire a handler event (argument)
// when the mouse clicks outside the ref element

// It's used for elements that are not "blurable" like ul's divs
// or and any element that doesn't have a "focused" property

const useClickOutside = <T extends HTMLElement>(
  handler: () => void,
): MutableRefObject<null> => {
  const ref = useRef<T>(null)

  useEffect(() => {
    const fireHandler = (e: MouseEvent): void => {
      if (ref.current) {
        if (!ref.current.contains(e.target as Node)) {
          handler()
        }
      }
    }

    document.addEventListener('mousedown', fireHandler)

    return () => {
      document.removeEventListener('mousedown', fireHandler)
    }
  }, [])

  return ref as MutableRefObject<null>
}
export default useClickOutside
