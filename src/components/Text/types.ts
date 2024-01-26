import {MouseEvent, ReactElement} from 'react';

type TTextTypes =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'disabled'
  | 'inverse'
  | 'selected'
  | 'brand'
  | 'danger'
  | 'warning'
  | 'success'
  | 'information'
  | 'discovery'

type TTextSize = 'xxsmall' | 'xsmall' | 'small' | 'standard' | 'medium' | 'large'
type TTextWeight = 'regular' | 'semibold' | 'bold' | 'bolder'
type TTextLineHeight = 'xsmall' | 'small' | 'medium' | 'large'

export interface TextPropTypes {
  id?: string
  title?: string
  children?: string | ReactElement
  type?: TTextTypes
  size?: TTextSize
  weight?: TTextWeight
  lineHeight?: TTextLineHeight
  className?: string
  dataId?: string
  onClick?: (event: MouseEvent<HTMLElement>) => void
}
