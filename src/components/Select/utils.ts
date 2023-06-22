import { getStringWidth } from '../../utils'

export const incrementOverflowedinitial = (
  initial: string,
  currentOverflowedLength: number
): string => {
  if (initial.indexOf('+') !== -1) {
    return initial.replace(
      `+${currentOverflowedLength - 1}`,
      `+${initial} ... +${currentOverflowedLength}`
    )
  }
  return `${initial} ... +${currentOverflowedLength}`
}

export const DROPDOWN_MAX_HEIGHT = 260

export const checkIsValueOverflowed = (value: string, width: number): boolean => {
  const elemWidth = getStringWidth(value, 14)
  return elemWidth > width - 80 // padding and width of (+number)
}
