export interface TFileUploadProps extends IFormCompProps {
  allowedTypes?: string
  label?: string | JSX.Element
  buttonText?: string | JSX.Element
  getFiles?: (files: File[]) => void
  handleFileClick?: (file: File) => void
  removeFiles?: (file: File) => void
  toBase64?: boolean
  required?: boolean
  disabled?: boolean
  isFileUploaded?: boolean
  withFilePreview?: boolean
  uploadedFiles?: File[]
  multiple?: boolean
}
