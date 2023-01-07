import { TCheckboxProps } from '../../types/globals'
// TODO try to separate types
export interface TFormFieldPropTypes {
  component: (props: InputCustomProps | TFileUploadProps | TCheckboxProps) => JSX.Element | null
  name: string
  label?: string | JSX.Element
  timeOnly?: boolean
  allowedTypes?: Array<string>
  getFiles?: (files: FileList) => void
  isControlled?: boolean
  isNeedChangeHandler?: boolean
  mask?: string
  placeholder?: string
  customOnChange?: (event: TInputChangeEventType | Date) => void
}
