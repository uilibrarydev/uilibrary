import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconMedium = function IconMedium(_ref) {
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
    id: "Company=Medium, Style=Gray, Background=None"
  }, /*#__PURE__*/React.createElement("path", {
    id: "medium",
    d: "M2.85 6.2999C2.85 5.9999 2.7 5.6999 2.55 5.5499L0.3 2.8499V2.3999H7.2L12.6 14.2499L17.4 2.3999H24V2.8499L22.05 4.6499C21.9 4.7999 21.75 4.9499 21.9 5.2499V18.7499C21.9 18.8999 21.9 19.1999 22.05 19.3499L23.85 21.1499V21.5999H14.4V21.1499L16.35 19.1999C16.5 19.0499 16.5 18.8999 16.5 18.5999V7.6499L11.1 21.2999H10.5L4.2 7.6499V16.7999C4.2 17.2499 4.35 17.5499 4.5 17.8499L7.05 20.8499V21.2999H0V20.8499L2.55 17.8499C2.85 17.5499 3 17.2499 2.85 16.7999V6.2999Z",
    fill: "#555555"
  })));
};

export { IconMedium, IconMedium as default };
