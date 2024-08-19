import { useEffect } from 'react'
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE, DROPDOWN_AND_INPUT_GAP } from '../consts'

export const useChangePositionsOnScroll = (
  parentElement: HTMLElement | null,
  childElement: HTMLElement | null
): null => {
  const positionElement = () => {
    const elemDimensions = parentElement?.getBoundingClientRect()
    const childElementDimensions = childElement?.getBoundingClientRect()

    if (childElementDimensions && elemDimensions && childElement) {
      if (childElementDimensions.top > elemDimensions.top) {
        childElement.style.top = elemDimensions.bottom + 'px'
      } else {
        childElement.style.bottom =
          window.innerHeight - elemDimensions.top + DROPDOWN_AND_INPUT_GAP + 'px'
      }
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
