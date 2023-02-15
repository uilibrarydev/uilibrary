import { IFormCompProps } from '../../types/globals'

export interface TFormFieldPropTypes {
  As: (props: IFormCompProps) => JSX.Element
  name: string
  className?: string
  isControlled?: boolean
  isNeedChangeHandler?: boolean
}
