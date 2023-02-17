declare type TPositionReturnTypes = {
  left: number
  top: number
  bottom: number
  right?: number
  x?: number
  y?: number
}

export const useGetElemPositions = (elemRef: HTMLElement | null): TPositionReturnTypes => {
  if (!elemRef || !elemRef.getBoundingClientRect) {
    return {
      left: 0,
      top: 0,
      bottom: 0
    }
  }

  const elemDimensions = elemRef.getBoundingClientRect()

  return {
    left: elemDimensions.left + window.scrollX,
    top: elemDimensions.top + window.scrollY,
    bottom: elemDimensions.bottom + window.scrollY
  }
}
