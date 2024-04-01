import { useEffect } from 'react'

type TProps = {
  ref: HTMLElement
  callback: (event: MouseEvent) => void
  uid: string
}

const callbackStack: TProps[] = []

function handleMouseDownEvent(event: MouseEvent, remove = true) {
  const callbackObject = callbackStack[callbackStack.length - 1]
  if (!callbackObject) {
    return
  }
  const { ref, callback } = callbackObject
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (ref && !ref.contains(event.target)) {
    if (remove) {
      callbackStack.splice(callbackStack.length - 1, 1)
    }
    callback(event)
  }
}

export const useOnOutsideClick = (
  ref: HTMLElement | null,
  callback: (event: MouseEvent) => void,
  state: boolean,
  uid: string,
  shouldRemoveCallback = true
): void => {
  useEffect(() => {
    if (ref && state && uid) {
      callbackStack.push({ ref, callback, uid })
      if (callbackStack.length === 1) {
        document.addEventListener('mousedown', (e) => handleMouseDownEvent(e, shouldRemoveCallback))
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
