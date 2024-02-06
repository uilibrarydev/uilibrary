import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper'
import { Button } from '../Button'
import { Text } from '../Text'
import { TSideSheetPropTypes } from './types'
import '../../assets/styles/components/_side-sheet.scss'

export const SideSheet = (props: TSideSheetPropTypes): JSX.Element | null => {
  const {
    size = 'small',
    isLoading,
    isOpen,
    onClose,
    onSubmit,
    title,
    position = 'right',
    className = '',
    headerButtons = {
      close: {
        iconProps: {
          name: 'close-hover'
        }
      }
    },
    footerButtons,
    scrollToTopOptions,
    children
  } = props
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [isShownScrollIcon, setIsShownScrollIcon] = useState<boolean>(false)
  const scrollbarContainerRef = useRef<HTMLDivElement>(null)

  useOnOutsideClick(containerRef, onClose, isOpen, useId())
  useHideBodyScroll(isOpen)

  const handleSubmit = useCallback(() => {
    onSubmit?.()
  }, [onSubmit])

  useEffect(() => {
    if (isOpen && scrollToTopOptions) {
      const handleOnScroll = (e: Event) => {
        if (isOpen) {
          setIsShownScrollIcon(
            (e.currentTarget as HTMLDivElement).scrollTop > scrollToTopOptions.onPixel
          )
        }
      }
      scrollbarContainerRef.current?.addEventListener('scroll', handleOnScroll)
    }
    if (!isOpen) {
      handleScrollToTop()
    }
  }, [isOpen, scrollToTopOptions])

  const handleScrollToTop = useCallback(() => {
    setIsShownScrollIcon(false)
    scrollbarContainerRef.current?.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }, [])

  const isFromLeft = position === 'left'

  return (
    <AnimatePresenceWrapper>
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
            className={classnames(
              'side-sheet__container',
              `side-sheet__${position}`,
              `side-sheet__container--${size}`,
              className
            )}
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
              {isShownScrollIcon && (
                <Button
                  size="large"
                  type="secondary"
                  iconProps={{ name: 'caret-up' }}
                  className={`side-sheet__header__scroll-top side-sheet__header__scroll-top__${size}`}
                  onClick={handleScrollToTop}
                />
              )}
            </div>
            <div
              className="side-sheet__content scrollbar scrollbar--vertical"
              ref={scrollbarContainerRef}
            >
              {children}
            </div>
            {footerButtons ? (
              <div className="side-sheet__footer">
                {footerButtons.extraButton ? (
                  <Button
                    size="large"
                    type="secondary"
                    {...footerButtons.extraButton}
                    className="mr-12"
                  />
                ) : null}
                {
                  <Button
                    type="secondary"
                    size="large"
                    className="mr-12"
                    onClick={onClose}
                    {...footerButtons.cancel}
                  />
                }
                <Button
                  type="primary"
                  size="large"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  {...footerButtons.confirm}
                />
              </div>
            ) : null}
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  )
}
