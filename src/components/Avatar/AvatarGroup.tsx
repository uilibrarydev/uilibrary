import React, { ReactElement } from 'react'
import { Tooltip } from '../../index'
import Icon from '../Icon'
import { Avatar } from '../index'
import { TAvatarGroupProps } from './types'
import { useScreenSize } from '../../hooks'
import classNames from 'classnames'

const VISIBLE_AVATARS_AMOUNT = {
  small: 2,
  medium: 4,
  large: 7
}

export const AvatarGroup = ({
  avatarGroup = [],
  onAddUser,
  size = 'medium'
}: TAvatarGroupProps): ReactElement => {
  const screenSize = useScreenSize()
  const visibleAvatarsAmount = VISIBLE_AVATARS_AMOUNT[screenSize]

  const visibleAvatars = avatarGroup.slice(0, visibleAvatarsAmount)
  const invisibleAvatarsAmount = avatarGroup.length - visibleAvatarsAmount

  return (
    <div className={classNames(`avatar-group avatar-group--${size}`)}>
      {visibleAvatars.map((avatar, index) => {
        return (
          <div className={'avatar-group__item'} key={index}>
            {avatar.tooltipContent ? (
              <Tooltip text={avatar.tooltipContent} id={`${index}`} position={'top-left'} />
            ) : null}
            <Avatar
              id={`${index}`}
              size={size}
              initials={avatar.initials}
              imagePath={avatar.imagePath}
            />
          </div>
        )
      })}

      {invisibleAvatarsAmount ? (
        <Avatar type={'count'} size={size} initials={`+${invisibleAvatarsAmount}`} />
      ) : null}

      {onAddUser ? (
        <div className={classNames(`avatar avatar-group__add avatar--${size}`)} onClick={onAddUser}>
          <Icon name={'add'} type={'disabled'} size={size} />
        </div>
      ) : null}
    </div>
  )
}
