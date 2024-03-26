import React from 'react'
import { motion } from 'framer-motion'
import { Text } from '../../Text'
import { Icon } from '../../Icon'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'
import { TCollapseProps } from '../types'

export const CollapseItem = (props: TCollapseProps): JSX.Element => {
  const {
    title: { text, size = 'medium', color },
    isOpen,
    toggle,
    children,
    reverse,
    component
  } = props

  const title =
    typeof text === 'string' ? (
      <Text size={size} type={color} weight="bolder">
        {text}
      </Text>
    ) : (
      text
    )

  const icon = (
    <Icon name="arrow-right" className={isOpen ? 'collapse_icon_opened' : 'collapse_icon_closed'} />
  )

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggle}>
        {reverse ? (
          <>
            <div className="header_components">
              {icon}
              {component}
            </div>
            {title}
          </>
        ) : (
          <>
            {title}
            <div className="header_components">
              {component}
              {icon}
            </div>
          </>
        )}
      </div>
      <AnimatePresenceWrapper initial={false}>
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
      </AnimatePresenceWrapper>
    </div>
  )
}
