import { TextPropTypes } from '../Text/types'

export type TMorePropTypes = {
  textProps?: TextPropTypes
  expandedText: string
  collapsedText: string
  buttonText?: {
    expand: string
    collapse: string
  }
}
