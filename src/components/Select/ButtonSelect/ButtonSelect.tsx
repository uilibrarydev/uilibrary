import React, { ReactElement, useRef, useId, useState } from 'react'
import { Button } from '../../Button'
import classNames from 'classnames'
import { TButtonSelectPropTypes } from '../types'
import { Loading } from '../SharedComponents'
import { OptionItem } from '../../../helperComponents'
import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace,
  useOnOutsideClick
} from '../../../hooks'

export const ButtonSelect = (props: TButtonSelectPropTypes): ReactElement => {
  const {
    buttonProps,
    size,
    className,
    isLoading,
    options,
    name,
    setSelectedItem,
    setFieldValue,
    isRequiredField,
    selectedItem,
    labelLeftIconProps,
    tooltipAddons,
    dropdownWidth,
    avatar,
    labelRightIconComponent,
    optionRightIconComponent,
    align = 'left',
    value,
    offsets
  } = props

  const currentSelection = (value as TItemValue) || selectedItem

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const scrollRef = useRef<HTMLDivElement>(null)
  const buttonRef = useRef<HTMLButtonElement>(null)
  const [dropdownRef, setDropdownRef] = useState<HTMLDivElement | null>(null)

  const { scrollHeight } = useGetElemSizes(scrollRef.current)

  const openDropdown = () => setIsOpen(true)
  const closeDropdown = () => setIsOpen(false)

  useOnOutsideClick(containerRef.current, closeDropdown, isOpen, useId())

  const onItemDeselect = () => onItemSelect(null)

  const onItemSelect = (value: TItemValue) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value)
    }

    closeDropdown()
  }

  const clickHandler =
    (isSelected: boolean) =>
    ({ value }: TSelectedValue) => {
      if (!isSelected) {
        onItemSelect(value)
        return
      }
      if (!isRequiredField) {
        onItemDeselect()
      }
    }

  const { bottom, left, top, right } = useGetElemPositions(buttonRef.current)
  const { width: containerWidth } = useGetElemSizes(containerRef.current)

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: buttonRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: buttonRef.current
  })

  return (
    <div className={classNames(`select select--${size}`, className)} ref={containerRef}>
      <Button
        size={size}
        {...buttonProps}
        onClick={openDropdown}
        refHandler={buttonRef}
        className="select_button"
      />

      {isOpen && (
        <div
          className="select__options"
          style={{
            left:
              align === 'left'
                ? left
                : right - (dropdownWidth || containerWidth) - (offsets?.left || 0),
            width: dropdownWidth || containerWidth,
            top: hasBottomSpace || !hasTopSpace ? offsets?.top || bottom : 'initial',
            bottom: hasBottomSpace || !hasTopSpace ? 'initial' : window.innerHeight - top + 10
          }}
          ref={setDropdownRef}
        >
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                ref={scrollRef}
                className={classNames(
                  'select__options__scroll',
                  'scrollbar',
                  'scrollbar--vertical',
                  {
                    'mr-6': scrollHeight > 300
                  }
                )}
              >
                {options.map((item: TSelectOption) => {
                  const isSelected = item.value === currentSelection
                  return (
                    <OptionItem
                      tooltipAddons={tooltipAddons}
                      data={item}
                      key={item.value}
                      onClick={clickHandler(isSelected)}
                      labelLeftIconProps={labelLeftIconProps}
                      OptionRightIconComponent={optionRightIconComponent}
                      LabelRightIconComponent={labelRightIconComponent}
                      avatar={avatar}
                      disabled={item.disabled}
                      isSelected={isSelected}
                    />
                  )
                })}
              </div>
            </>
          )}
        </div>
      )}
    </div>
  )
}
