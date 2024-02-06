import { useState, useEffect } from 'react'
import { SCREEN_SIZES } from '../consts'

const { SMALL, MEDIUM } = SCREEN_SIZES

type ScreenSize = 'small' | 'medium' | 'large'

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>(getScreenSize)

  function getScreenSize(): ScreenSize {
    const width = window.innerWidth

    switch (true) {
      case width <= SMALL:
        return 'small'
      case width <= MEDIUM:
        return 'medium'
      default:
        return 'large'
    }
  }
  const handleResize = () => {
    setScreenSize(getScreenSize())
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return screenSize
}
