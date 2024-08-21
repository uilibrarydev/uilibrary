import React from 'react';
import { Text } from '../../components/Text/Text.js';
import 'classnames';
import '../../utils/helpers.js';
import 'dayjs';

var Label = function Label(props) {
  var text = props.text,
    _props$size = props.size,
    size = _props$size === void 0 ? 'small' : _props$size,
    _props$required = props.required,
    required = _props$required === void 0 ? false : _props$required,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    _props$invalid = props.invalid,
    invalid = _props$invalid === void 0 ? false : _props$invalid,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    labelAddons = props.labelAddons;
  if (!text) {
    return null;
  }
  return /*#__PURE__*/React.createElement(Text, {
    size: size,
    type: invalid ? 'danger' : disabled ? 'disabled' : 'primary',
    className: "label flexbox align-items--start mb-4 ".concat(className)
  }, /*#__PURE__*/React.createElement(React.Fragment, null, text, required ? /*#__PURE__*/React.createElement("sup", null, "*") : null, labelAddons));
};

export { Label };
