import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconBookmark = function IconBookmark(_ref) {
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
    d: "M6.19058 21.8538C5.69444 22.2107 5.00256 21.8562 5.00256 21.2449V6.24902C5.00256 4.4541 6.45764 2.99902 8.25256 2.99902H15.751C17.5459 2.99902 19.001 4.4541 19.001 6.24902V21.2449C19.001 21.8562 18.3091 22.2107 17.8129 21.8538L12.0018 17.6728L6.19058 21.8538ZM17.501 6.24902C17.501 5.28253 16.7175 4.49902 15.751 4.49902H8.25256C7.28607 4.49902 6.50256 5.28253 6.50256 6.24902V19.7814L11.5637 16.1401C11.8254 15.9518 12.1781 15.9518 12.4398 16.1401L17.501 19.7814V6.24902Z",
    fill: "#222222"
  })));
};

export { IconBookmark, IconBookmark as default };
