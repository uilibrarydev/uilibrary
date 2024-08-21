import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useState } from 'react';
import classNames from 'classnames';
import { NavigationItemTypes } from './types.js';
import { Badge } from '../../Badge/Badge.js';
import { IconArrowDown } from '../../SVGIcons/IconArrowDown.js';
import { IconDynamicComponent } from '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';

var NavigationItem = function NavigationItem(props) {
  var As = props.As,
    type = props.type,
    isOpen = props.isOpen,
    iconName = props.iconName,
    showBadge = props.showBadge,
    _props$expandable = props.expandable,
    expandable = _props$expandable === void 0 ? false : _props$expandable,
    _props$showAction = props.showAction,
    showAction = _props$showAction === void 0 ? false : _props$showAction,
    actionElm = props.actionElm,
    _props$active = props.active,
    active = _props$active === void 0 ? false : _props$active,
    badgeContent = props.badgeContent,
    children = props.children;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    childOpen = _useState2[0],
    setChildOpen = _useState2[1];
  var displayNavigationItem = function displayNavigationItem() {
    if (type === NavigationItemTypes.BLOCK_HEADER && !isOpen) {
      return null;
    }
    return As();
  };
  var displayHeader = isOpen && type === NavigationItemTypes.BLOCK_HEADER && showAction && actionElm && actionElm;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: classNames('navigation--wrapper', "navigation--wrapper--".concat(type)),
    onClick: function onClick() {
      return setChildOpen(!childOpen);
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: classNames('navigation--item', "navigation--item--".concat(type), expandable && 'expandable', active && 'active')
  }, /*#__PURE__*/React.createElement("div", {
    className: "navigation--item--wrapper"
  }, !isOpen && type === NavigationItemTypes.BLOCK_HEADER && As(), displayHeader, /*#__PURE__*/React.createElement("div", {
    className: classNames('navigation--item--as--wrapper', isOpen ? 'open' : 'close')
  }, displayNavigationItem()), !isOpen && type === NavigationItemTypes.SUB && As(), type === NavigationItemTypes.USER && iconName && isOpen && /*#__PURE__*/React.createElement(IconDynamicComponent, {
    componentName: iconName
  })), showBadge && badgeContent && isOpen && /*#__PURE__*/React.createElement(Badge, {
    type: "primary",
    text: badgeContent,
    size: "small"
  }), expandable && isOpen && /*#__PURE__*/React.createElement("div", {
    className: classNames('navigation--item--expandable--icon', childOpen && 'open')
  }, /*#__PURE__*/React.createElement(IconArrowDown, {
    size: "medium"
  }))), children && /*#__PURE__*/React.createElement("div", {
    className: classNames('navigation--items--child', childOpen && 'active', !isOpen && 'isOpen')
  }, children)));
};

export { NavigationItem };
