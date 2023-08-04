import React, { useCallback, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { AnimatedComponent } from '../../helperComponents/AnimatePresenceWrapper'
import { useOnOutsideClick } from '../../hooks'

import Button from '../Button'
import Text from '../Text'

import { TSideSheetPropTypes } from './types'
import '../../assets/styles/components/_side-sheet.scss'

const SideSheet = (props: TSideSheetPropTypes): JSX.Element | null => {
  const {
    isOpen,
    onClose,
    onSumbit,
    title,
    position = 'right',
    className = '',
    headerButtons = {
      close: {
        iconProps: {
          name: 'close'
        }
      }
    },
    footerButtons = {
      confirm: {
        buttonText: 'Save'
      },
      cancel: { buttonText: 'Cancel' }
    },
    children
  } = props
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  useOnOutsideClick(containerRef, onClose)

  const handleSubmit = useCallback(() => {
    onSumbit?.()
  }, [onSumbit])

  const isFromLeft = position === 'left'

  return (
    <AnimatedComponent>
      {isOpen ? (
        <motion.div
          className="side-sheet"
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{
            opacity: 0,
            transition: {
              duration: 0.1,
              delay: 0.3
            }
          }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            initial={isFromLeft ? { left: '-100%' } : { right: '-100%' }}
            animate={isFromLeft ? { left: 0 } : { right: 0 }}
            exit={{
              ...(isFromLeft ? { left: '-100%' } : { right: '-100%' }),
              transition: {
                duration: 0.5
              }
            }}
            transition={{ duration: 0.5 }}
            className={`side-sheet__container side-sheet__${position} ${className}`}
            ref={setContainerRef}
          >
            <div className="side-sheet__header">
              <div className="side-sheet__header__left pr-16">
                {headerButtons.back ? (
                  <Button size="small" type="tertiary" {...headerButtons.back} className="mr-8" />
                ) : null}
                <Text
                  className="side-sheet__title"
                  weight="bolder"
                  lineHeight="large"
                  size="medium"
                >
                  {title}
                </Text>
              </div>
              <div className="side-sheet__header__right">
                {headerButtons.pin ? (
                  <Button size="small" type="tertiary" {...headerButtons.pin} className="mr-8" />
                ) : null}
                <Button size="small" type="tertiary" onClick={onClose} {...headerButtons.close} />
              </div>
            </div>
            <div className="side-sheet__content scrollbar scrollbar--vertical">{children}</div>
            <div className="side-sheet__footer">
              {footerButtons.extraButton ? (
                <Button
                  size="large"
                  type="secondary"
                  {...footerButtons.extraButton}
                  className="mr-12"
                />
              ) : null}
              <Button
                type="secondary"
                size="large"
                className="mr-12"
                onClick={onClose}
                {...footerButtons.cancel}
              />
              <Button
                {...footerButtons.confirm}
                type="primary"
                size="large"
                onClick={handleSubmit}
              />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatedComponent>
  )
}

export default SideSheet
