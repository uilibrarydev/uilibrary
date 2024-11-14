import type { PROGRESS_STATUSES } from './consts'

export type TStepValue = number | string
export interface TStep {
  value: TStepValue
  label: string
  subText?: string
  status?: PROGRESS_STATUSES
}
export type TStepType = 'number' | 'dot'
export type TSteps = TStep[]

export type TProgressStepProps = {
  steps: TSteps
  stepType: TStepType
  stepDirection: 'horizontal' | 'vertical'
  stepSize: 'large' | 'small'
  activeStep: TStepValue
  setActiveStep: (v: TStepValue) => void
}

export type TStepProps = {
  width: string
  step: TStep
  stepSize?: 'large' | 'small'
  index: number
  stepType?: TStepType
  onStepClick: (v: TStepValue) => void
  activeStep: TStepValue
}
export enum StepTypes {
  number = 'number',
  dot = 'dot'
}
