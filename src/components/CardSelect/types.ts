import { InputCustomProps } from '../Input/types'
import { TChipsProps } from '../Chips/types'
import { CARD_SELECT_TYPES } from '../../consts'
export interface TCardSelectProps extends IFormCompProps {
  id?: number | string
  type?: CARD_SELECT_TYPES
  title: string
  description: string
  chips?: TChipsProps[]
  inputProps?: InputCustomProps
  className?: string
  disabled?: boolean
  handleCardSelectValue?: (isChecked: boolean) => void
  dataId?: string
  additionalInfo?: TInfoList
  selectedCard?: number
  value?: number | string
  handleChange?: (selected: number | string) => void
  isSelected?: boolean
  cardValue?: number | string
  illustration?: string
}
export interface TCardSelectGroupProps extends IFormCompProps {
  cards: TCardSelectProps[]
  handleChange?: (selected: number | string) => void
  value: number | string
  cardsGroupDisable?: boolean
  cardsGroupType?: CARD_SELECT_TYPES
}

export type TInfoList = TInfoListItem[]

export type TInfoListItem = {
  key: string
  value: string
  id?: number | string
}
