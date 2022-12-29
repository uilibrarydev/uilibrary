import { TCheckboxProps } from '../../types/globals'
// TODO try to separate types
export interface TFormFieldPropTypes {
  component: (
    props: InputCustomProps | TFileUploadProps | TCheckboxProps | IDatePickerProps
  ) => JSX.Element | null
  name: string
  label?: string
  timeOnly?: boolean
  allowedTypes?: Array<string>
  getFiles?: (files: FileList) => void
  isControlled?: boolean
  isNeedChangeHandler?: boolean
  customOnChange?: (event: TInputChangeEventType | Date) => void
}
