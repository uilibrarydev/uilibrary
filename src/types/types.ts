import { ChangeEvent, MouseEvent } from 'react'

export type TIconSize = 'xxsmall' | 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge'

export type TItemValue = string | number | null

export type TSelectedValue = { value: TItemValue; label: TItemLabel }

export type TItemLabel = string | number

export type TClickHandler = (e: TClickEventType) => void

export type TIconTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'selected'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

export type TSelectIconProps = {
  type?: TIconTypes
  name: string
  size?: TIconSize
  className?: string
  onClick?: TClickHandler
}

export type TSelectOption = {
  value: TItemValue
  label: TItemLabel
  meta?: string
  disabled?: boolean
  children?: TSelectOption[]
}

export type TSelectOptions = TSelectOption[]

export type TSelectGroupOption = {
  title: string
  data: TSelectOptions
}

export type TSelectGroupOptions = TSelectGroupOption[]

export type TRangePickerValues = [Date | null, Date | null]

export type TClickEventType = MouseEvent<HTMLElement>

export type TChangeEventType = ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>

export type TFormValue =
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

export type TOnChange = (event: TChangeEventType) => void

export interface IFormCompProps {
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
  hasTriangle?: boolean
  initialPosition: TTooltipPosition
  elemRef: HTMLElement | null
  tooltipRef: HTMLElement | null
}

export type TCallBackFn = () => void

export type TDirtyFields = Partial<Readonly<{ [x: string]: unknown }>>

export type TImageMimeTypes =
  | 'image/jpeg'
  | 'image/jpg'
  | 'image/png'
  | 'image/heic'
  | 'image/heif'
  | 'application/pdf'

export type TCreateErrorFieldParams = {
  e: MouseEvent<HTMLElement>
  file: File
  handleFileClick?: (file: File) => void
}
