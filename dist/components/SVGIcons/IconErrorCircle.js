import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconErrorCircle = function IconErrorCircle(_ref) {
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
    d: "M12 2C17.523 2 22 6.478 22 12C22 17.522 17.523 22 12 22C6.477 22 2 17.522 2 12C2 6.478 6.477 2 12 2ZM12 3.667C7.405 3.667 3.667 7.405 3.667 12C3.667 16.595 7.405 20.333 12 20.333C16.595 20.333 20.333 16.595 20.333 12C20.333 7.405 16.595 3.667 12 3.667ZM11.9987 14.5022C12.5502 14.5022 12.9973 14.9494 12.9973 15.5009C12.9973 16.0524 12.5502 16.4996 11.9987 16.4996C11.4471 16.4996 11 16.0524 11 15.5009C11 14.9494 11.4471 14.5022 11.9987 14.5022ZM11.9945 7C12.3742 6.9997 12.6882 7.2816 12.7381 7.64764L12.7451 7.7494L12.7487 12.251C12.749 12.6652 12.4135 13.0013 11.9993 13.0016C11.6196 13.0019 11.3055 12.72 11.2556 12.354L11.2487 12.2522L11.2451 7.7506C11.2447 7.33639 11.5802 7.00033 11.9945 7Z",
    fill: "#222222"
  }));
};

export { IconErrorCircle, IconErrorCircle as default };
