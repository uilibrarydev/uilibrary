import React from 'react';
import classNames from 'classnames';
import { IconChevronRight } from '../SVGIcons/IconChevronRight.js';
import { IconChevronLeft } from '../SVGIcons/IconChevronLeft.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

var SideNavigation = function SideNavigation(props) {
  var children = props.children,
    open = props.open,
    setOpen = props.setOpen;
  var handleToggleOpen = function handleToggleOpen() {
    setOpen(!open);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('side--navigation', open ? 'open' : 'close')
  }, children, /*#__PURE__*/React.createElement("div", {
    className: "collapse",
    onClick: handleToggleOpen
  }, open ? /*#__PURE__*/React.createElement(IconChevronLeft, {
    type: "inverse"
  }) : /*#__PURE__*/React.createElement(IconChevronRight, {
    type: "inverse",
    size: "medium"
  })));
};

export { SideNavigation };
