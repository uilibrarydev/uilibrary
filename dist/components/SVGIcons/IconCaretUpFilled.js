import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconCaretUpFilled = function IconCaretUpFilled(_ref) {
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
    d: "M7.00805 16.9814C5.9341 16.9814 5.36012 15.7165 6.06733 14.9083L11.5892 8.59765C12.2864 7.80083 13.526 7.80083 14.2232 8.59765L19.745 14.9083C20.4522 15.7165 19.8782 16.9814 18.8043 16.9814H7.00805Z",
    fill: "#222222"
  }));
};

export { IconCaretUpFilled, IconCaretUpFilled as default };
