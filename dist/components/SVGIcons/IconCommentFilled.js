import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCommentFilled = function IconCommentFilled(_ref) {
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
    id: "Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M5.96875 3C4.17382 3 2.71875 4.45507 2.71875 6.25V14.75C2.71875 16.5449 4.17383 18 5.96875 18H6.71875V20.75C6.71875 21.7801 7.8947 22.368 8.71875 21.75L13.7188 18H19.4688C21.2637 18 22.7188 16.5449 22.7188 14.75V6.25C22.7188 4.45507 21.2637 3 19.4688 3H5.96875Z",
    fill: "#222222"
  })));
};

export { IconCommentFilled, IconCommentFilled as default };
