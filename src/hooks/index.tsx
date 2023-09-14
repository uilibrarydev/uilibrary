import { useState, useEffect } from 'react'

export const useOnOutsideClick = (
  element: HTMLElement | null,
  handler: (event: MouseEvent) => void
): void => {
  const [isTouchMoved, setTouchMoved] = useState(false)
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (!element || element.contains(event.target)) {
        return
      }

      handler(event)
    }

    const onTouchEnd = (event: MouseEvent) => {
      if (!isTouchMoved) {
        listener(event)
      } else {
        setTouchMoved(false)
      }
    }
    const onTouchMove = () => {
      if (!isTouchMoved) {
        setTouchMoved(true)
      }
    }
    document.addEventListener('click', listener)
    document.addEventListener('touchend', onTouchEnd as EventListener)
    document.addEventListener('touchmove', onTouchMove)
    return () => {
      document.removeEventListener('click', listener)
      document.removeEventListener('touchend', onTouchEnd as EventListener)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [element, handler, isTouchMoved])
}
