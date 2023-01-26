import { IFormCompProps } from '../../types/globals'

export interface TFileUploadProps extends IFormCompProps {
  allowedTypes?: Array<string>
  label?: string | JSX.Element
  getFiles?: (files: File) => void
  toBase64?: boolean
  required?: boolean
}
