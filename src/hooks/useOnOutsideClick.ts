import { useEffect } from 'react'

type TProps = {
  ref: HTMLElement
  callback: (event: MouseEvent) => void
  uid: string
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
    callback(event)
  }
}

export const useOnOutsideClick = (
  ref: HTMLElement | null,
  callback: (event: MouseEvent) => void,
  state: boolean,
  uid: string
): void => {
  useEffect(() => {
    if (ref && state && uid) {
      callbackStack.push({ ref, callback, uid })
      if (callbackStack.length === 1) {
        document.addEventListener('mousedown', handleMouseDownEvent)
      }

      return () => {
        if (callbackStack.length === 0) {
          document.removeEventListener('mousedown', handleMouseDownEvent)
        }
      }
    }
  }, [ref, state, uid])

  useEffect(() => {
    if (!state && callbackStack.length > 0) {
      const activeElementIndex = callbackStack.findIndex((stack) => stack.uid === uid)
      if (activeElementIndex >= 0) {
        callbackStack.splice(activeElementIndex, 1)
      }
    }
  }, [state])
}
