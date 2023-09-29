import React from 'react'
import { motion } from 'framer-motion'

import { Text, Icon, Divider } from '../../index'
import { AnimatedComponent } from '../../../helperComponents/AnimatePresenceWrapper'

import { TCollapseProps } from '../types'
import '../../../assets/styles/components/_collapse.scss'

export const CollapseItem = (props: TCollapseProps): JSX.Element => {
  const {
    title: { text, size = 'medium', color },
    isOpen,
    toggle,
    children
  } = props

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggle}>
        <Text size={size} type={color} weight="bolder">
          {text}
        </Text>
        <Icon
          name="arrow-right"
          className={isOpen ? 'collapse_icon_opened' : 'collapse_icon_closed'}
        />
      </div>
      <AnimatedComponent initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: 'auto' }}
            exit={{ height: 0 }}
            transition={{ type: 'spring', duration: 0.5, bounce: 0 }}
          >
            <div className="collapse_container">
              <Divider type="primary" isHorizontal />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatedComponent>
    </div>
  )
}
