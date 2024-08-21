import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconPhone = function IconPhone(_ref) {
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
    d: "M15.7441 2C16.9868 2 17.9941 3.00736 17.9941 4.25V19.75C17.9941 20.9926 16.9868 22 15.7441 22H8.24414C7.0015 22 5.99414 20.9926 5.99414 19.75V4.25C5.99414 3.00736 7.0015 2 8.24414 2H15.7441ZM15.7441 3.5H8.24414C7.82993 3.5 7.49414 3.83579 7.49414 4.25V19.75C7.49414 20.1642 7.82993 20.5 8.24414 20.5H15.7441C16.1584 20.5 16.4941 20.1642 16.4941 19.75V4.25C16.4941 3.83579 16.1584 3.5 15.7441 3.5ZM13.243 17.5C13.6572 17.4994 13.9935 17.8347 13.9941 18.2489C13.9948 18.6631 13.6595 18.9994 13.2453 19L10.7453 19.0038C10.3311 19.0044 9.99476 18.6691 9.99414 18.2549C9.99352 17.8407 10.3288 17.5044 10.743 17.5038L13.243 17.5Z",
    fill: "#222222"
  })));
};

export { IconPhone, IconPhone as default };
