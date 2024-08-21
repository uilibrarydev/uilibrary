import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronUp = function IconChevronUp(_ref) {
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
    d: "M4.32904 15.5303C4.62194 15.8232 5.09681 15.8232 5.38971 15.5303L12.1094 8.81066L18.829 15.5303C19.1219 15.8232 19.5968 15.8232 19.8897 15.5303C20.1826 15.2374 20.1826 14.7626 19.8897 14.4697L12.6397 7.21967C12.3468 6.92678 11.8719 6.92678 11.579 7.21967L4.32904 14.4697C4.03615 14.7626 4.03615 15.2374 4.32904 15.5303Z",
    fill: "#222222"
  }));
};

export { IconChevronUp, IconChevronUp as default };
