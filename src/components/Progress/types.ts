export interface TProgressPropTypes {
  percent?: number
  stepCount?: number
  currentStep?: number
  type?: 'linear' | 'circle'
  size?: 'large' | 'small'
  noText?: boolean
  dimension?: number
  className?: string
  loop?: boolean
  hasError?: boolean
}

export interface TProgressBarPropTypes {
  stepItems?: TProgressPropTypes[]
  size?: 'large' | 'small'
  className?: string
}
