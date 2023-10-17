import { useEffect, useState } from 'react'

export const useHideBodyScroll = (isOpen: boolean): null => {
  const [initialOverflow, setCurrentOverflow] = useState('initial')
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      if (initialOverflow === 'hidden') {
        document.body.style.overflow = initialOverflow
      }
    }
  }, [isOpen])

  useEffect(() => {
    const currentOverflow = document.body.style.overflow
    setCurrentOverflow(currentOverflow || 'initial')
  }, [])

  return null
}
