import { useGetElemPositions } from './useGetElemPositions'
import { useGetElemSizes } from './useGetElemSizes'

export const useGetHasTopSpace = ({
  element,
  input
}: {
  element: HTMLDivElement | null
  input: HTMLInputElement | null
}): boolean => {
  const { height } = useGetElemSizes(element)

  const { top: inputTop } = useGetElemPositions(input)
  return inputTop > height
}

export const useGetHasBottomSpace = ({
  element,
  input
}: {
  element: HTMLDivElement | null
  input: HTMLInputElement | null
}): { hasBottomSpace: boolean; bottomSpace: number } => {
  const { height } = useGetElemSizes(element)

  const { bottom: inputBottom } = useGetElemPositions(input)

  return {
    hasBottomSpace: height < window.innerHeight - inputBottom,
    bottomSpace: window.innerHeight - inputBottom
  }
}
