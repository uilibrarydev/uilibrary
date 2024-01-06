import React, { ReactElement } from 'react'
import Icon from '../Icon'
import Text from '../Text'
import { TStatusProps } from './types'
import '../../assets/styles/components/_status.scss'
import classNames from 'classnames'

enum StatusTextSize {
  large = 'standard',
  medium = 'small',
  small = 'xsmall'
}

export const Status = (props: TStatusProps): ReactElement => {
  const {
    type = 'primary',
    size = 'large',
    text = '',
    children,
    className = '',
    leftIconProps,
    rightIconProps,
    withCircle = true
  } = props

  return (
    <div className={classNames(`status status--${size}`, className)}>
      {leftIconProps?.name && (
        <Icon size="xsmall" type={type} {...leftIconProps} className="mr-6" />
      )}
      {withCircle && !leftIconProps?.name ? (
        <span
          className={classNames('status__circle', 'mr-8', {
            [`status__circle--${type}`]: true
          })}
        />
      ) : null}
      <div className="status__label">
        <Text type={!withCircle ? type : 'primary'} size={StatusTextSize[size]}>
          {text}
        </Text>
        {children}
      </div>
      {rightIconProps}
    </div>
  )
}

export default Status
