import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TItemSelectProps } from './types'
import classNames from 'classnames'
import { Image } from '../Image'
import { Radio } from '../Radio'

export const ItemSelect = (props: TItemSelectProps): ReactElement => {
  const {
    rightIconProps,
    leftIconProps,
    label,
    image,
    disabled,
    className,
    handleChange,
    name,
    value,
    itemValue,
    setFieldValue
  } = props
  const selected = itemValue === value
  const itemSelectStyle = classNames(
    `item-select ${disabled ? 'item-select--disabled' : selected ? 'item-select--selected' : ''}`,
    className
  )
  const iconProps = selected ? rightIconProps : undefined
  const handleCardSelectValue = (selected: number | string) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true })
    }
    handleChange?.(selected)
  }

  const handleCardSelect = () => {
    if (!disabled && itemValue) {
      handleCardSelectValue(itemValue)
    }
  }

  return (
    <div className={itemSelectStyle} onClick={handleCardSelect}>
      {image || leftIconProps ? (
        <div className={'item-select__left mr-12'}>
          {image ? (
            <div
              className={'item-select__image flexbox align-items--center justify-content--center'}
            >
              <Image imagePath={image} />
            </div>
          ) : leftIconProps ? (
            leftIconProps
          ) : null}
        </div>
      ) : null}
      <div className={'item-select__content text-truncate'}>
        <Text type={disabled ? 'disabled' : 'primary'} className={'full-width text-truncate'}>
          <>{label}</>
        </Text>
      </div>
      <Radio
        value={itemValue}
        name={name}
        isSelected={selected}
        disabled={disabled}
        className={'ml-16'}
        iconProps={iconProps}
      />
    </div>
  )
}
