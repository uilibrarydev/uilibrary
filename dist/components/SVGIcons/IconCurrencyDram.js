import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCurrencyDram = function IconCurrencyDram(_ref) {
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
    id: "Theme=Line"
  }, /*#__PURE__*/React.createElement("path", {
    id: "\xD6\x8F",
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M16.1981 20.9816V16.4362H18.9253V14.618H16.1981V12.7998H18.9253V10.9816H16.1981V10.0725C16.1981 5.52708 14.1445 2.7998 10.3985 2.7998C6.65261 2.7998 4.37988 5.52708 4.37988 10.0725C4.98594 10.0725 5.592 10.0725 6.19806 10.0725C6.19806 6.89071 7.5617 4.61799 10.289 4.61799C13.4069 4.61799 14.3799 7.34526 14.3799 10.0725C14.3799 11.8907 14.3799 12.1937 14.3799 10.9816H11.1981V12.7998H14.3799V14.618H11.1981V16.4362H14.3799V20.9816H16.1981Z",
    fill: "#222222"
  })));
};

export { IconCurrencyDram, IconCurrencyDram as default };
