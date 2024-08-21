import React, { forwardRef } from 'react';
import { Text } from '../Text/Text.js';
import classNames from 'classnames';
import '../../utils/helpers.js';
import 'dayjs';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Radio = /*#__PURE__*/forwardRef(function (props, ref) {
  var name = props.name,
    label = props.label,
    helperText = props.helperText,
    disabled = props.disabled,
    setFieldValue = props.setFieldValue,
    isSelected = props.isSelected,
    value = props.value,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    onClick = props.onClick,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId;
  var isChecked = !!value || !!isSelected;
  var changeHandler = function changeHandler() {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked, {
        shouldValidate: !isChecked
      });
    }
    if (onClick) {
      onClick(!isChecked);
    }
  };
  return /*#__PURE__*/React.createElement("label", {
    className: classNames('controller', 'controller--radio', className, {
      'controller--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement("input", {
    "data-id": dataId,
    type: "radio",
    tabIndex: 0,
    onChange: changeHandler,
    checked: isSelected,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "controller__icon"
  }), label ? /*#__PURE__*/React.createElement("div", {
    className: "controller__right"
  }, /*#__PURE__*/React.createElement(Text, {
    type: disabled ? 'disabled' : 'primary',
    className: "controller__label"
  }, label), helperText ? /*#__PURE__*/React.createElement(Text, {
    size: "small",
    type: disabled ? 'disabled' : 'secondary'
  }, helperText) : null) : null);
});
Radio.displayName = 'Radio';

export { Radio };
