export interface TFormFieldPropTypes {
  As: (props: IFormCompProps) => JSX.Element
  name: string
  className?: string
  isNeedChangeHandler?: boolean
  dataId?: string
}
