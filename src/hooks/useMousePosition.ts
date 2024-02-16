import { useEffect, useState } from 'react'

const useMousePosition = (): { x: number; y: number } => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMovement = (e: MouseEvent): void => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMovement)
    return () => {
      window.removeEventListener('mousemove', handleMouseMovement)
    }
  }, [])
  return mousePosition
}
export default useMousePosition
