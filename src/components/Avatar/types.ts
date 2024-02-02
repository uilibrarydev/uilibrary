import { ReactElement } from 'react'
import { FILE_UPLOAD_ERRORS } from '../../consts'
import { IFormCompProps } from '../../types/types'

export interface TAvatarProps extends IFormCompProps {
  allowedTypes?: string
  id?: string
  imagePath?: string
  initials?: string | ReactElement
  color?: 'default' | 'purple' | 'blue' | 'green' | 'red'
  type?: 'count'
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
  className?: string
  isEditable?: boolean
  onAvatarChange?: (file: File) => void
  tooltipContent?: string | ReactElement
  onError?: (type: FILE_UPLOAD_ERRORS) => void
  fileAllowedSize?: number
}

export interface TAvatarGroupProps {
  avatarGroup: TAvatarProps[]
  onAddUser?: () => void
  maxCount?: 0 | 2 | 4 | 6
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
}
