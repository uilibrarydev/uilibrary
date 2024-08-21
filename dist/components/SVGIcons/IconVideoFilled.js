import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconVideoFilled = function IconVideoFilled(_ref) {
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
    d: "M16 16.25C16 18.0449 14.5449 19.5 12.75 19.5H5.25C3.45507 19.5 2 18.0449 2 16.25V7.75C2 5.95507 3.45507 4.5 5.25 4.5H12.75C14.5449 4.5 16 5.95507 16 7.75V16.25ZM21.762 5.89334C21.9156 6.07414 22 6.30368 22 6.54096V17.4588C22 18.0111 21.5523 18.4588 21 18.4588C20.7627 18.4588 20.5332 18.3744 20.3524 18.2208L17 15.3709V8.62794L20.3524 5.77899C20.7732 5.42132 21.4043 5.47252 21.762 5.89334Z",
    fill: "#222222"
  }));
};

export { IconVideoFilled, IconVideoFilled as default };
