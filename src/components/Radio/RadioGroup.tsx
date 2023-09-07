import React, { forwardRef } from 'react'
import Radio from '.'

import { TRadioGroupProps, TRadioOptionItem } from './types'
import './index.scss'
import Label from '../../helperComponents/Label'
import classnames from 'classnames'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const RadioGroup = forwardRef((props: TRadioGroupProps, ref): JSX.Element => {
  const {
    isHorizontal = false,
    name,
    options,
    setFieldValue,
    value,
    handleChange,
    label,
    required,
    className
  } = props

  const onSelect = (selected: number | string) => {
    if (name && setFieldValue) {
      setFieldValue(name, selected, { shouldValidate: true })
    }
    if (handleChange) {
      handleChange(selected)
    }
  }

  return (
    <div
      className={classnames('radio-group', {
        'radio-group--horizontal': isHorizontal,
        'radio-group--vertical': !isHorizontal
      }, className)}
    >
      <Label className="radio-group__label" text={label} required={required} />
      <div className="radio-group__inner">
        {options.map((radioOption: TRadioOptionItem) => {
          return (
            <Radio
              label={radioOption.label}
              helperText={radioOption.helperText}
              key={radioOption.value}
              name={name}
              className="radio-group__item"
              isSelected={radioOption.value === value}
              onClick={() => onSelect(radioOption.value)}
              dataId={radioOption.dataId}
            />
          )
        })}
      </div>
    </div>
  )
})

RadioGroup.displayName = 'RadioGroup'
export default RadioGroup
