import { IFormCompProps } from '../../types/globals'

export interface TAvatarProps extends IFormCompProps {
  imagePath?: string
  initials?: string | JSX.Element
  type?: string
  size?: string
  className?: string
  isEditable: boolean
}
