import classNames from 'classnames'
import React, { ReactElement, useMemo } from 'react'
import Text from '../Text'
import Icon from '../Icon'
import { StepTypes, TStepProps, TStepValue } from './types'

export const Step = (props: TStepProps): ReactElement => {
  const {
    step,
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
      return <span className="progress_steper__step_item__content">{`${index}`}</span>
    }
    if (stepType === StepTypes.dot) {
      if (isActive) {
        return <div className={classNames('progress_steper__step_item__content', 'content_dot')} />
      }
      if (isCompleted) {
        return (
          <Icon type="success" name="checkmark" className="progress_steper__step_item__content" />
        )
      }
    }
    return null
  }, [index, stepType, isCompleted, isActive])

  return (
    <div
      className={classNames('progress_steper__step', {
        leftLine: hasLeftLine,
        rightLine: hasRightLine
      })}
      onClick={onClick}
    >
      <div
        className={classNames('progress_steper__step_item', {
          progress_steper__step_item_active: isActive,
          progress_steper__step_item_completed: isCompleted && !isActive
        })}
      >
        {stepItemContent}
      </div>
      <Text>{label}</Text>
    </div>
  )
}
