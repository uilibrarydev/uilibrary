import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconChevronUpFilled = function IconChevronUpFilled(_ref) {
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
    d: "M4.40227 15.7071C4.79279 16.0976 5.42596 16.0976 5.81648 15.7071L12.1094 9.41421L18.4023 15.7071C18.7928 16.0976 19.426 16.0976 19.8165 15.7071C20.207 15.3166 20.207 14.6834 19.8165 14.2929L12.8165 7.29289C12.426 6.90237 11.7928 6.90237 11.4023 7.29289L4.40227 14.2929C4.01174 14.6834 4.01174 15.3166 4.40227 15.7071Z",
    fill: "#222222"
  }));
};

export { IconChevronUpFilled, IconChevronUpFilled as default };
