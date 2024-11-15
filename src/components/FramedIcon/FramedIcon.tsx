import type { ReactElement } from 'react';
import React from 'react'
import classnames from 'classnames'
import type {TFramedIconPropTypes} from './types';
import {FRAME_SIZE_MAPPING, ICON_SIZE_MAPPING} from './consts';

export const FramedIcon = (props: TFramedIconPropTypes): ReactElement => {
  const {
    size = 'medium',
    className = '',
    iconProps
  } = props

  return (
      <>
          {iconProps?.Component ? (
              <div  className={classnames('framed-icon', `framed-icon--${FRAME_SIZE_MAPPING[size]}`, `framed-icon--${iconProps.type}`, className)}>
                  <iconProps.Component size={ICON_SIZE_MAPPING[size]} type={iconProps.type} />
              </div>
          ) : null}
      </>
  )
}
