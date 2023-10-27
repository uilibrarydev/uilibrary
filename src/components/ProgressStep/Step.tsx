import classNames from 'classnames'
import React, { ReactElement, useMemo } from 'react'
import Text from '../Text'
import Icon from '../Icon'
import { StepTypes, TStepProps, TStepValue } from './types'
import classnames from 'classnames'

export const Step = (props: TStepProps): ReactElement => {
  const {
    step,
    stepSize = 'large',
    index,
    activeStep,
    hasRightLine,
    hasLeftLine,
    stepType,
    onStepClick,
    completedValues
  } = props
  const { label, subText, value } = step
  const isActive = activeStep === value
  const isCompleted = completedValues.some((item: TStepValue) => item === value)
  const isRejected = false //todo put right condition
  const isReview = false //todo put right condition

  const onClick = () => {
    onStepClick(value)
  }

  const stepItemContent = useMemo(() => {
    if (stepType === StepTypes.number) {
      return (
        <Text
          type={(isActive && !isRejected) ? 'brand' : (isCompleted || isRejected) ? 'inverse' : 'tertiary'}
          size={stepSize == 'large' ? 'medium' : 'small'}
          weight={stepSize == 'large' ? 'semibold' : 'regular'}
        >{`${index}`}</Text>
      )
    }
    if (stepType === StepTypes.dot) {
      if (isActive) {
        return <span className={classNames('step__circle__dot')} />
      }
      if (isCompleted) {
        return (
          <Icon type="inverse" name={isRejected ? 'dismiss-circle' : 'checkmark'} size={stepSize == 'large' ? 'small' : 'xsmall'} />
        )
      }
    }
    return null
  }, [index, stepType, stepSize, isCompleted, isActive, isRejected, isReview])

  return (
    <div
      className={classNames('step',`step--${stepSize}`, {
        hasLeftLine: hasLeftLine,
        rightLine: hasRightLine,
        active: isActive,
        completed: isCompleted && !isActive,
        rejected: isRejected,
        review: isReview,
      })}
      onClick={onClick}
    >
      <div className="step__top">
        <div className="step__circle">
          {stepItemContent}
        </div>
      </div>
      <div className="step__label">
        <Text size={stepSize == 'large' ? 'medium' : 'small'} weight="semibold" className="text-truncate">{label}</Text>
        <Text size={stepSize == 'large' ? 'small' : 'xsmall'} className="text-truncate">{subText}</Text>
      </div>
    </div>
  )
}
