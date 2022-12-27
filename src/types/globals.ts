export interface TCheckboxProps {
  label?: string | JSX.Element
  value: boolean
  onClick: (isChecked: boolean) => void
  name?: string
  setFieldValue?: TSetValue
}

export type TComponentProps = TFileUploadProps | InputCustomProps | TCheckboxProps

export type TRegister = (name: string) => {
  onChange: (event: TInputChangeEventType | Date | undefined) => void
}
