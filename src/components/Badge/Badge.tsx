import type { ReactElement } from 'react'
import React from 'react'
import { Text } from '../Text'
import type { TBadgeProps } from './types'
import classNames from 'classnames'
import {TEXT_SIZE_MAPPING} from './consts';

export const Badge = (props: TBadgeProps): ReactElement => {
  const { type = 'primary', size = 'large', text, className = '' } = props

  return (
    <div className={classNames(`badge badge--${type}  badge--${size}`, className)}>
      {text ? (
        <Text
          size={TEXT_SIZE_MAPPING[size]}
          type={type == 'secondary' ? 'primary' : 'inverse'}
          className="badge__inner"
        >
          <>{text}</>
        </Text>
      ) : null}
    </div>
  )
}
