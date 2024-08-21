import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretDown = function IconCaretDown(_ref) {
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
    id: "Direction=Down, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M6.06733 10.0731C5.36012 9.2649 5.9341 8 7.00805 8H18.8043C19.8782 8 20.4522 9.2649 19.745 10.0731L14.2232 16.3838C13.526 17.1806 12.2864 17.1806 11.5892 16.3838L6.06733 10.0731ZM7.55899 9.5L12.718 15.396C12.8176 15.5099 12.9947 15.5099 13.0943 15.396L18.2533 9.5H7.55899Z",
    fill: "#222222"
  })));
};

export { IconCaretDown, IconCaretDown as default };
