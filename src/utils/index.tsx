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

export const setTranslationValue = (translation: string, value: string | number): string => {
  return translation.replace('%s', value.toString())
}

export const openFileInNewWindow = (e: TClickEventType, file: File) => {
  e.preventDefault()
  const fileURL = URL.createObjectURL(file)
  return window.open(fileURL)
}

export const getFormattedValues = (files: File[]) => {
  const readers: FileReader[] = []

  for (let i = 0; i < files.length; i++) {
    const reader = new FileReader()
    reader.onloadend = () => {
      console.log(reader.result)
    }
    reader.readAsDataURL(files[i])
    readers.push(reader)
  }

  return readers
}

export const uniqueFiles = (files: File[]) =>
  files.filter((file, index, self) => {
    return index === self.findIndex((f) => f.name === file.name)
  })
