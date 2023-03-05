export interface ImagePropTypes {
  name?: string
  imagePath?: string
  className?: string
  isBackgroundImage?: boolean
  backgroundSize: 'cover' | 'contain'
  isFullWidth?: boolean
  isFullHeight?: boolean
}
