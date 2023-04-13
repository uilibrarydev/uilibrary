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
