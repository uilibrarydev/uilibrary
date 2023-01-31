import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import Icon from '../Icon'
import Label from '../../helperComponents/Label'
import { useOnOutsideClick } from '../../hooks'
import { TSelectPropTypes, TSelectOption } from './types'
import './index.scss'

const Select = (props: TSelectPropTypes): JSX.Element | null => {
  const {
    options,
    placeHolder,
    value,
    label,
    selectedValue = { value: '', label: '' },
    onSelect,
    setFieldValue,
    name,
    required
  } = props

  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)

  const closeDropdown = () => setIsOpen(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  useOnOutsideClick(ref, closeDropdown)

  const onItemSelect = (item: TSelectOption) => {
    if (onSelect) {
      onSelect(item)
    }
    if (name && setFieldValue) {
      setFieldValue(name, item, { shouldValidate: true })
    }
    closeDropdown()
  }

  const currentvalue = value || selectedValue

  return (
    <div className="select-container" ref={ref}>
      <Label text={label} required={required} />

      <div
        className={`selected-item-container ${isOpen ? 'opened' : 'closed'}`}
        onClick={toggleIsOpen}
      >
        <div className="select-item ">
          {currentvalue && typeof currentvalue === 'object' && 'label' in currentvalue
            ? currentvalue.label
            : placeHolder}
        </div>

        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ type: 'spring', damping: 30, stiffness: 800 }}
        >
          <Icon size="small" name="arrow_up" color="dropdownGray" />
        </motion.div>
      </div>
      {isOpen && (
        <div className="select-options-wrapper">
          {options.map((item) => {
            const { value, label } = item
            return (
              <span className="select-option" key={value} onClick={() => onItemSelect(item)}>
                {label}
              </span>
            )
          })}
        </div>
      )}
    </div>
  )
}

export default Select
