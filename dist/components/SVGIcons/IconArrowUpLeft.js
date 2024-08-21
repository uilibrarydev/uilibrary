import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconArrowUpLeft = function IconArrowUpLeft(_ref) {
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
    id: "Direction=Up Left, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M13.2456 3C13.6598 3 13.9956 3.33579 13.9956 3.75C13.9956 4.16421 13.6598 4.5 13.2456 4.5H5.5765L20.7763 19.6998C21.0748 19.9983 21.0748 20.4824 20.7763 20.781C20.4777 21.0796 19.9936 21.0796 19.695 20.781L4.49561 5.58158V13.25C4.49561 13.6642 4.15982 14 3.74561 14C3.33139 14 2.99561 13.6642 2.99561 13.25V3.75C2.99561 3.33579 3.33139 3 3.74561 3H13.2456Z",
    fill: "#222222"
  })));
};

export { IconArrowUpLeft, IconArrowUpLeft as default };
