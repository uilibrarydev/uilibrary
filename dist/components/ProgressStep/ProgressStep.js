import React from 'react';
import classNames from 'classnames';
import { Step } from './Step.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import 'dayjs';
import './types.js';
import './consts.js';
import '../SVGIcons/IconDismissCircle.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../SVGIcons/IconCheckmarkCircle.js';

var ProgressStep = function ProgressStep(props) {
  var steps = props.steps,
    stepType = props.stepType,
    activeStep = props.activeStep,
    setActiveStep = props.setActiveStep,
    _props$stepSize = props.stepSize,
    stepSize = _props$stepSize === void 0 ? 'large' : _props$stepSize,
    _props$stepDirection = props.stepDirection,
    stepDirection = _props$stepDirection === void 0 ? 'horizontal' : _props$stepDirection;
  var singleStepWidth = "".concat(100 / steps.length, "%");
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('progress-stepper', "progress-stepper--".concat(stepDirection))
  }, steps.map(function (step, index) {
    return /*#__PURE__*/React.createElement(Step, {
      width: stepDirection == 'horizontal' ? singleStepWidth : '100%',
      step: step,
      index: index + 1,
      key: step.value,
      activeStep: activeStep,
      onStepClick: setActiveStep,
      stepType: stepType,
      stepSize: stepSize
    });
  }));
};

export { ProgressStep };
