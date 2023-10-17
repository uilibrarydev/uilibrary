import { useGetElemPositions } from './useGetElemPositions'
import { useGetElemSizes } from './useGetElemSizes'

export const useGetHasBottomSpace = ({
  element,
  input
}: {
  element: HTMLDivElement | null
  input: HTMLInputElement | null
}): boolean => {
  const { height } = useGetElemSizes(element)

  const { bottom: inputBottom } = useGetElemPositions(input)

  return height < window.innerHeight - inputBottom
}
