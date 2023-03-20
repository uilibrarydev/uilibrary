declare type TSizes = {
  width: number
  height: number
}

export interface TRef extends RefObject<HTMLElement> {
  clientWidth: number
  clientHeight: number
}

export const useGetElemSizes = (elemRef: HTMLElement | TRef | null): TSizes => {
  if (!elemRef) {
    return {
      width: 0,
      height: 0
    }
  }

  return { width: elemRef.clientWidth, height: elemRef.clientHeight }
}
