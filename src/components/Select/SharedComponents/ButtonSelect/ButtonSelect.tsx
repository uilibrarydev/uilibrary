import React, { ReactElement, useMemo, useRef } from 'react'
import classNames from 'classnames'
import { Button } from './Button/Button'

import {
  useGetElemPositions,
  useGetElemSizes,
  useGetHasBottomSpace,
  useGetHasTopSpace
} from '../../../../hooks'
import { TSelectWrapperProps } from '../../types'

export const ButtonSelect = (props: TSelectWrapperProps): ReactElement => {
  const {
    children,
    size,
    className,
    dropdownWidth,
    align = 'left',
    offsets,
    isOpen,
    setIsOpen,
    containerRef,
    setContainerRef,
    dropdownRef,
    setDropdownRef,
    selectedValues,
    placeHolder
  } = props

  const buttonRef = useRef<HTMLButtonElement>(null)

  const openDropdown = () => setIsOpen(true)

  const { bottom, left, top, right } = useGetElemPositions(buttonRef.current)
  const { width: containerWidth } = useGetElemSizes(containerRef)

  const { hasBottomSpace } = useGetHasBottomSpace({
    element: dropdownRef,
    input: buttonRef.current
  })

  const hasTopSpace = useGetHasTopSpace({
    element: dropdownRef,
    input: buttonRef.current
  })

  const selectedItemsLabels = useMemo(() => {
    if (!selectedValues) return ''
    if (selectedValues?.length === 0) return ''
    if (selectedValues?.length === 1) return `${selectedValues[0].label}`

    return ` ${selectedValues[0].label} +${selectedValues.length - 1}`

    return ''
  }, [selectedValues])

  return (
    <div className={classNames(`select select--${size}`, className)} ref={setContainerRef}>
      <Button
        isOpen={isOpen}
        buttonText={placeHolder || ''}
        selectedItemsLabels={selectedItemsLabels}
        onClick={openDropdown}
        refHandler={buttonRef}
        className="select_button"
      />

      {isOpen && (
        <div
          className="select__options"
          style={{
            left:
              align === 'left' ? offsets?.left || left : right - (dropdownWidth || containerWidth),
            width: dropdownWidth || containerWidth,
            top: hasBottomSpace || !hasTopSpace ? offsets?.top || bottom : 'initial',
            bottom: hasBottomSpace || !hasTopSpace ? 'initial' : window.innerHeight - top + 10
          }}
          ref={setDropdownRef}
        >
          {children}
        </div>
      )}
    </div>
  )
}
