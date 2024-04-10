import { useEffect } from 'react'
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE } from '../consts'

export const useChangePositionsOnScroll = (
  parentElement: HTMLElement | null,
  childElement: HTMLElement | null
): null => {
  const positionElement = () => {
    const elemDimensions = parentElement?.getBoundingClientRect()

    if (childElement && elemDimensions) {
      childElement.style.top = elemDimensions.bottom + 'px'
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', positionElement)
  }, [positionElement])

  useEffect(() => {
    document.addEventListener(CUSTOM_SCROLL_NAME, (event: Event) => {
      const customEvent = event as CustomEvent<string>
      // Check the event type
      if (customEvent.detail === CUSTOM_SCROLL_MESSAGE) {
        positionElement()
      }
    })
  }, [positionElement])

  return null
}
