import React, { useState } from 'react'
import { motion } from 'framer-motion'

import { AnimatedComponent } from '../../helperComponents/AnimatePresenceWrapper'
import { useOnOutsideClick } from '../../hooks'

import { Button, Text } from '../index'

import { TModalPropTypes } from './types'
import '../../assets/styles/components/_modal.scss'

const DESKTOP_ANIMATION = {
  initial: { opacity: 0.5, scale: 0.65 },
  animate: { opacity: 1, scale: [0.95, 1] },
  exit: {
    opacity: 0,
    scale: 0.7,
    transition: {
      duration: 0.2
    }
  },
  transition: {
    duration: 0.4,
    type: 'spring',
    damping: 55,
    stiffness: 700
  }
}

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
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  useOnOutsideClick(containerRef, onClose)

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
          transition={{ duration: 0.4 }}
        >
          <div className="modal__container" ref={setContainerRef} {...DESKTOP_ANIMATION}>
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
                  type="tertiary"
                  size="medium"
                  className="mr-12"
                  onClick={onClose}
                  {...(buttonProps.cancel || {})}
                />
                <Button
                  type="primary"
                  size="medium"
                  onClick={handleSubmit}
                  {...buttonProps.confirm}
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
