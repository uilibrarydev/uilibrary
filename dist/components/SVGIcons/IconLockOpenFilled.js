import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconLockOpenFilled = function IconLockOpenFilled(_ref) {
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
    id: "State=Open, Size=24, Theme=Filled"
  }, /*#__PURE__*/React.createElement("path", {
    id: "Shape",
    d: "M12 2.00104C13.7084 2.00104 15.2111 3.0822 15.7713 4.66746C15.9553 5.18819 15.6823 5.75949 15.1616 5.94348C14.678 6.11434 14.1509 5.89117 13.9307 5.44149L13.8855 5.33377C13.6057 4.54174 12.8541 4.00104 12 4.00104C10.9462 4.00104 10.0828 4.81649 10.0065 5.85082L10.001 6L10.001 7.99904L17.75 8C18.9409 8 19.9156 8.92516 19.9948 10.096L20 10.25V19.7463C20 20.9371 19.0748 21.9119 17.904 21.9911L17.75 21.9963H6.25C5.05914 21.9963 4.08436 21.0711 4.00519 19.9003L4 19.7463V10.25C4 9.05914 4.92516 8.08436 6.09595 8.00519L6.25 8L8.001 7.99904L8.00104 6C8.00104 3.79143 9.79143 2.00104 12 2.00104ZM12 13.4995C11.1723 13.4995 10.5014 14.1705 10.5014 14.9981C10.5014 15.8258 11.1723 16.4968 12 16.4968C12.8277 16.4968 13.4986 15.8258 13.4986 14.9981C13.4986 14.1705 12.8277 13.4995 12 13.4995Z",
    fill: "#222222"
  })));
};

export { IconLockOpenFilled, IconLockOpenFilled as default };
