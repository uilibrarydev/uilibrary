import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconFilter = function IconFilter(_ref) {
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
    d: "M13.5 16C13.9142 16 14.25 16.3358 14.25 16.75C14.25 17.1642 13.9142 17.5 13.5 17.5H10.5C10.0858 17.5 9.75 17.1642 9.75 16.75C9.75 16.3358 10.0858 16 10.5 16H13.5ZM16.5 11C16.9142 11 17.25 11.3358 17.25 11.75C17.25 12.1642 16.9142 12.5 16.5 12.5H7.5C7.08579 12.5 6.75 12.1642 6.75 11.75C6.75 11.3358 7.08579 11 7.5 11H16.5ZM19.5 6C19.9142 6 20.25 6.33579 20.25 6.75C20.25 7.16421 19.9142 7.5 19.5 7.5H4.5C4.08579 7.5 3.75 7.16421 3.75 6.75C3.75 6.33579 4.08579 6 4.5 6H19.5Z",
    fill: "#222222"
  }));
};

export { IconFilter, IconFilter as default };
