import { ReactNode } from 'react'
import { InputCustomProps } from '../Input/types'

export interface TCardSelectProps {
  type: string |'simple'
  title: string | ReactNode
  description: string | ReactNode
  badgeText: string | ReactNode
  inputProps: InputCustomProps
  className?: string
  disabled?: boolean
  withAction?: boolean
  onClick?: (e: TClickEventType) => void
  dataId?: string
  additionalInfo?: TInfoList
}

export type TInfoList = TInfoListItem[]

export type TInfoListItem = {
  key: string
  value: string
}
