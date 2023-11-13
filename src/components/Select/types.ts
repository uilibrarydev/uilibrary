import { ReactElement } from 'react'
import { TButtonPropTypes } from '../Button/types'

interface TSelectBaseProps {
  error?: string
  isLoading?: boolean
  disabled?: boolean
  label?: string | JSX.Element
  placeHolder?: string
  isRequiredField?: boolean
  labelLeftIconProps?: {
    name: string
    size?: TIconSize
    className?: string
    onClick?: TClickHandler
  }
  optionRightIconComponent?: (value: TItemValue) => ReactElement
  labelRightIconComponent?: (value: TItemValue) => ReactElement
  avatar?: string
  size?: 'small' | 'large'
  className?: string
}
export interface TNestedSelectProps {
  options: TSelectOptions
  isRequiredField?: boolean
  label?: string | JSX.Element
  placeHolder?: string
  initialSelectedFolderIds?: TItemValue[]
  setSelectedValue: (value: TSelectOption | null) => void
  selected?: TSelectOption | null
  optionRightIconComponent?: (value: TItemValue) => ReactElement
  labelRightIconComponent?: (value: TItemValue) => ReactElement
  avatar?: string
  labelAddons?: JSX.Element
}

export type TSelectTranslations = {
  emptyListMainMessage: string
  overflowText?: string
  searchInputPlaceHolder?: string
  emptyListSecondaryMessage?: string
  selectAllLabel?: string
  clearAllLabel?: string
  innerLabel?: string
}

interface TMultiSelectCompProps extends IFormCompProps, TSelectBaseProps {
  maxSelectCount: number
  isSearchAvailable: boolean
  helperText?: string
  translations: TSelectTranslations
  selectedValues: TSelectedValue[]
  setSelectedValues: (values: TSelectedValue[]) => void
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
}

export interface TMultySingleTabPropTypes extends TMultiSelectCompProps {
  options: TSelectOptions
}

export interface TMultiSelectGroupedProps extends TMultiSelectCompProps {
  options: TSelectGroupOptions
}

export interface TMultiSelectPropTypes extends IFormCompProps, TSelectBaseProps {
  helperText?: string
  maxSelectCount?: number
  withTabs?: boolean
  isGrouped?: boolean
  selectedItems?: TSelectedValue[]
  translations: TSelectTranslations
  options: TSelectOptions | TSelectGroupOptions
  setSelectedItems?: (items: TSelectedValue[]) => void
  footerButtonProps: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  labelAddons?: JSX.Element
  className?: string
}

export interface TSingleSelectPropTypes extends IFormCompProps, TSelectBaseProps {
  options: TSelectOptions
  selectedItem?: TItemValue
  setSelectedItem?: (items: TItemValue | undefined) => void
  withSearch?: boolean
  outerHelperText?: string
  innerHelperText?: string
  labelAddons?: JSX.Element
}

export type TSelectFooterPropTypes = {
  buttonProps: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
  onCancel: () => void
  onApply: () => void
}

export interface TFilterProps extends IFormCompProps, TSelectBaseProps {
  isLoading?: boolean
  withTabs: boolean
  isGrouped: boolean
  isOpen: boolean
  options: TSelectOptions | TSelectGroupOptions
  selectedItems: TSelectedValue[]
  setSelectedItems: (items: TSelectedValue[]) => void
  footerButtonProps?: {
    cancel: TButtonPropTypes
    confirm: TButtonPropTypes
  }
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
  optionRightIconComponent?: (value: TItemValue) => ReactElement
  labelRightIconComponent?: (value: TItemValue) => ReactElement
  // closeHandler: () => void
  filterValue: string
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
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
  optionRightIconComponent?: (value: TItemValue) => ReactElement
  labelRightIconComponent?: (value: TItemValue) => ReactElement
  filterValue: string
  onItemSelect: (item: TSelectedValue) => void
  onItemDeselect: (item: TSelectedValue) => void
  checkIsSelected: (item: TItemValue) => boolean
}
