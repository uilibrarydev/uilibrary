import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconFlag = function IconFlag(_ref) {
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
    id: "Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M3 3.74805C3 3.33383 3.33579 2.99805 3.75 2.99805H20.2541C20.8722 2.99805 21.225 3.70369 20.8541 4.19811L16.6898 9.74927L20.8541 15.3004C21.225 15.7948 20.8722 16.5005 20.2541 16.5005L4.5 16.5V21.2499C4.5 21.6296 4.21785 21.9434 3.85177 21.993L3.75 21.9999C3.3703 21.9999 3.05651 21.7177 3.00685 21.3517L3 21.2499V3.74805ZM18.7539 4.49805H4.5V15.0005H18.7539L15.1522 10.1993C14.9522 9.93264 14.9522 9.5659 15.1522 9.29921L18.7539 4.49805Z",
    fill: "#222222"
  })));
};

export { IconFlag, IconFlag as default };
