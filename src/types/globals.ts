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

export type TSimpleDatePickerProps = {
  timeOnly?: boolean
  value: Date | undefined
  onChange: (date: Date) => void
}

export type TRangeDatePickerProps = {
  value: [Date | null, Date | null] | undefined
  onChange: (date: [Date | null, Date | null]) => void
}
