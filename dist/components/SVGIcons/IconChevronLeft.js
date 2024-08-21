import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronLeft = function IconChevronLeft(_ref) {
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
    d: "M15.6397 4.21967C15.9326 4.51256 15.9326 4.98744 15.6397 5.28033L8.92003 12L15.6397 18.7197C15.9326 19.0126 15.9326 19.4874 15.6397 19.7803C15.3468 20.0732 14.8719 20.0732 14.579 19.7803L7.32904 12.5303C7.03615 12.2374 7.03615 11.7626 7.32904 11.4697L14.579 4.21967C14.8719 3.92678 15.3468 3.92678 15.6397 4.21967Z",
    fill: "#222222"
  }));
};

export { IconChevronLeft, IconChevronLeft as default };
