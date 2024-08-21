import React from 'react';
import { Text } from '../Text/Text.js';
import classNames from 'classnames';
import '../../utils/helpers.js';
import 'dayjs';

var Badge = function Badge(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'primary' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    text = props.text,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("badge badge--".concat(type, "  badge--").concat(size), className)
  }, text ? /*#__PURE__*/React.createElement(Text, {
    size: "xsmall",
    type: type == 'primary' ? 'inverse' : 'primary',
    className: "badge__inner"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, text)) : null);
};

export { Badge };
