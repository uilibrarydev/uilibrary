import { ReactNode } from 'react'

export interface LinkPropTypes {
  children?: ReactNode
  className?: string
  url?: string
  dataId?: string
  target?: string
  beforeLink?: string | JSX.Element
  afterLink?: string | JSX.Element
  onclick?: () => void
}
