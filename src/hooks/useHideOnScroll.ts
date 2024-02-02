import { useEffect } from 'react'

export const useHideOnScroll = (hide: () => void): null => {
  useEffect(() => {
    document.addEventListener('scroll', hide)
    return () => {
      document.removeEventListener('scroll', hide)
    }
  }, [])
  return null
}
