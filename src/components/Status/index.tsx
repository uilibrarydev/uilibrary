import React, { ReactElement } from 'react'
import { Icon, Text } from '../index'

import { TStatusProps } from './types'
import '../../assets/styles/components/_status.scss'
import classNames from 'classnames'

export const Status = (props: TStatusProps): ReactElement => {
  const {
    type = 'primary',
    size = 'large',
    text,
    className = '',
    leftIconProps,
    rightIconProps,
    noIcon
  } = props

  return (
    <div className={classNames(`status status--${type} status--${size}`, className)}>
      {!noIcon ? (
        <>
          {leftIconProps?.name && (
            <Icon size="xsmall" type={type} {...leftIconProps} className="mr-8" />
          )}
        </>
      ) : null}
      {!noIcon && !leftIconProps?.name ? <span className="status__circle mr-8" /> : null}
      <Text
        type={noIcon ? type : 'primary'}
        size={size == 'large' ? 'standard' : size == 'medium' ? 'small' : 'xsmall'}
        className="status__label"
      >
        <>{text}</>
      </Text>
      {!noIcon ? (
        <>
          {rightIconProps?.name && (
            <Icon size="xsmall" type={type} {...rightIconProps} className="ml-8" />
          )}
        </>
      ) : null}
    </div>
  )
}

export default Status
