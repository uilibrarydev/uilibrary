import React, { useCallback, useEffect, useId, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import classnames from 'classnames'
import { useHideBodyScroll, useOnOutsideClick } from '../../hooks'
import { AnimatePresenceWrapper } from '../../helperComponents/AnimatePresenceWrapper'
import { Button } from '../Button'
import { Text } from '../Text'
import { TSideSheetPropTypes } from './types'
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll'
import { Footer } from './Footer/Footer'
import IconCaretUp from '../SVGIcons/IconCaretUp'
import IconDismissFilled from '../SVGIcons/IconDismissFilled'

export const SideSheet = (props: TSideSheetPropTypes): JSX.Element | null => {
  const {
    size = 'small',
    isLoading,
    isOpen,
    onClose,
    onSubmit,
    title,
    position = 'right',
    shouldRemoveCallback,
    className = '',
    headerButtons,
    footerButtons,
    scrollToTopOptions,
    children,
    closeOnOutsideClick = true,
    checkboxInfo
  } = props
  const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)
  const [isShownScrollIcon, setIsShownScrollIcon] = useState<boolean>(false)
  const scrollbarContainerRef = useRef<HTMLDivElement>(null)
  useOnOutsideClick(
    containerRef,
    onClose,
    isOpen && closeOnOutsideClick,
    useId(),
    shouldRemoveCallback
  )

  useHideBodyScroll(isOpen)
  const dispatchScrollEvent = useDispatchEventOnScroll()

  useEffect(() => {
    if (isOpen && scrollToTopOptions) {
      const handleOnScroll = (e: Event) => {
        dispatchScrollEvent()
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
                {headerButtons?.back ? (
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
                {headerButtons?.pin ? (
                  <Button size="small" type="tertiary" {...headerButtons.pin} className="mr-8" />
                ) : null}
                {headerButtons?.close ? (
                  <Button size="small" type="tertiary" {...headerButtons.close} onClick={onClose} />
                ) : (
                  <Button
                    size="small"
                    type="tertiary"
                    iconProps={{ Component: IconDismissFilled }}
                    onClick={onClose}
                  />
                )}
              </div>
              {isShownScrollIcon && (
                <Button
                  size="large"
                  type="secondary"
                  iconProps={{ Component: IconCaretUp }}
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
            <Footer
              footerButtons={footerButtons}
              isLoading={isLoading}
              onClose={onClose}
              onSubmit={onSubmit}
              checkboxInfo={checkboxInfo}
            />
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresenceWrapper>
  )
}
