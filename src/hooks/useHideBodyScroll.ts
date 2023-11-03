import { useEffect, useState } from 'react'

export const useHideBodyScroll = (isOpen: boolean): null => {
  const [initialOverflow, setInitialOverflow] = useState('initial')
  const [isHidden, setIsHidden] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      setIsHidden(true)
    } else {
      if (isHidden) {
        document.body.style.overflow = initialOverflow
      }
    }
  }, [isOpen])

  useEffect(() => {
    const initial = document.body.style.overflow
    if (initial) {
      setInitialOverflow(initial)
    }
    return () => {
      document.body.style.overflow = initialOverflow
    }
  }, [])

  return null
}
