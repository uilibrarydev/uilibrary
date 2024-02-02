import { TCreateErrorFieldParams } from '../types/types'

export const noop = (): void => {
  return undefined
}

export const checkIsAllowedFileSize = (allowedSize: number, fileSize: number): boolean => {
  return fileSize <= allowedSize
}

export const openFileInNewWindow = ({ e, file, handleFileClick }: TCreateErrorFieldParams) => {
  e.preventDefault()

  if (handleFileClick) {
    return handleFileClick(file)
  }

  if (file) {
    const fileURL = URL.createObjectURL(file)
    return window.open(fileURL)
  }
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

export const checkIsAllowedTypes = (allowedTypes: string, mimeType: string): boolean => {
  return allowedTypes.includes(mimeType)
}
