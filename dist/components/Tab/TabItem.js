import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import { Badge } from '../Badge/Badge.js';
import { noop } from '../../utils/helpers.js';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';
import '../Text/Text.js';
import 'dayjs';

var TabItem = function TabItem(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    iconProps = props.iconProps,
    badgeProps = props.badgeProps,
    label = props.label,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$disabled = props.disabled,
    disabled = _props$disabled === void 0 ? false : _props$disabled,
    isSelected = props.isSelected,
    rightIconProps = props.rightIconProps,
    val = props.val,
    onClick = props.onClick,
    dataId = props.dataId;
  return /*#__PURE__*/React.createElement("div", {
    onClick: disabled ? noop : onClick,
    className: classNames('tab', _defineProperty({}, "tab--".concat(size), size), {
      'tab--disabled': disabled
    }, {
      'tab--selected': isSelected
    }, className)
  }, iconProps !== null && iconProps !== void 0 && iconProps.Component ? /*#__PURE__*/React.createElement(iconProps.Component, _extends({
    className: "tab__icon mr-8",
    size: "".concat(size == 'small' ? 'xsmall' : 'small')
  }, iconProps)) : null, /*#__PURE__*/React.createElement("span", {
    className: "tab__label",
    "data-id": dataId
  }, label), rightIconProps !== null && rightIconProps !== void 0 && rightIconProps.Component ? /*#__PURE__*/React.createElement(rightIconProps.Component, _extends({
    onClick: function onClick(e) {
      if (rightIconProps !== null && rightIconProps !== void 0 && rightIconProps.action) {
        e.stopPropagation();
        rightIconProps === null || rightIconProps === void 0 || rightIconProps.action(val);
      }
    },
    className: "tab__icon ml-8",
    size: "".concat(size == 'small' ? 'xsmall' : 'small')
  }, rightIconProps)) : null, badgeProps !== null && badgeProps !== void 0 && badgeProps.text ? /*#__PURE__*/React.createElement(Badge, _extends({
    className: "tab__badge ml-8",
    size: "small",
    type: "secondary"
  }, badgeProps)) : null);
};

export { TabItem };
