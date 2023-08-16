import React, { useEffect, useRef } from 'react'

import { motion } from 'framer-motion'

import { Text, Icon, Button } from '../index'
import { AnimatedComponent } from '../../helperComponents/AnimatePresenceWrapper'

import '../../assets/styles/components/_snackbar.scss'
import { TSnackbarProps, Timer } from './types'
import { ICONS_MAPPING, TYPE_MAPPING } from './consts'

export const Snackbar = (props: TSnackbarProps): JSX.Element | null => {
  const {
    text,
    isVisible,
    className = '',
    closeSnackbar,
    timer = 6000,
    type = 'information',
    actionProps
  } = props

  const timeout = useRef<null | Timer>(null)

  useEffect(() => {
    if (!actionProps && !timeout.current && isVisible) {
      timeout.current = setTimeout(closeSnackbar, timer)
    }
  }, [timer, isVisible, actionProps])

  return (
    <AnimatedComponent>
      {isVisible ? (
        <motion.div
          className={`snackbar ${className}`}
          initial={{
            bottom: -56
          }}
          animate={{
            bottom: 100
          }}
          exit={{ bottom: -56 }}
          transition={{
            duration: 0.4,
            type: 'spring',
            stiffness: 100
          }}
        >
          <Icon
            name={ICONS_MAPPING[type]}
            type={TYPE_MAPPING[type]}
            className="mr-16"
            size="medium"
          />

          <Text
            className="snackbar__text"
            type="primary"
            size="standard"
            weight="regular"
            lineHeight="medium"
          >
            {text}
          </Text>
          {actionProps ? (
            <Button size="small" type="tertiary" {...actionProps} className="ml-16" />
          ) : null}
        </motion.div>
      ) : null}
    </AnimatedComponent>
  )
}

export default Snackbar
