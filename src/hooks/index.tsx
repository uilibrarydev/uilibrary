import { useEffect } from 'react'

const callbackStack: { ref: HTMLElement; callback: () => void }[] = []

function handleMouseDownEvent(event: MouseEvent) {
  const callbackObject = callbackStack[callbackStack.length - 1]
  if (!callbackObject) {
    return
  }
  const { ref, callback } = callbackObject
  if (ref && !ref.contains(event.target)) {
    callbackStack.splice(callbackStack.length - 1, 1)
    callback()
  }
}

export const useOnOutsideClick = (ref: HTMLElement | null, callback: () => void): void => {
  useEffect(() => {
    if (ref) {
      callbackStack.push({ ref, callback })

      if (callbackStack.length === 1) {
        document.addEventListener('mousedown', handleMouseDownEvent)
      }

      return () => {
        if (callbackStack.length === 0) {
          document.removeEventListener('mousedown', handleMouseDownEvent)
        }
      }
    }
  }, [ref])
}
