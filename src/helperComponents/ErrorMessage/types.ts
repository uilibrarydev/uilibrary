import type { JSX } from 'react'

export interface TErrorMessageProps {
  message?: string | JSX.Element
  icon?: string
  dataId?: string
  className?: string
}
