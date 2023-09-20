import React, {ReactElement, useRef} from 'react'
import classnames from 'classnames';
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

const Modal = (props: TModalPropTypes): ReactElement => {
  const {
    isOpen,
    onClose,
    onSubmit,
    title,
    closeIcon,
    className = '',
    size = 'small',
    withFooter = true,
    buttonProps,
    children
  } = props

  const containerRef = useRef<HTMLDivElement | null>(null)
  useOnOutsideClick(containerRef.current, onClose)

  return (
    <AnimatedComponent>
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
          <div className="modal__container" ref={containerRef} {...DESKTOP_ANIMATION}>
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
    </AnimatedComponent>
  )
}

export default Modal
