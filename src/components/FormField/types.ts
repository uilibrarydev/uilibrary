export interface TFormFieldPropTypes {
  component: (props: InputCustomProps | TFileUploadProps | TCheckboxProps) => JSX.Element | null
  name: string
  label?: string
  allowedTypes?: Array<string>
  getFiles?: (files: FileList) => void
  isControlled?: boolean
  isNeedChangeHandler?: boolean
  customOnChange: (event: TInputChangeEventType | Date) => void
}
