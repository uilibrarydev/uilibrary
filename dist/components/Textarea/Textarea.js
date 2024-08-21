import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React, { useMemo } from 'react';
import { Label } from '../../helperComponents/Label/Label.js';
import { ErrorMessage } from '../../helperComponents/ErrorMessage/ErrorMessage.js';
import classNames from 'classnames';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { Text } from '../Text/Text.js';
import 'react-syntax-highlighter';
import { IconCheckmarkCircleFilled } from '../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../utils/helpers.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

var _excluded = ["className", "error", "hasError", "label", "disabled", "currentValue", "changeHandler", "placeHolder", "onChange", "required", "maxCount", "helperText", "successMessage", "dataId", "labelAddons"];
var Textarea = /*#__PURE__*/React.forwardRef(function (_ref, ref) {
  var className = _ref.className,
    error = _ref.error,
    hasError = _ref.hasError,
    label = _ref.label,
    disabled = _ref.disabled,
    currentValue = _ref.currentValue,
    changeHandler = _ref.changeHandler,
    placeHolder = _ref.placeHolder,
    onChange = _ref.onChange,
    _ref$required = _ref.required,
    required = _ref$required === void 0 ? false : _ref$required,
    maxCount = _ref.maxCount,
    helperText = _ref.helperText,
    successMessage = _ref.successMessage,
    _ref$dataId = _ref.dataId,
    dataId = _ref$dataId === void 0 ? '' : _ref$dataId,
    labelAddons = _ref.labelAddons,
    rest = _objectWithoutProperties(_ref, _excluded);
  var isErrorVisible = hasError !== undefined ? hasError : !!error;
  var handleChange = function handleChange(event) {
    if (changeHandler) {
      changeHandler(event);
    }
    if (onChange) {
      onChange(event);
    }
  };
  var currentLength = useMemo(function () {
    if (currentValue) {
      return currentValue.length;
    }
    if (rest && rest.value && typeof rest.value === 'string') {
      return rest.value.length;
    }
    return 0;
  }, [rest, currentValue]);
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('textarea', className, {
      'textarea--invalid': hasError
    })
  }, /*#__PURE__*/React.createElement(Label, {
    text: label,
    invalid: isErrorVisible,
    required: required,
    disabled: disabled,
    labelAddons: labelAddons
  }), /*#__PURE__*/React.createElement("div", {
    className: "textarea__inner"
  }, /*#__PURE__*/React.createElement("textarea", _extends({
    "data-id": dataId,
    disabled: disabled,
    ref: ref,
    placeholder: label ? '' : placeHolder,
    onChange: handleChange
  }, rest, currentValue ? {
    value: currentValue
  } : {}))), error || successMessage || helperText || maxCount ? /*#__PURE__*/React.createElement("div", {
    className: "textarea__message mt-4"
  }, error && /*#__PURE__*/React.createElement(ErrorMessage, {
    message: error,
    icon: "infoFilled"
  }), successMessage ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "success",
    className: "flexbox align-items--center"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconCheckmarkCircleFilled, {
    type: "success",
    size: "xsmall"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-4"
  }, successMessage))) : null, helperText && !successMessage ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary'
  }, helperText) : null, maxCount ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary',
    className: "textarea__counter"
  }, "".concat(currentLength, "/").concat(maxCount)) : null) : null);
});
Textarea.displayName = 'Textarea';

export { Textarea };
