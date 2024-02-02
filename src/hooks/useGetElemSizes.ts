import { RefObject } from 'react'

type TSizes = {
  width: number
  height: number
  scrollHeight: number
}

interface TRef extends RefObject<HTMLElement> {
  clientWidth: number
  clientHeight: number
  scrollHeight: number
}

export const useGetElemSizes = (elemRef: HTMLElement | TRef | null): TSizes => {
  if (!elemRef) {
    return {
      width: 0,
      height: 0,
      scrollHeight: 0
    }
  }

  return {
    width: elemRef.clientWidth,
    scrollHeight: elemRef.scrollHeight,
    height: elemRef.clientHeight
  }
}
