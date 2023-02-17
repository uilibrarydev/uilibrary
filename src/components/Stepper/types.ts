export interface TStepperContentWrapperProps {
  isPrevDisabled: boolean
  isNextDisabled: boolean
  prevHandler: () => void
  nextHandler: () => void
  activeStepIndex: number
  stepCount: number
}
declare type TComp = (props: TStepperContentWrapperProps) => JSX.Element

export interface TStepperProps {
  list: TComp[]
  initialActiveIndex?: number
}
