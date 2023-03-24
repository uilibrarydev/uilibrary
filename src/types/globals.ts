export type TItemValue = string | number | null
declare type TItemLabel = string | number

export type TClickHandler = (e: TClickEventType) => void

export type TSelectOption = {
  value: TItemValue
  label: TItemLabel
  meta?: string
  disabled?: boolean
}

export type TSelectOptions = TSelectOption[]

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
  | TItemValue
  | File
  | Date
  | TRangePickerValues
  | null
  | TItemValue[]
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
