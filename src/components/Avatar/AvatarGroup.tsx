import React, { ReactElement } from 'react'
import { Tooltip } from '../Tooltip'
import { Icon } from '../Icon'
import { Avatar } from './Avatar'
import { TAvatarGroupProps } from './types'
import { useScreenSize } from '../../hooks'
import classNames from 'classnames'
import { Positions } from '../Tooltip/types'

const VISIBLE_AVATARS_AMOUNT = {
  small: 2,
  medium: 4,
  large: 6
}

export const AvatarGroup = ({
  avatarGroup = [],
  onAddUser,
  size = 'medium',
  maxCount = 0,
  dataId
}: TAvatarGroupProps): ReactElement => {
  const screenSize = useScreenSize()
  const visibleAvatarsAmount = maxCount || VISIBLE_AVATARS_AMOUNT[screenSize]

  const visibleAvatars = avatarGroup.slice(0, visibleAvatarsAmount)
  const invisibleAvatarsAmount =
    avatarGroup.length - visibleAvatarsAmount > 0 ? avatarGroup.length - visibleAvatarsAmount : 0

  return (
    <div className={classNames(`avatar-group avatar-group--${size}`)}>
      {visibleAvatars.map((avatar, index) => {
        return (
          <div className={'avatar-group__item'} key={index}>
            {avatar.tooltipContent ? (
              <Tooltip
                text={avatar.tooltipContent}
                id={`${index}`}
                position={Positions.TOP_CENTER}
              />
            ) : null}
            <Avatar
              dataId={dataId}
              id={`${index}`}
              size={size}
              initials={avatar.initials}
              imagePath={avatar.imagePath}
            />
          </div>
        )
      })}

      {invisibleAvatarsAmount ? (
        <div className="avatar-group__item">
          {/*Todo please fix tooltip*/}
          <Tooltip text={'Name Surname'} id={'amountTooltip'} position={Positions.TOP_CENTER} />
          <Avatar
            type={'count'}
            size={size}
            id={'amountTooltip'}
            initials={`+${invisibleAvatarsAmount}`}
          />
        </div>
      ) : null}

      {onAddUser ? (
        <div className={classNames(`avatar avatar-group__add avatar--${size}`)} onClick={onAddUser}>
          <Icon name={'add'} type={'disabled'} size={size} />
        </div>
      ) : null}
    </div>
  )
}
