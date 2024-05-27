import React from 'react'
import { motion } from 'framer-motion'
import { Text } from '../../Text'
import { IconChevronRight } from '../../SVGIcons/IconChevronRight'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'
import { TCollapseProps } from '../types'
import classNames from 'classnames'

export const CollapseItem = (props: TCollapseProps): JSX.Element => {
  const {
    title: { text, size = 'medium', color },
    isOpen,
    toggle,
    dataId,
    children,
    reverse = false,
    additionalInfo,
    labelLeftIconProps
  } = props

  const title =
    typeof text === 'string' ? (
      <Text size={size} type={color} weight="bolder" dataId={dataId}>
        {text}
      </Text>
    ) : (
      text
    )

  const icon = (
    <IconChevronRight
      className={classNames({
        collapse_icon_opened: isOpen,
        collapse_icon_closed: !isOpen
      })}
    />
  )

  return (
    <div className="collapse">
      <div className="collapse_header" onClick={toggle}>
        {reverse ? (
          <>
            <div className="header_components">
              {icon}
              {additionalInfo}
            </div>
            {title}
          </>
        ) : (
          <>
            <div className="flexbox align-items--center">
              {labelLeftIconProps?.Component ? (
                <labelLeftIconProps.Component
                  size="small"
                  type="primary"
                  className="mr-16"
                  {...labelLeftIconProps}
                />
              ) : null}
              {title}
            </div>

            <div className="header_components">
              {additionalInfo}
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
