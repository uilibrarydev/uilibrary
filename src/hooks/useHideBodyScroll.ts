import { useEffect } from 'react'

export const useHideBodyScroll = (isOpen: boolean): null => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      const currentOverflow = document.body.style.overflow
      if (currentOverflow === 'hidden') {
        document.body.style.overflow = 'hidden'
      }
    }
  }, [isOpen])

  return null
}
