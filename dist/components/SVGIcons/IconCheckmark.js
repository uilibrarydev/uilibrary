import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCheckmark = function IconCheckmark(_ref) {
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
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5.01471 12.9697C4.72181 12.6768 4.24694 12.6768 3.95404 12.9697C3.66115 13.2626 3.66115 13.7374 3.95404 14.0303L8.45404 18.5303C8.74694 18.8232 9.22181 18.8232 9.5147 18.5303L20.5147 7.53033C20.8076 7.23744 20.8076 6.76256 20.5147 6.46967C20.2218 6.17678 19.7469 6.17678 19.454 6.46967L8.98438 16.9393L5.01471 12.9697Z",
    fill: "#222222"
  }));
};

export { IconCheckmark, IconCheckmark as default };
