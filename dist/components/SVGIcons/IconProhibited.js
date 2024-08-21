import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconProhibited = function IconProhibited(_ref) {
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
    d: "M11.9941 2C17.517 2 21.9941 6.47715 21.9941 12C21.9941 17.5228 17.517 22 11.9941 22C6.47129 22 1.99414 17.5228 1.99414 12C1.99414 6.47715 6.47129 2 11.9941 2ZM18.5115 6.54309L6.53723 18.5173C8.01369 19.7549 9.9169 20.5 11.9941 20.5C16.6886 20.5 20.4941 16.6944 20.4941 12C20.4941 9.92276 19.749 8.01955 18.5115 6.54309ZM11.9941 3.5C7.29972 3.5 3.49414 7.30558 3.49414 12C3.49414 14.0772 4.23927 15.9804 5.47682 17.4569L17.4511 5.48268C15.9746 4.24513 14.0714 3.5 11.9941 3.5Z",
    fill: "#222222"
  })));
};

export { IconProhibited, IconProhibited as default };
