import { IFormCompProps } from '../../types/globals'

export interface TFormFieldPropTypes {
  As: (props: IFormCompProps) => JSX.Element
  name: string
  isControlled?: boolean
  isNeedChangeHandler?: boolean
}
