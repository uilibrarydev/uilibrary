import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowDownLeft = function IconArrowDownLeft(_ref) {
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
    id: "Direction=Down Left, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M13.2456 21.0049C13.6598 21.0049 13.9956 20.6692 13.9956 20.2549C13.9956 19.8407 13.6598 19.5049 13.2456 19.5049H5.5765L20.7763 4.30517C21.0748 4.00659 21.0748 3.52251 20.7763 3.22393C20.4777 2.92536 19.9936 2.92536 19.695 3.22393L4.49561 18.4234V10.7549C4.49561 10.3407 4.15982 10.0049 3.74561 10.0049C3.33139 10.0049 2.99561 10.3407 2.99561 10.7549V20.2549C2.99561 20.6692 3.33139 21.0049 3.74561 21.0049H13.2456Z",
    fill: "#222222"
  })));
};

export { IconArrowDownLeft, IconArrowDownLeft as default };
