import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React, { forwardRef } from 'react';
import { Input } from '../Input/Input.js';
import classNames from 'classnames';
import { noop } from '../../utils/helpers.js';
import { IconAdd } from '../SVGIcons/IconAdd.js';
import { IconSubtract } from '../SVGIcons/IconSubtract.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import 'react-input-mask';
import 'react-number-format';
import '../../helperComponents/Label/Label.js';
import '../Text/Text.js';
import 'dayjs';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../hooks/useScreenSize.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../SVGIcons/IconCheckmarkCircleFilled.js';

var _excluded = ["max", "min", "handleChange", "name", "counter", "setFieldValue", "customError", "label", "required", "value", "hasError"];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Counter = /*#__PURE__*/forwardRef(function (props, ref) {
  var _props$max = props.max,
    max = _props$max === void 0 ? 99999999 : _props$max,
    _props$min = props.min,
    min = _props$min === void 0 ? 0 : _props$min,
    handleChange = props.handleChange,
    name = props.name,
    _props$counter = props.counter,
    counter = _props$counter === void 0 ? 0 : _props$counter,
    setFieldValue = props.setFieldValue,
    customError = props.customError,
    label = props.label,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    value = props.value,
    _props$hasError = props.hasError,
    hasError = _props$hasError === void 0 ? false : _props$hasError,
    rest = _objectWithoutProperties(props, _excluded);
  var counterValue = value !== undefined ? parseInt(value) : counter;
  var isFormField = value !== undefined;
  var customChangeHandler = function customChangeHandler(inputedValue) {
    if (handleChange) {
      inputedValue > max ? handleChange(max) : inputedValue < min ? handleChange(min) : handleChange(inputedValue);
    }
    if (setFieldValue && name) {
      setFieldValue(name, inputedValue, {
        shouldValidate: hasError
      });
    }
  };
  var increase = function increase() {
    return customChangeHandler(counterValue - 1);
  };
  var decrease = function decrease() {
    return customChangeHandler(counterValue + 1);
  };
  var onInputChange = function onInputChange(e) {
    return customChangeHandler(parseInt(e.target.value));
  };
  var isIncreaseIconDisabled = counterValue <= min;
  var isDecreaseIconDisabled = counterValue === undefined || counterValue >= max;
  return /*#__PURE__*/React.createElement(Input, _extends({}, rest, {
    className: "counter",
    error: isFormField ? '' : customError,
    label: label,
    required: required,
    leftIconProps: {
      dataId: "".concat(rest.dataId, "-decrement"),
      size: 'small',
      Component: IconSubtract,
      className: classNames({
        action_active: !isIncreaseIconDisabled
      }),
      type: isIncreaseIconDisabled ? 'disabled' : 'primary',
      onClick: isIncreaseIconDisabled ? noop : increase
    },
    rightIconProps: {
      dataId: "".concat(rest.dataId, "-increment"),
      Component: IconAdd,
      size: 'small',
      className: classNames({
        action_active: !isDecreaseIconDisabled
      }),
      onClick: isDecreaseIconDisabled ? noop : decrease,
      type: isDecreaseIconDisabled ? 'disabled' : 'primary'
    },
    type: "number",
    name: name,
    value: counterValue,
    onChange: onInputChange
  }));
});
Counter.displayName = 'Counter';

export { Counter };
