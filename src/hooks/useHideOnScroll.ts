import { useEffect } from 'react'
import { HIDE_ON_SCROLL_MESSAGE } from '../consts'

export const useHideOnScroll = (hide: () => void): null => {
  useEffect(() => {
    document.addEventListener('scroll', hide)
    return () => {
      document.removeEventListener('scroll', hide)
    }
  }, [])

  useEffect(() => {
    document.addEventListener('hideOnScroll', (event: Event) => {
      const customEvent = event as CustomEvent<string>
      // Check the event type
      if (customEvent.detail === HIDE_ON_SCROLL_MESSAGE) {
        // Close the menu
        hide()
      }
    })
  }, [])

  return null
}
