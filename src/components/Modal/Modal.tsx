import React, { ReactElement, useId, useState } from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { Button } from '../Button'
import { Text } from '../Text'
import { TModalPropTypes } from './types'
import { Icon } from '../Icon'

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

export const Modal = (props: TModalPropTypes): ReactElement => {
  const {
    isOpen,
    onClose,
    onSubmit,
    title,
    titleIconProps,
    closeIcon,
    className = '',
    size = 'small',
    withFooter = true,
    buttonProps,
    children
  } = props

  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef, onClose, isOpen, useId())
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
          <div className="modal__container" ref={setContainerRef} {...DESKTOP_ANIMATION}>
            {title ? (
              <div className="modal__header">
                {titleIconProps?.name ? (
                  <Icon size="small" {...titleIconProps} className="mr-12" />
                ) : null}
                <Text className="modal__title" weight="semibold" lineHeight="large" size="medium">
                  {title}
                </Text>
                {closeIcon ? (
                  <Button
                    type="tertiary"
                    size="small"
                    iconProps={{ name: 'close-hover' }}
                    onClick={onClose}
                  />
                ) : null}
              </div>
            ) : null}

            <div className="modal__content">{children}</div>
            {withFooter && buttonProps ? (
              <div className="modal__footer">
                <Button
                  type="tertiary"
                  size="medium"
                  className="mr-12"
                  onClick={onClose}
                  {...(buttonProps.cancel || {})}
                />
                <Button type="primary" size="medium" onClick={onSubmit} {...buttonProps.confirm} />
              </div>
            ) : null}
          </div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  )
}
