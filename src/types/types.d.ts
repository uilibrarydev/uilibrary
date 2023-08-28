import { TIconTypes } from '../components/Icon/types'

export {}

declare global {
  type TItemValue = string | number | null
  type TSelectedValue = { value: TItemValue, label: TItemLabel }
  declare type TItemLabel = string | number

  type TClickHandler = (e: TClickEventType) => void
  type TSelectIconProps = {
    type?: TIconTypes
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
    | File[]
    | Date
    | TRangePickerValues
    | null
    | TItemValue[]
    | TSelectedValue[]
  declare type TOnChange = (event: TChangeEventType) => void

  // Props which will pass FormField to component
  interface IFormCompProps {
    hasError?: boolean
    isValid?: boolean
    value?: TFormValue
    onChange?: TOnChange
    dataId?: string
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
    hasTriangle?: boolean
    initialPosition: TTooltipPosition
    elemRef: HTMLElement | null
    tooltipRef: HTMLElement | null
  }
  type TCallBackFn = () => void
}
