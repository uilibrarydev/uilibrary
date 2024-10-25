export interface LinkPropTypes {
  children?: string | JSX.Element
  className?: string
  url?: string
  dataId?: string
  target?: string
  beforeLink?: string | JSX.Element
  afterLink?: string | JSX.Element
  onclick?: () => void
}
