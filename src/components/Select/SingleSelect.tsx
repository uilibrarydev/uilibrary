import React, { useCallback, useMemo, useRef, useState } from 'react'
import { useOnOutsideClick } from '../../hooks'
import { TSelectPropTypes } from './types'
import '../../assets/styles/components/_select.scss'
import { SelectItem } from './SelectItem'
import Footer from './Footer'
import { TClickEventType, TItemValue, TSelectOption } from '../../types/globals'
import Input from '../Input'
import { useGetElemSizes } from '../../hooks/useGetElemSizes'
import { Loading } from './Loading'

const SingleSelect = (props: TSelectPropTypes): JSX.Element | null => {
  const {
    isLoading,
    options,
    placeHolder,
    value,
    label,
    setFieldValue,
    name,
    isRequiredField,
    labelLeftIconProps,
    optionRightIconComponent,
    labelRightIconComponent,
    avatar,
    withFooter,
    footerButtonProps = {
      confirm: {
        buttonText: 'Apply'
      },
      cancel: { buttonText: 'Cancel' }
    },
    selectedItem,
    setSelectedItem
  } = props

  const [isOpen, setIsOpen] = useState(false)
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  const selected = (value as TItemValue) || selectedItem || null

  const [currentSelection, setCurrentSelection] = useState<TItemValue | null>(selected)

  const closeDropdown = () => setIsOpen(false)
  const openDropdown = () => setIsOpen(true)

  useOnOutsideClick(containerRef, closeDropdown)

  const submitSelectedValue = (value: TItemValue | null) => {
    if (setSelectedItem) {
      setSelectedItem(value)
    }
    if (name && setFieldValue) {
      setFieldValue(name, value, { shouldValidate: true })
    }

    closeDropdown()
  }

  const onItemSelect = useCallback(
    (value: TItemValue) => {
      setCurrentSelection(value)
      if (withFooter) {
        return
      }
      submitSelectedValue(value)
    },
    [withFooter, submitSelectedValue]
  )

  const onItemDeselect = useCallback(() => {
    setCurrentSelection(null)
    if (withFooter) {
      return
    }
    submitSelectedValue(null)
    closeDropdown()
  }, [withFooter, submitSelectedValue])

  const open = (e?: TClickEventType) => {
    const result = e?.target as HTMLDivElement
    if (e && result.className && result.className.indexOf('icon-') !== -1) {
      setIsOpen(!isOpen)
      e.preventDefault()
      return
    } else {
      openDropdown()
    }
  }

  const selectedItemLabel = useMemo(() => {
    const currentValue = value || currentSelection
    const selected = options.find((item) => item.value === currentValue)
    return selected?.label.toString() || ''
  }, [options, value, currentSelection])

  const applySelectedItems = () => {
    submitSelectedValue(currentSelection)
    closeDropdown()
  }

  const cancelCelectedItems = () => {
    setCurrentSelection(selectedItem || null)
    closeDropdown()
  }

  const scrollRef = useRef(null)
  const { scrollHeight } = useGetElemSizes(scrollRef.current)

  return (
    <div className="select" ref={setContainerRef}>
      <div onClick={open}>
        <Input
          className="select__input"
          label={label}
          required={isRequiredField}
          rightIconProps={{
            name: isOpen ? 'caret-up' : 'caret-down'
          }}
          placeholder={placeHolder}
          currentValue={selectedItemLabel}
        />
      </div>

      {isOpen && (
        <div className="select__options">
          {isLoading ? (
            <Loading />
          ) : (
            <>
              <div
                ref={scrollRef}
                className={`select__options__scroll scrollbar scrollbar--vertical  ${
                  scrollHeight > 260 ? 'mr-6' : ''
                }`}
              >
                {options.map((item: TSelectOption) => {
                  const isSelected = item.value === currentSelection
                  return (
                    <SelectItem
                      data={item}
                      key={item.value}
                      onClick={isSelected ? onItemDeselect : onItemSelect}
                      labelLeftIconProps={labelLeftIconProps}
                      optionRightIconComponent={optionRightIconComponent}
                      labelRightIconComponent={labelRightIconComponent}
                      avatar={avatar}
                      disabled={item.disabled}
                      isSelected={isSelected}
                    />
                  )
                })}
              </div>
              {withFooter ? (
                <Footer
                  buttonProps={footerButtonProps}
                  onCancel={cancelCelectedItems}
                  onApply={applySelectedItems}
                />
              ) : null}
            </>
          )}
        </div>
      )}
    </div>
  )
}

export default SingleSelect
