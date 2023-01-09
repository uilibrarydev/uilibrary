import React, { useRef, useState } from 'react'
import Icon from '../Icon'
import { useOnOutsideClick } from '../../hooks'
import { motion } from 'framer-motion'
import { TSelectPropTypes, TSelectOption } from './types'
import './index.scss'

const Select = (props: TSelectPropTypes): JSX.Element => {
  const {
    options,
    placeHolder,
    value = { value: '', label: '' },
    onSelect,
    setFieldValue,
    name
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
      setFieldValue(name, item)
    }
    closeDropdown()
  }

  return (
    <div className="select-container" ref={ref}>
      <div
        className={`selected-item-container ${isOpen ? 'opened' : 'closed'}`}
        onClick={toggleIsOpen}
      >
        <div className="select-item ">{value ? value.label : placeHolder}</div>

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
