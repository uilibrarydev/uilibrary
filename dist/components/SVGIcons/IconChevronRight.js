import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronRight = function IconChevronRight(_ref) {
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
    d: "M8.57904 4.21967C8.28615 4.51256 8.28615 4.98744 8.57904 5.28033L15.2987 12L8.57905 18.7197C8.28615 19.0126 8.28615 19.4874 8.57905 19.7803C8.87194 20.0732 9.34681 20.0732 9.63971 19.7803L16.8897 12.5303C17.1826 12.2374 17.1826 11.7626 16.8897 11.4697L9.63971 4.21967C9.34681 3.92678 8.87194 3.92678 8.57904 4.21967Z",
    fill: "#222222"
  }));
};

export { IconChevronRight, IconChevronRight as default };
