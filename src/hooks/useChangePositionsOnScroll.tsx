import { useEffect } from 'react'
import { CUSTOM_SCROLL_NAME, CUSTOM_SCROLL_MESSAGE, DROPDOWN_AND_INPUT_GAP } from '../consts'

export const useChangePositionsOnScroll = (
  {
    parentElement,
    childElement,
    hasBottomSpace = true,
    checkPositionsOnScroll = true
  }: {
    parentElement: HTMLElement | null
    childElement: HTMLElement | null
    hasBottomSpace?: boolean
    checkPositionsOnScroll?: boolean
  }
): null => {
  const positionElement = () => {
    const elemDimensions = parentElement?.getBoundingClientRect()
    const childElementDimensions = childElement?.getBoundingClientRect()

    if (childElementDimensions && elemDimensions && childElement) {
      if (hasBottomSpace) {
        childElement.style.top = elemDimensions.bottom + 'px'
      } else {
        childElement.style.bottom =
          window.innerHeight - elemDimensions.top + DROPDOWN_AND_INPUT_GAP + 'px'
      }
    }
  }
  useEffect(() => {
    if (childElement && checkPositionsOnScroll) {
      window.addEventListener('scroll', positionElement, true)

      return () => {
        window.removeEventListener('scroll', positionElement, true)
      }
    }
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
