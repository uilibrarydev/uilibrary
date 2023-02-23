import React, { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnOutsideClick } from '../../hooks'
import Icon from '../Icon'
import { TModalPropTypes } from './types'
import '../../assets/styles/components/_modal.scss'
import Button from '../Button'
import Text from '../Text'

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
    duration: 0.6,
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
    size = 'small',
    buttonProps = {
      confirmButtonText: 'Save',
      cancelButtonText: 'Cancel'
    },
    children
  } = props
  const containerRef = useRef(null)
  useOnOutsideClick(containerRef, onClose)

  if (!isOpen) {
    return null
  }

  const handleSubmit = () => {
    onSumbit()
    onClose()
  }
  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={`modal modal--${size}`}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="modal__container" ref={containerRef}>
            {/* 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore */}
            <AnimatePresence className="animated_content" {...DESKTOP_ANIMATION}>
              { title? (
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
              ) : null
              }

              <div className="modal__content">{children}</div>
              {!closeIcon ? (
                <div className="modal__footer">
                  <Button
                    type="tertiary"
                    size="medium"
                    className="mr-12"
                    buttonText={buttonProps.cancelButtonText}
                    onClick={onClose}
                  />
                  <Button
                    type="primary"
                    size="medium"
                    buttonText={buttonProps.confirmButtonText}
                    onClick={handleSubmit}
                  />
                </div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Modal
