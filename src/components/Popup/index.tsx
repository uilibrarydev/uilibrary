import React, { useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { useOnOutsideClick } from '../../hooks'
import Icon from '../Icon'
import { TPopupPropTypes } from './types'
import './index.scss'

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

const Popup = (props: TPopupPropTypes): JSX.Element | null => {
  const { isOpen, onClose, children } = props
  const containerRef = useRef(null)
  useOnOutsideClick(containerRef, onClose)

  if (!isOpen) {
    return null
  }

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <AnimatePresence>
      {isOpen ? (
        <motion.div
          className="popup-container"
          initial={{
            opacity: 0
          }}
          animate={{
            backgroundColor: 'rgba(14, 14, 14, 0.1)',
            opacity: 1
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div className="popup-content" ref={containerRef}>
            {/* 
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
              // @ts-ignore */}
            <AnimatePresence className="animated_content" {...DESKTOP_ANIMATION}>
              <Icon
                className="close-icon"
                name="close"
                size="small"
                color="darkGray"
                onClick={onClose}
              />
              {children}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  )
}

export default Popup
