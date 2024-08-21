import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React, { useMemo } from 'react';
import InputMask from 'react-input-mask';
import classNames from 'classnames';
import { NumericFormat } from 'react-number-format';
import { Label } from '../../helperComponents/Label/Label.js';
import { ErrorMessage } from '../../helperComponents/ErrorMessage/ErrorMessage.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { Text } from '../Text/Text.js';
import 'react-syntax-highlighter';
import { IconCheckmarkCircleFilled } from '../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../typeof-3b51e673.js';
import '../../utils/helpers.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';

var _excluded = ["datePlaceHolderText", "className", "size", "error", "hasError", "label", "mask", "maskChar", "maskPlaceholder", "currentValue", "name", "leftIconProps", "rightIconProps", "disabled", "required", "readonly", "placeholder", "type", "helperText", "successMessage", "maxCount", "setFieldValue", "handleChange", "dataId", "isValid", "allowLeadingZeros", "thousandSeparator", "allowNegative", "hideCounter", "labelAddons", "witUpperCase", "isAllowed"];
var Input = /*#__PURE__*/React.forwardRef(function (_ref, _ref2) {
  var datePlaceHolderText = _ref.datePlaceHolderText,
    className = _ref.className,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'large' : _ref$size,
    error = _ref.error,
    hasError = _ref.hasError,
    label = _ref.label,
    mask = _ref.mask,
    maskChar = _ref.maskChar,
    maskPlaceholder = _ref.maskPlaceholder,
    currentValue = _ref.currentValue,
    name = _ref.name,
    leftIconProps = _ref.leftIconProps,
    rightIconProps = _ref.rightIconProps,
    disabled = _ref.disabled,
    required = _ref.required,
    readonly = _ref.readonly,
    placeholder = _ref.placeholder,
    _ref$type = _ref.type,
    type = _ref$type === void 0 ? 'text' : _ref$type,
    helperText = _ref.helperText,
    successMessage = _ref.successMessage,
    maxCount = _ref.maxCount,
    setFieldValue = _ref.setFieldValue,
    handleChange = _ref.handleChange,
    _ref$dataId = _ref.dataId,
    dataId = _ref$dataId === void 0 ? '' : _ref$dataId,
    isValid = _ref.isValid,
    allowLeadingZeros = _ref.allowLeadingZeros,
    _ref$thousandSeparato = _ref.thousandSeparator,
    thousandSeparator = _ref$thousandSeparato === void 0 ? '' : _ref$thousandSeparato,
    _ref$allowNegative = _ref.allowNegative,
    allowNegative = _ref$allowNegative === void 0 ? false : _ref$allowNegative,
    _ref$hideCounter = _ref.hideCounter,
    hideCounter = _ref$hideCounter === void 0 ? false : _ref$hideCounter,
    labelAddons = _ref.labelAddons,
    _ref$witUpperCase = _ref.witUpperCase,
    witUpperCase = _ref$witUpperCase === void 0 ? false : _ref$witUpperCase,
    isAllowed = _ref.isAllowed,
    rest = _objectWithoutProperties(_ref, _excluded);
  var isErrorVisible = hasError !== undefined ? hasError : !!error;
  var placeHolder = label === placeholder ? '' : placeholder || datePlaceHolderText;
  var changeHandler = function changeHandler(event) {
    var eventValue = event.target.value;
    var valueWithoutSeparator = type === 'numeric' ? eventValue.replace(new RegExp(thousandSeparator, 'g'), '') : eventValue;
    if (eventValue.length - 1 === maxCount) {
      return;
    }
    if (setFieldValue && name) {
      setFieldValue(name, valueWithoutSeparator);
    }
    if (handleChange) {
      handleChange(event, !witUpperCase ? valueWithoutSeparator : valueWithoutSeparator.toUpperCase());
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
  var input = mask ? /*#__PURE__*/React.createElement(InputMask, _extends({
    name: name,
    mask: mask
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ,
    ref: function ref() {
      return _ref2 && _ref2();
    }
  }, rest, {
    placeholder: placeHolder,
    onChange: changeHandler,
    disabled: disabled,
    "data-id": dataId,
    className: "".concat(isErrorVisible ? 'with-error-styles' : '')
  }, currentValue ? {
    value: currentValue
  } : {}, {
    maskChar: maskChar,
    maskPlaceholder: maskPlaceholder
  })) : type === 'numeric' ?
  /*#__PURE__*/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.createElement(NumericFormat, _extends({}, rest, {
    name: name,
    onChange: changeHandler,
    placeholder: placeHolder,
    readOnly: readonly,
    allowLeadingZeros: allowLeadingZeros,
    thousandSeparator: thousandSeparator,
    allowNegative: allowNegative,
    maxLength: maxCount,
    inputMode: 'numeric',
    disabled: disabled,
    isAllowed: isAllowed
  }, currentValue !== undefined ? {
    value: currentValue
  } : {})) :
  /*#__PURE__*/
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  React.createElement("input", _extends({
    readOnly: readonly,
    disabled: disabled,
    name: name,
    ref: _ref2,
    type: type,
    placeholder: placeHolder,
    onChange: changeHandler,
    "data-id": dataId
  }, rest, currentValue !== undefined ? {
    value: currentValue
  } : {}));
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("input input--".concat(size), className, {
      'input--icon-left': leftIconProps,
      'input--icon-right': rightIconProps,
      'input--invalid': isErrorVisible || !!error,
      'input--valid': isValid,
      'input--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement(Label, {
    text: label,
    invalid: isErrorVisible,
    required: required,
    disabled: disabled,
    labelAddons: labelAddons,
    dataId: dataId
  }), /*#__PURE__*/React.createElement("div", {
    className: "input__inner"
  }, input, leftIconProps !== null && leftIconProps !== void 0 && leftIconProps.Component ? /*#__PURE__*/React.createElement(leftIconProps.Component, _extends({
    size: "small"
  }, leftIconProps, {
    className: classNames('input__icon', 'input__icon--left', _defineProperty({}, leftIconProps.className || '', !!leftIconProps.className))
  })) : null, rightIconProps !== null && rightIconProps !== void 0 && rightIconProps.Component ? /*#__PURE__*/React.createElement(rightIconProps.Component, _extends({
    size: "small"
  }, rightIconProps, {
    className: classNames('input__icon', 'input__icon--right', _defineProperty({}, rightIconProps.className || '', !!rightIconProps.className))
  })) : null), error || successMessage || helperText || maxCount ? /*#__PURE__*/React.createElement("div", {
    className: "input__message mt-4"
  }, isErrorVisible && error ? /*#__PURE__*/React.createElement(ErrorMessage, {
    message: error,
    icon: "infoFilled",
    dataId: dataId
  }) : null, successMessage ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: "success",
    className: "flexbox align-items--center"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconCheckmarkCircleFilled, {
    type: "success",
    size: "xsmall"
  }), /*#__PURE__*/React.createElement("span", {
    className: "ml-4"
  }, successMessage))) : null, helperText && !successMessage && !(isErrorVisible || error) ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary'
  }, helperText) : null, maxCount && !hideCounter && !hasError ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary',
    className: "input__counter"
  }, "".concat(currentLength, "/").concat(maxCount)) : null) : null);
});
Input.displayName = 'FormInput';

export { Input };
