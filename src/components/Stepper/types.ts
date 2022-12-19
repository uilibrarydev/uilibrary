export type TStepperContentWrapperProps = {
  isPrevDisabled: boolean
  isNextDisabled: boolean
  prevHandler: () => void
  nextHandler: () => void
  activeStepIndex: number
  children: JSX.Element
}
declare type TComp = () => JSX.Element

export type TStepperProps = {
  list: TComp[]
  wrapper: (props: TStepperContentWrapperProps) => JSX.Element
}
