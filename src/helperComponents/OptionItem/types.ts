import { ReactElement } from 'react'
import { TTooltipProps } from '../../components/Tooltip/types'
import { TItemValue, TSelectedValue, TSelectIconProps, TSelectOption } from '../../types/types'

export type TSelectItemProps = {
  isSelected?: boolean
  data: TSelectOption
  className?: string
  onClick: (itemValue: TSelectedValue) => void
  labelLeftIconProps?: TSelectIconProps
  OptionRightIconComponent?: (value: TItemValue) => ReactElement
  LabelRightIconComponent?: (value: TItemValue) => ReactElement
  avatar?: string
  disabled?: boolean
  isCheckbox?: boolean
  tooltipAddons?: TTooltipProps
  dataId?: string
}
