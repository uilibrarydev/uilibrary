import { useEffect } from 'react'

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

  return null
}
