import classNames from 'classnames';
import React, { useMemo } from 'react';
import { Text } from '../Text/Text.js';
import { StepTypes } from './types.js';
import { PROGRESS_STATUSES } from './consts.js';
import { IconDismissCircle } from '../SVGIcons/IconDismissCircle.js';
import { IconCheckmarkCircle } from '../SVGIcons/IconCheckmarkCircle.js';
import '../../utils/helpers.js';
import 'dayjs';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

var Step = function Step(props) {
  var width = props.width,
    step = props.step,
    _props$stepSize = props.stepSize,
    stepSize = _props$stepSize === void 0 ? 'large' : _props$stepSize,
    index = props.index,
    activeStep = props.activeStep,
    stepType = props.stepType,
    onStepClick = props.onStepClick;
  var label = step.label,
    subText = step.subText,
    value = step.value,
    status = step.status;
  var isActive = activeStep === value;
  var isCompleted = status === PROGRESS_STATUSES.completed;
  var isRejected = status === PROGRESS_STATUSES.rejected;
  var isReview = status === PROGRESS_STATUSES.reviewed;
  var textType = useMemo(function () {
    if (isActive && !isRejected) {
      return 'brand';
    }
    if (isCompleted || isRejected) {
      return 'inverse';
    }
    return 'tertiary';
  }, [isCompleted, isRejected, isActive]);
  var onClick = function onClick() {
    if (onStepClick) {
      onStepClick(value);
    }
  };
  var stepItemContent = useMemo(function () {
    if (stepType === StepTypes.number) {
      return /*#__PURE__*/React.createElement(Text, {
        type: textType,
        size: stepSize == 'large' ? 'medium' : 'small',
        weight: stepSize == 'large' ? 'semibold' : 'regular'
      }, "".concat(index));
    }
    if (stepType === StepTypes.dot) {
      if (isActive) {
        return /*#__PURE__*/React.createElement("span", {
          className: classNames('step__circle__dot')
        });
      }
      if (isCompleted) {
        var iconSize = stepSize == 'large' ? 'small' : 'xsmall';
        if (isRejected) {
          return /*#__PURE__*/React.createElement(IconDismissCircle, {
            size: iconSize,
            type: "inverse"
          });
        }
        return /*#__PURE__*/React.createElement(IconCheckmarkCircle, {
          size: iconSize,
          type: "inverse"
        });
      }
    }
    return null;
  }, [index, stepType, stepSize, isCompleted, isActive, isRejected, textType]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('step', "step--".concat(stepSize), {
      active: isActive,
      completed: isCompleted && !isActive,
      rejected: isRejected,
      review: isReview
    }),
    style: {
      width: width
    },
    onClick: onClick
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__top"
  }, /*#__PURE__*/React.createElement("div", {
    className: "step__circle"
  }, stepItemContent)), /*#__PURE__*/React.createElement("div", {
    className: "step__label"
  }, /*#__PURE__*/React.createElement(Text, {
    size: stepSize == 'large' ? 'standard' : 'small',
    weight: "semibold",
    lineHeight: 'large',
    className: "text-truncate"
  }, label), /*#__PURE__*/React.createElement(Text, {
    size: stepSize == 'large' ? 'small' : 'xsmall',
    className: "text-truncate"
  }, subText)));
};

export { Step };
