import React, { ReactElement } from 'react'
import { Tooltip } from '../../index'
import { VISIBLE_AVATARS_AMOUNT } from '../../consts'
import Icon from '../Icon'
import { Avatar } from '../index'
import { TAvatarGroupProps } from './types'

export const AvatarGroup = ({
  avatarGroup = [],
  onAddUser,
  showInvisibleAvatarsAmount = true,
  visibleAvatarsAmount = VISIBLE_AVATARS_AMOUNT
}: TAvatarGroupProps): ReactElement => {

  const visibleAvatars = avatarGroup.slice(0, visibleAvatarsAmount)
  const invisibleAvatarsAmount = avatarGroup.length - visibleAvatarsAmount

  return (
    <div className={'avatar--group'}>
      {visibleAvatars.map((avatar, index) => {
        return (
          <div
            className={'avatar--group--item'}
            key={index}
          >
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
        <div onClick={onAddUser}>
          <Avatar
            className={'avatar--group--add-user'}
            color={'white'}
            size={'large'}
            initials={<Icon name={'add'} type={'disabled'} />}
          />
        </div>
      ) : null}
    </div>
  )
}
