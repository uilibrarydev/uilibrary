import React, { useRef, useState } from 'react'
import Icon from '../Icon'
import { useOnOutsideClick } from '../../hooks'
import { motion } from 'framer-motion'
import { TSelectPropTypes, TSelectOption } from './types'
import './index.css'

const Select = (props: TSelectPropTypes): JSX.Element => {
  const { options, selectedValue, onSelect } = props

  const [isOpen, setIsOpen] = useState(false)

  const ref = useRef(null)

  const closeDropdown = () => setIsOpen(false)

  const toggleIsOpen = () => setIsOpen(!isOpen)

  useOnOutsideClick(ref, closeDropdown)

  const onItemSelect = (item: TSelectOption) => {
    onSelect(item)
    closeDropdown()
  }

  return (
    <div className="select-container" ref={ref}>
      <div className="selected-item-container" onClick={toggleIsOpen}>
        <div className="select-item">{selectedValue.label}</div>

        <motion.div
          animate={{ rotate: isOpen ? 0 : 180 }}
          transition={{ type: 'spring', damping: 30, stiffness: 800 }}
        >
          <Icon size="small" name="arrow_up" color="gray" />
        </motion.div>
      </div>

      {/* <AnimatePresence initial={false}> */}
      {isOpen && (
        <motion.div
          className="select-options-wrapper"
          initial={{ y: -70, opacity: 0 }}
          animate={{ y: 0, opacity: 1, zIndex: 7 }}
          exit={{ y: -70, opacity: 0, zIndex: -99 }}
          transition={{
            type: 'spring',
            damping: 30,
            stiffness: 800
          }}
        >
          {options.map((item) => {
            const { value, label } = item
            return (
              <span className="select-option" key={value} onClick={() => onItemSelect(item)}>
                {label}
              </span>
            )
          })}
        </motion.div>
      )}
      {/* </AnimatePresence> */}
    </div>
  )
}

export default Select
