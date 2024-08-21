import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { Text } from '../Text/Text.js';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';
import '../../utils/helpers.js';
import 'dayjs';

var StatusTextSize = /*#__PURE__*/function (StatusTextSize) {
  StatusTextSize["large"] = "standard";
  StatusTextSize["medium"] = "small";
  StatusTextSize["small"] = "xsmall";
  return StatusTextSize;
}(StatusTextSize || {});
var Status = function Status(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'primary' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    _props$text = props.text,
    text = _props$text === void 0 ? '' : _props$text,
    children = props.children,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    leftIconProps = props.leftIconProps,
    rightIconProps = props.rightIconProps,
    _props$withCircle = props.withCircle,
    withCircle = _props$withCircle === void 0 ? true : _props$withCircle,
    dataId = props.dataId;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("status status--".concat(size), className)
  }, leftIconProps !== null && leftIconProps !== void 0 && leftIconProps.Component ? /*#__PURE__*/React.createElement(leftIconProps.Component, _extends({
    size: "xsmall",
    type: type,
    className: "mr-6"
  }, leftIconProps)) : null, withCircle && !(leftIconProps !== null && leftIconProps !== void 0 && leftIconProps.Component) ? /*#__PURE__*/React.createElement("span", {
    className: classNames('status__circle', 'mr-8', _defineProperty({}, "status__circle--".concat(type), true))
  }) : null, /*#__PURE__*/React.createElement("div", {
    className: "status__label"
  }, /*#__PURE__*/React.createElement(Text, {
    dataId: "".concat(dataId, "-text"),
    type: !withCircle ? type : 'primary',
    size: StatusTextSize[size]
  }, text), children), rightIconProps);
};

export { Status };
