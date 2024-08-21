import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useEffect } from 'react';

var Stepper = function Stepper(props) {
  var list = props.list,
    _props$activeStep = props.activeStep,
    activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep,
    setActiveStep = props.setActiveStep;
  var _useState = useState(activeStep),
    _useState2 = _slicedToArray(_useState, 2),
    activeStepIndex = _useState2[0],
    setActiveStepIndex = _useState2[1];
  var decreaseStepIndex = function decreaseStepIndex() {
    var newIndex = activeStepIndex;
    --newIndex;
    setActiveStepIndex(newIndex);
    if (setActiveStep) {
      setActiveStep(newIndex);
    }
  };
  var increaseStepIndex = function increaseStepIndex() {
    var newIndex = activeStepIndex;
    ++newIndex;
    setActiveStepIndex(newIndex);
    if (setActiveStep) {
      setActiveStep(newIndex);
    }
  };
  useEffect(function () {
    if (activeStep && activeStep !== activeStepIndex) {
      setActiveStepIndex(activeStep);
    }
  }, [activeStep, activeStepIndex]);
  var Content = list[activeStepIndex];
  return /*#__PURE__*/React.createElement(Content, {
    activeStepIndex: activeStepIndex,
    isNextDisabled: activeStepIndex === list.length - 1,
    isPrevDisabled: activeStepIndex === 0,
    prevHandler: decreaseStepIndex,
    nextHandler: increaseStepIndex,
    stepCount: list.length
  });
};

export { Stepper };
