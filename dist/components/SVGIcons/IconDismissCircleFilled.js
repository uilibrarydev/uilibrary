import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconDismissCircleFilled = function IconDismissCircleFilled(_ref) {
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
    d: "M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM15.5303 8.46967L15.4462 8.39705C15.1852 8.2034 14.827 8.20101 14.5636 8.38988L14.4697 8.46967L12 10.939L9.53033 8.46967L9.44621 8.39705C9.18522 8.2034 8.82701 8.20101 8.56362 8.38988L8.46967 8.46967L8.39705 8.55379C8.2034 8.81478 8.20101 9.17299 8.38988 9.43638L8.46967 9.53033L10.939 12L8.46967 14.4697L8.39705 14.5538C8.2034 14.8148 8.20101 15.173 8.38988 15.4364L8.46967 15.5303L8.55379 15.6029C8.81478 15.7966 9.17299 15.799 9.43638 15.6101L9.53033 15.5303L12 13.061L14.4697 15.5303L14.5538 15.6029C14.8148 15.7966 15.173 15.799 15.4364 15.6101L15.5303 15.5303L15.6029 15.4462C15.7966 15.1852 15.799 14.827 15.6101 14.5636L15.5303 14.4697L13.061 12L15.5303 9.53033L15.6029 9.44621C15.7966 9.18522 15.799 8.82701 15.6101 8.56362L15.5303 8.46967L15.4462 8.39705L15.5303 8.46967Z",
    fill: "#222222"
  })));
};

export { IconDismissCircleFilled, IconDismissCircleFilled as default };
