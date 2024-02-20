type TPositionReturnTypes = {
  left: number
  top: number
  bottom: number
  right: number
  x?: number
  y?: number
}

export const useGetElemPositions = (elemRef: HTMLElement | null): TPositionReturnTypes => {
  if (!elemRef || !elemRef.getBoundingClientRect) {
    return {
      left: 0,
      top: 0,
      bottom: 0,
      right: 0
    }
  }

  const elemDimensions = elemRef.getBoundingClientRect()

  return {
    left: elemDimensions.left,
    right: elemDimensions.right,
    top: elemDimensions.top,
    bottom: elemDimensions.bottom
  }
}
