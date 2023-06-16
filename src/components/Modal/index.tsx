import React, { useRef } from 'react'
import { motion } from 'framer-motion'

import { AnimatedComponent } from '../../helperComponents/AnimatePresenceWrapper'
import { useOnOutsideClick } from '../../hooks'

import { Button, Text } from '../index'

import { TModalPropTypes } from './types'
import '../../assets/styles/components/_modal.scss'

const Modal = (props: TModalPropTypes): JSX.Element | null => {
  const {
    isOpen,
    onClose,
    onSumbit,
    title,
    closeIcon,
    className = '',
    size = 'small',
    withFooter = true,
    buttonProps = {
      confirm: {
        buttonText: 'Save'
      },
      cancel: { buttonText: 'Cancel' }
    },
    children
  } = props
  const containerRef = useRef(null)
  useOnOutsideClick(containerRef.current, onClose)

  if (!isOpen) {
    return null
  }

  const handleSubmit = () => {
    onSumbit()
    onClose()
  }
  return (
    <AnimatedComponent>
      {isOpen ? (
        <motion.div
          className={`modal modal--${size} ${className}`}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="modal__container" ref={containerRef}>
            {title ? (
              <div className="modal__header">
                <Text className="modal__title" weight="semibold" lineHeight="large" size="medium">
                  {title}
                </Text>
                {closeIcon ? (
                  <Button
                    type="tertiary"
                    size="small"
                    iconProps={{ name: 'close' }}
                    onClick={handleSubmit}
                  />
                ) : null}
              </div>
            ) : null}

            <div className="modal__content">{children}</div>
            {withFooter ? (
              <div className="modal__footer">
                <Button
                  {...(buttonProps.cancel || {})}
                  type="tertiary"
                  size="medium"
                  className="mr-12"
                  onClick={onClose}
                />
                <Button
                  {...buttonProps.confirm}
                  type="primary"
                  size="medium"
                  onClick={handleSubmit}
                />
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatedComponent>
  )
}

export default Modal
