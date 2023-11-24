import { ReactElement } from 'react'

export interface TAvatarProps extends IFormCompProps {
  id?:string
  imagePath?: string
  initials?: string | JSX.Element
  color?: 'default' | 'purple' | 'blue' | 'green' | 'red' | 'white'
  size?: 'xlarge' | 'large' | 'medium' | 'small' | 'xsmall' | 'xxsmall'
  className?: string
  isEditable?: boolean
  onAvatarChange?: (file: File) => void
  tooltipContent?: string | ReactElement
}

export interface TAvatarGroupProps {
  avatarGroup: TAvatarProps[]
  onAddUser?: () => void
  showInvisibleAvatarsAmount?: true
}