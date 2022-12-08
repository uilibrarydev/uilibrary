export type TFormFieldPropTypes = {
  component: (props: InputCustomPropTypes | TFileUploadPropTypes) => JSX.Element | null
  name: string
  label?: string
  allowedTypes?: Array<string>
  getFiles?: (files: FileList) => void
  isControlled?: boolean
  isNeedChangeHandler?: boolean
}
