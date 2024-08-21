import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconProhibitedFilled = function IconProhibitedFilled(_ref) {
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
    d: "M11.9941 2C17.517 2 21.9941 6.47715 21.9941 12C21.9941 17.5228 17.517 22 11.9941 22C6.47129 22 1.99414 17.5228 1.99414 12C1.99414 6.47715 6.47129 2 11.9941 2ZM18.1072 7.6538L7.64794 18.1131C8.87406 18.9864 10.3741 19.5 11.9941 19.5C16.1363 19.5 19.4941 16.1421 19.4941 12C19.4941 10.38 18.9805 8.87992 18.1072 7.6538ZM11.9941 4.5C7.85201 4.5 4.49414 7.85786 4.49414 12C4.49414 13.62 5.00778 15.1201 5.88109 16.3462L16.3403 5.88695C15.1142 5.01364 13.6142 4.5 11.9941 4.5Z",
    fill: "#222222"
  })));
};

export { IconProhibitedFilled, IconProhibitedFilled as default };
