import React, { useRef } from 'react'
import '../../assets/styles/components/_side-sheet.scss'
import { useOnOutsideClick } from '../../hooks'
import Text from '../Text'
import Button from '../Button'
import { AnimatePresence, motion } from 'framer-motion'
import { TSideSheetPropTypes } from './types'

const DESKTOP_ANIMATION = {
  initial: { left: 620 },
  animate: { left: 0 },
  exit: {
    left: 620,
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
const SideSheet = (props: TSideSheetPropTypes): JSX.Element | null => {
  const {
    isOpen,
    onClose,
    onSumbit,
    title,
    position = 'left',
    className = '',
    buttonProps = {
      confirm: {
        buttonText: 'Save'
      },
      cancel: { buttonText: 'Cancel' }
    },
    children
  } = props
  // const [containerRef, setContainerRef] = useState<HTMLDivElement | null>(null)

  // useOnOutsideClick(containerRef, onClose)

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
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className={`side-sheet ${className}`}
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={`side-sheet__container side-sheet__${position}`}
            ref={containerRef}
          >
            {/*
                        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                          // @ts-ignore */}
            <AnimatePresence className="animated_content" {...DESKTOP_ANIMATION}>
              <div className="side-sheet__header">
                <Text
                  className="side-sheet__title"
                  weight="bolder"
                  lineHeight="large"
                  size="medium"
                >
                  {title}
                </Text>
                <Button
                  type="tertiary"
                  size="small"
                  iconProps={{ name: 'close' }}
                  onClick={onClose}
                />
              </div>
              <div className="side-sheet__content scrollbar scrollbar--vertical">{children}</div>
              <div className="side-sheet__footer">
                <Button
                  {...(buttonProps.cancel || {})}
                  type="secondary"
                  size="large"
                  className="mr-12"
                  onClick={onClose}
                />
                <Button
                  {...buttonProps.confirm}
                  type="primary"
                  size="large"
                  onClick={handleSubmit}
                />
              </div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default SideSheet
