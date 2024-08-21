import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { Text } from '../Text/Text.js';
import { ChipCustomType } from './types.js';
import classNames from 'classnames';
import { IconDismissCircleFilled } from '../SVGIcons/IconDismissCircleFilled.js';
import '../../utils/helpers.js';
import 'dayjs';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

var ChipsActionIconSize = /*#__PURE__*/function (ChipsActionIconSize) {
  ChipsActionIconSize["large"] = "medium";
  ChipsActionIconSize["medium"] = "small";
  ChipsActionIconSize["small"] = "xsmall";
  return ChipsActionIconSize;
}(ChipsActionIconSize || {});
var Chips = function Chips(props) {
  var _props$type = props.type,
    type = _props$type === void 0 ? 'filled' : _props$type,
    _props$color = props.color,
    color = _props$color === void 0 ? 'primary' : _props$color,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    text = props.text,
    disabled = props.disabled,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    leftIconProps = props.leftIconProps,
    withAction = props.withAction,
    onClick = props.onClick,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId;
  var customType = disabled ? 'disabled' : type == ChipCustomType.filled ? ChipCustomType.inverse : color;
  var handleClick = function handleClick(event) {
    event.stopPropagation();
    onClick === null || onClick === void 0 || onClick(event);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("chips chips--".concat(type, " chips--").concat(disabled ? 'disabled' : color, " chips--").concat(size), className)
  }, leftIconProps !== null && leftIconProps !== void 0 && leftIconProps.Component ? /*#__PURE__*/React.createElement(leftIconProps.Component, _extends({
    dataId: "".concat(dataId, "-icon"),
    size: size == 'small' ? 'xsmall' : 'small',
    type: customType
  }, leftIconProps)) : null, text ? /*#__PURE__*/React.createElement(Text, {
    dataId: "".concat(dataId, "-text"),
    type: customType,
    size: size == 'small' ? 'small' : 'standard',
    className: "chips__label"
  }, /*#__PURE__*/React.createElement(React.Fragment, null, text)) : null, withAction && /*#__PURE__*/React.createElement(IconDismissCircleFilled, {
    dataId: "".concat(dataId, "-icon"),
    size: ChipsActionIconSize[size],
    type: customType,
    className: "chips__delete",
    onClick: handleClick
  }));
};

export { Chips };
