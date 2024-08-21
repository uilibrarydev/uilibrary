import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronUpDown = function IconChevronUpDown(_ref) {
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
    d: "M13.0094 2.23017C12.868 2.08311 12.6728 2 12.4688 2C12.2647 2 12.0695 2.08311 11.9281 2.23017L5.67813 8.73017C5.39103 9.02875 5.40034 9.50353 5.69892 9.79062C5.9975 10.0777 6.47228 10.0684 6.75938 9.76983L12.4688 3.83208L18.1781 9.76983C18.4652 10.0684 18.94 10.0777 19.2386 9.79062C19.5372 9.50353 19.5465 9.02875 19.2594 8.73017L13.0094 2.23017ZM13.0094 21.7698C12.868 21.9169 12.6728 22 12.4688 22C12.2647 22 12.0695 21.9169 11.9281 21.7698L5.67813 15.2698C5.39103 14.9713 5.40034 14.4965 5.69892 14.2094C5.9975 13.9223 6.47228 13.9316 6.75938 14.2302L12.4688 20.1679L18.1781 14.2302C18.4652 13.9316 18.94 13.9223 19.2386 14.2094C19.5372 14.4965 19.5465 14.9713 19.2594 15.2698L13.0094 21.7698Z",
    fill: "#222222"
  })));
};

export { IconChevronUpDown, IconChevronUpDown as default };
