import React from 'react'
import { motion } from 'framer-motion'
import { Text } from '../../Text'
import { IconChevronRight } from '../../SVGIcons/IconChevronRight'
import { Divider } from '../../Divider'
import { AnimatePresenceWrapper } from '../../../helperComponents/AnimatePresenceWrapper'
import { TCollapseProps } from '../types'
import classNames from 'classnames'
import IconChevronDown from '../../SVGIcons/IconChevronDown'

export const CollapseItem = (props: TCollapseProps): JSX.Element => {
  const {
    title: { text, size = 'medium', color },
    className,
    isOpen,
    toggle,
    dataId,
    children,
    reverse = false,
    additionalInfo,
    labelLeftIconProps,
    id
  } = props

  const title =
    typeof text === 'string' ? (
      <Text size={size} type={color} weight="bolder" dataId={dataId}>
        {text}
      </Text>
    ) : (
      text
    )

  return (
    <div
      className={classNames('collapse', { 'collapse--opened': isOpen }, className)}
      id={`${id || ''}`}
    >
      <div className="collapse__header flexbox justify-content--between" onClick={toggle}>
        {reverse ? (
          <>
            <div className="collapse__header__inner flexbox align-items--center">
              <IconChevronDown className={'collapse__header__icon'} size={'small'} />
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

            <div className="collapse__header__inner flexbox align-items--center">
              {additionalInfo}
              <IconChevronRight className={'collapse__header__icon'} size={'small'} />
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
            <div className="collapse__content">
              <Divider type="primary" isHorizontal className={'collapse__divider'} />
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresenceWrapper>
    </div>
  )
}
