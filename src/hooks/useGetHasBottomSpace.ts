import { useGetElemPositions } from './useGetElemPositions'
import { useGetElemSizes } from './useGetElemSizes'

export const useGetHasBottomSpace = ({
  dropdownContainer,
  inputRef
}: {
  dropdownContainer: HTMLDivElement | null
  inputRef: HTMLInputElement | null
}): boolean => {
  const { height } = useGetElemSizes(dropdownContainer)

  const { bottom: inputBottom } = useGetElemPositions(inputRef)

  return height < window.innerHeight - inputBottom
}
