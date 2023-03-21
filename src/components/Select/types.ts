import { IFormCompProps, TClickHandler, TItemValue, TSelectOptions } from '../../types/globals'
import { TButtonPropTypes } from '../Button/types'

export interface TSelectPropTypes extends IFormCompProps {
  isOptionDisabled?: boolean
  withSearch?: boolean
  withFooter?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedItems: [TItemValue]
  setSelectedItems: (items: TItemValue[]) => void
  required?: boolean
  multiSelect?: boolean
  leftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  rightIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  itemOptions?: {
    iconName: string
    onClick: TClickHandler
  }
  avatar?: string
  buttonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
}

export type TSelectFooterPropTypes = {
  buttonProps: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  onCancel: () => void
  onApply: () => void
}
