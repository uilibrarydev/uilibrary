declare type TSelectedValue = string | number

export type TSelectOption = {
  value: TSelectedValue
  label: TSelectedValue
}

export type TRangePickerValues = [Date | null, Date | null]

export type TClickEventType = React.MouseEvent<HTMLElement>
export type TChangeEventType = React.ChangeEvent<HTMLInputElement>

declare type TFormValue = string | boolean | TSelectOption | File | Date | null
declare type TOnChange = (event: TChangeEventType | Date | TRangePickerValues) => void

// Props which will pass FormField to component
export interface IFormCompProps {
  formValue?: TFormValue
  onChange?: TOnChange
  name?: string
  setFieldValue?: (name: string, value: TFormValue) => void
}

export type TRegister = (name: string) => {
  onChange: TOnChange
}
