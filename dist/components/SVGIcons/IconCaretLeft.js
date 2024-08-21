import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretLeft = function IconCaretLeft(_ref) {
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
    id: "Direction=Left, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M13.8331 18.839C14.6413 19.5462 15.9062 18.9722 15.9062 17.8983L15.9062 6.10204C15.9062 5.02809 14.6413 4.45412 13.8331 5.16132L7.52242 10.6831C6.7256 11.3804 6.7256 12.6199 7.52242 13.3172L13.8331 18.839ZM14.4062 17.3473L8.51018 12.1883C8.39635 12.0887 8.39635 11.9116 8.51018 11.812L14.4062 6.65298L14.4062 17.3473Z",
    fill: "#222222"
  })));
};

export { IconCaretLeft, IconCaretLeft as default };
