export {}

declare global {
  type TItemValue = string | number | null
  declare type TItemLabel = string | number

  type TClickHandler = (e: TClickEventType) => void
  type TSelectIconProps = {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  type TSelectOption = {
    value: TItemValue
    label: TItemLabel
    meta?: string
    disabled?: boolean
    children?: TSelectOption[]
  }

  type TSelectOptions = TSelectOption[]

  type TSelectGroupOption = {
    title: string
    data: TSelectOptions
  }

  type TSelectGroupOptions = TSelectGroupOption[]

  type TRangePickerValues = [Date | null, Date | null]

  type TClickEventType = React.MouseEvent<HTMLElement>
  type TChangeEventType =
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
  interface IFormCompProps {
    value?: TFormValue
    onChange?: TOnChange
    name?: string
    setFieldValue?: (
      name: string,
      value: TFormValue,
      shouldValidate?: { shouldValidate: boolean }
    ) => void
  }

  type TRegister = (name: string) => {
    onChange: TOnChange
  }

  type TTooltipPosition =
    | 'top-left'
    | 'top-center'
    | 'top-right'
    | 'bottom-left'
    | 'bottom-center'
    | 'bottom-right'
    | 'middle-left'
    | 'middle-right'

  type TTooltipInfo = {
    initialPosition: TTooltipPosition
    elemRef: HTMLElement | null
    tooltipRef: HTMLElement | null
  }
  type TCallBackFn = () => void
}
