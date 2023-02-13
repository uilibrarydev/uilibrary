declare type TPositionReturnTypes = {
  left: number
  top: number
  bottom: number
  right?: number
  x?: number
  y?: number
}

export const useGetElemPosition = (elemRef: HTMLElement | null): TPositionReturnTypes => {
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

declare type TSizes = {
  width: number
  height: number
}

export interface TRef extends RefObject<HTMLDivElement> {
  clientWidth: number
  clientHeight: number
}

export const useGetElemSizes = (elemRef: HTMLDivElement | TRef | null): TSizes => {
  if (!elemRef) {
    return {
      width: 0,
      height: 0
    }
  }

  return { width: elemRef.clientWidth, height: elemRef.clientHeight }
}
