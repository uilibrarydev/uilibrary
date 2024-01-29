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
}): boolean => {
  const { height } = useGetElemSizes(element)
  const hasTopSpace = useGetHasTopSpace({ element, input })

  const { bottom: inputBottom } = useGetElemPositions(input)
  if (!hasTopSpace) {
    return true
  }
  return height < window.innerHeight - inputBottom
}
