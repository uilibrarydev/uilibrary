import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretUp = function IconCaretUp(_ref) {
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
    id: "Direction=Up, Size=24, Theme=Regular"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M6.06733 14.9083C5.36012 15.7165 5.9341 16.9814 7.00805 16.9814H18.8043C19.8782 16.9814 20.4522 15.7165 19.745 14.9083L14.2232 8.59765C13.526 7.80083 12.2864 7.80083 11.5892 8.59765L6.06733 14.9083ZM7.55899 15.4814L12.718 9.58541C12.8176 9.47158 12.9947 9.47158 13.0943 9.58541L18.2533 15.4814H7.55899Z",
    fill: "#222222"
  })));
};

export { IconCaretUp, IconCaretUp as default };
