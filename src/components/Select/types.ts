import { IFormCompProps, TClickHandler, TItemValue, TSelectOptions } from '../../types/globals'
import { TButtonPropTypes } from '../Button/types'

export interface TMultiSelectPropTypes extends IFormCompProps {
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedItems: [TItemValue]
  setSelectedItems: (items: TItemValue[]) => void
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  selectButtonTexts?: {
    selectAll: string
    clearAll: string
  }
}

export interface TSelectPropTypes extends IFormCompProps {
  withFooter?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedItem: TItemValue
  setSelectedItem: (items: TItemValue) => void
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
  footerButtonProps?: {
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

export interface TFilterDropdownProps extends IFormCompProps {
  isOpen: boolean
  options: TSelectOptions
  selectedItems: [TItemValue]
  setSelectedItems: (items: TItemValue[]) => void
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  closeHandler: () => void
  parentRef: HTMLElement
}
