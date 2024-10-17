import React, { ReactElement, useId, useState } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { Button } from '../Button'
import { Text } from '../Text'
import { TModalConfirmationPropTypes, TModalPropTypes } from './types'
import IconDismissFilled from '../SVGIcons/IconDismissFilled'
import { ICON_SIZE_MAPPING, ICON_TYPE_MAPPING } from '../Button/consts'

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

export const ModalConfirmation = (props: TModalConfirmationPropTypes): ReactElement => {
  const {
    isOpen,
    onClose,
    onSubmit,
    title,
    className = '',
    size = 'small',
    buttonProps,
    dataIdPrefix,
    closeOnOutsideClick = true,
    iconProps,
    subtitle
  } = props

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef, onClose, closeOnOutsideClick && isOpen, useId())
  useHideBodyScroll(isOpen)

  return (
    <AnimatePresenceWrapper>
      {isOpen ? (
        <motion.div
          className={classnames('modal', `modal--${size}`, className)}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="modal__container text-center" ref={setContainerRef} {...DESKTOP_ANIMATION}>
            {title ? (
              <div className="modal__header">
                <Text
                  className="modal__title"
                  weight="semibold"
                  lineHeight="large"
                  size="medium"
                  dataId={dataIdPrefix ? `${dataIdPrefix}-modal-title` : ''}
                >
                  {title}
                </Text>
              </div>
            ) : null}
            <div className={'flexbox justify-content--center'}>
              {iconProps?.Component ? (
                <iconProps.Component
                  size={iconProps.size}
                  type={iconProps.type}
                  className="btn__icon"
                />
              ) : null}
            </div>
            {
              subtitle ? (
                <Text>{subtitle}</Text>
              ) : null
            }
            {buttonProps ? (
              <div className="modal__footer">
                <Button
                  type="tertiary"
                  size="medium"
                  className="mr-12"
                  onClick={onClose}
                  dataId={dataIdPrefix ? `${dataIdPrefix}-modal-cancel-button` : ''}
                  {...(buttonProps.cancel || {})}
                />
                <Button
                  type="primary"
                  size="medium"
                  onClick={onSubmit}
                  dataId={dataIdPrefix ? `${dataIdPrefix}-modal-confirm-button` : ''}
                  {...buttonProps.confirm}
                />
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  )
}
