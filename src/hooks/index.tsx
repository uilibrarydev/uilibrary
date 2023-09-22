import { useEffect } from 'react'

type TProps = {
  ref: HTMLElement
  callback: () => void
}

const callbackStack: TProps[] = []

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

export const useOnOutsideClick = (
  ref: HTMLElement | null,
  callback: () => void,
  state: boolean
): void => {
  useEffect(() => {
    if (ref && state) {
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
  }, [ref, state])
}
