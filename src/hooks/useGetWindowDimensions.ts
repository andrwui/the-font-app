import { useEffect, useState } from 'react'

// Custom hook to get the window width for some custom components like the Slider
const useGetWindowDimensions = (): { wHeight: number; wWidth: number } => {
  const [wWidth, setWWidth] = useState(window.innerWidth)
  const [wHeight, setWHeight] = useState(window.innerHeight)

  const handleResize = (): void => {
    setWWidth(window.innerWidth)
    setWHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return { wWidth, wHeight }
}

export default useGetWindowDimensions
