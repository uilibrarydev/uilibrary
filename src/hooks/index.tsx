import { useState, useEffect } from 'react'

export const useOnOutsideClick = (
  ref: RefObject<HTMLInputElement> | null,
  handler: (event: MouseEvent) => void
): void => {
  const [isTouchMoved, setTouchMoved] = useState(false)
  useEffect(() => {
    const listener = (event: MouseEvent): void => {
      if (ref && (!ref.current || ref.current.contains(event.target))) {
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
    document.addEventListener('mousedown', listener)
    document.addEventListener('touchend', onTouchEnd as EventListener)
    document.addEventListener('touchmove', onTouchMove)
    return () => {
      document.removeEventListener('mousedown', listener)
      document.removeEventListener('touchend', onTouchEnd as EventListener)
      document.removeEventListener('touchmove', onTouchMove)
    }
  }, [ref, handler, isTouchMoved])
}
