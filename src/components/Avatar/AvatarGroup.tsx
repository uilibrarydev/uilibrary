import React, { ReactElement } from 'react'
import { Tooltip } from '../../index'
import Icon from '../Icon'
import { Avatar } from '../index'
import { TAvatarGroupProps } from './types'
import { useScreenSize } from '../../hooks'

const VISIBLE_AVATARS_AMOUNT = {
  small: 2,
  medium: 4,
  large: 6
}

export const AvatarGroup = ({
  avatarGroup = [],
  onAddUser,
  showInvisibleAvatarsAmount = true
}: TAvatarGroupProps): ReactElement => {
  const screenSize = useScreenSize()
  const visibleAvatarsAmount = VISIBLE_AVATARS_AMOUNT[screenSize]

  const visibleAvatars = avatarGroup.slice(0, visibleAvatarsAmount)
  const invisibleAvatarsAmount = avatarGroup.length - visibleAvatarsAmount

  return (
    <div className={'avatar--group'}>
      {visibleAvatars.map((avatar, index) => {
        return (
          <div className={'avatar--group--item'} key={index}>
            {avatar.tooltipContent ? (
              <Tooltip text={avatar.tooltipContent} id={`${index}`} position={'top-left'} />
            ) : null}
            <Avatar
              id={`${index}`}
              size={avatar.size}
              initials={avatar.initials}
              imagePath={avatar.imagePath}
            />
          </div>
        )
      })}

      {invisibleAvatarsAmount && showInvisibleAvatarsAmount ? (
        <Avatar color={'green'} size={'large'} initials={`+${invisibleAvatarsAmount}`} />
      ) : null}

      {onAddUser ? (
        <div className={'avatar avatar--group--add-user'} onClick={onAddUser}>
          <Icon name={'add'} type={'disabled'} />
        </div>
      ) : null}
    </div>
  )
}
