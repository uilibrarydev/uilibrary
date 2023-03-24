export const noop = (): void => {
  return undefined
}
export const getFont = (element: Element): { fontFamily: string; fontSize: string } => {
  const style = window.getComputedStyle(element)
  const fontFamily = style.getPropertyValue('font-family')
  const fontSize = style.getPropertyValue('font-size')
  return {
    fontFamily: fontFamily,
    fontSize: fontSize
  }
}

export const getStringWidth = (text: string, fontSize: number): number => {
  const canvas = document.createElement('canvas')
  const context = canvas.getContext('2d')
  if (!context) {
    return 0
  }
  context.font = fontSize + 'px Arial'

  const width = context.measureText(text).width

  return width
}
