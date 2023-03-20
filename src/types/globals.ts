declare type TSelectedValue = string | number

export type TSelectOption = {
  value: TSelectedValue
  label: TSelectedValue
}

export type TRangePickerValues = [Date | null, Date | null]

export type TClickEventType = React.MouseEvent<HTMLElement>
export type TChangeEventType =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>

declare type TFormValue =
  | string
  | number
  | boolean
  | TSelectOption
  | File
  | Date
  | TRangePickerValues
  | null
declare type TOnChange = (event: TChangeEventType) => void

// Props which will pass FormField to component
export interface IFormCompProps {
  value?: TFormValue
  onChange?: TOnChange
  name?: string
  setFieldValue?: (
    name: string,
    value: TFormValue,
    shouldValidate?: { shouldValidate: boolean }
  ) => void
}

export type TRegister = (name: string) => {
  onChange: TOnChange
}

export type TTooltipPosition =
  | 'top-left'
  | 'top-center'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-center'
  | 'bottom-right'
  | 'middle-left'
  | 'middle-right'

export type TTooltipInfo = {
  initialPosition: TTooltipPosition
  elemRef: HTMLElement | null
  tooltipRef: HTMLElement | null
}
