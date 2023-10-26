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
  const { label, value } = step
  const isActive = activeStep === value
  const isCompleted = completedValues.some((item: TStepValue) => item === value)

  const onClick = () => {
    onStepClick(value)
  }

  const stepItemContent = useMemo(() => {
    if (stepType === StepTypes.number) {
      return (
        <Text
          size={stepSize == 'large' ? 'large' : 'small'}
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
          <Icon type="success" name="checkmark" size={stepSize == 'large' ? 'large' : 'small'} />
        )
      }
    }
    return null
  }, [index, stepType, isCompleted, isActive])

  return (
    <div
      className={classNames('step', {
        hasLeftLine: hasLeftLine,
        rightLine: hasRightLine,
        active: isActive,
        completed: isCompleted && !isActive
      })}
      onClick={onClick}
    >
      <div className={classnames('step__circle', `step__circle--${stepSize}`)}>
        {stepItemContent}
      </div>
      <Text className="step__label">{label}</Text>
    </div>
  )
}
