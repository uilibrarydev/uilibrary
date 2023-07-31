import { TButtonPropTypes } from '../Button/types'

export interface TMultiSelectPropTypes extends IFormCompProps {
  emptyListMessage?: string
  isLoading?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedValues: TItemValue[]
  setSelectedValues: (values: TItemValue[]) => void
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  selectButtonTexts?: {
    selectAll: string
    clearAll: string
  }
  toggleDropdown: () => void
  checkIsValueOverflowed: (value: string) => boolean
  isOpen: boolean
  onItemSelect: (item: TItemValue) => void
  onItemDeselect: (item: TItemValue) => void
  footer: JSX.Element
}

export interface TNestedSelectProps extends IFormCompProps {
  options: TSelectOptions
  isRequiredField?: boolean
  label?: string | JSX.Element
  placeHolder?: string
  selectedItems?: TItemValue[]
  setSelectedValue: (value: TItemValue) => void
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  avatar?: string
}

export interface TMultiSelectGroupedProps extends IFormCompProps {
  emptyListMessage?: string
  isLoading?: boolean
  label?: string | JSX.Element
  options: TSelectGroupOptions
  placeHolder?: string
  selectedValues: TItemValue[]
  setSelectedValues: (values: TItemValue[]) => void
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  avatar?: string
  optionRightIconComponent?: JSX.Element
  labelRightIconComponent?: JSX.Element
  selectButtonTexts?: {
    selectAll: string
    clearAll: string
  }
  toggleDropdown: () => void
  checkIsValueOverflowed: (value: string) => boolean
  isOpen: boolean
  onItemSelect: (item: TItemValue) => void
  onItemDeselect: (item: TItemValue) => void
  footer: JSX.Element
}

export interface TMultiSelectTypes extends IFormCompProps {
  emptyListMessage?: string
  isNestedList?: boolean
  withTabs?: boolean
  isGrouped?: boolean
  label?: string | JSX.Element
  options: TSelectOptions | TSelectGroupOptions
  placeHolder?: string
  selectedItems?: [TItemValue]
  setSelectedItems?: (items: TItemValue[]) => void
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

export interface TMultiSelectContentProps {
  isAnyItemSelected: boolean
  setSelectedValues: (values: TItemValue[]) => void
  checkIsSelected: (item: TItemValue) => boolean
  options: TSelectOptions
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
  onItemSelect: (item: TItemValue) => void
  onItemDeselect: (item: TItemValue) => void
  selectButtonTexts?: {
    selectAll: string
    clearAll: string
  }
}

export interface TSelectPropTypes extends IFormCompProps {
  error?: string
  isLoading?: boolean
  withFooter?: boolean
  label?: string | JSX.Element
  options: TSelectOptions
  placeHolder?: string
  selectedItem?: TItemValue
  setSelectedItem?: (items: TItemValue | undefined) => void
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

export interface TFilterProps extends IFormCompProps {
  isLoading?: boolean
  withTabs: boolean
  isGrouped: boolean
  isOpen: boolean
  options: TSelectOptions | TSelectGroupOptions
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

export interface TFilterDropdownContentProps extends IFormCompProps {
  options: TSelectOptions
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
  // closeHandler: () => void
  filterValue: string
  onItemSelect: (item: TItemValue) => void
  onItemDeselect: (item: TItemValue) => void
  checkIsSelected: (item: TItemValue) => boolean
}
export interface TFilterGroupDropdownContentProps extends IFormCompProps {
  options: TSelectGroupOptions
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
  filterValue: string
  onItemSelect: (item: TItemValue) => void
  onItemDeselect: (item: TItemValue) => void
  checkIsSelected: (item: TItemValue) => boolean
}
