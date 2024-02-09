import React, { ReactElement } from 'react'
import { Text } from '../Text'
import { TBadgeProps } from './types'
import classNames from 'classnames'

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '' } = props

  return (
    <div className={classNames(`badge badge--${type}  badge--${size}`, className)}>
      {text ? (
        <Text
          size="xsmall"
          type={type == 'primary' ? 'inverse' : 'primary'}
          className="badge__inner"
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
