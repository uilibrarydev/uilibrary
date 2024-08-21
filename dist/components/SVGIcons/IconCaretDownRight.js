import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretDownRight = function IconCaretDownRight(_ref) {
  var size = _ref.size,
    type = _ref.type,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    onClick = _ref.onClick,
    refHandler = _ref.refHandler,
    id = _ref.id,
    dataId = _ref.dataId;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    className: classNames('svg-icon', _defineProperty(_defineProperty(_defineProperty({}, "svg-icon__size-".concat(size), size), "svg-icon__type-".concat(type), type), className, className)),
    viewBox: "0 0 24 24",
    fill: "none",
    onClick: onClick,
    ref: refHandler,
    id: id,
    "data-id": dataId ? "".concat(dataId, "-svg-icon") : ''
  }, /*#__PURE__*/React.createElement("g", {
    id: "Direction=Down Right, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M17.4062 7.81065L8.7169 16.5H17.1562C17.2943 16.5 17.4062 16.3881 17.4062 16.25V7.81065ZM16.7724 6.32321C17.5598 5.53575 18.9062 6.09347 18.9062 7.2071V16.25C18.9062 17.2165 18.1227 18 17.1562 18H8.11335C6.99971 18 6.44201 16.6536 7.22946 15.8661L16.7724 6.32321Z",
    fill: "#222222"
  })));
};

export { IconCaretDownRight, IconCaretDownRight as default };
