import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import '../../typeof-3b51e673.js';

var IconWarning = function IconWarning(_ref) {
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
    d: "M12.9993 17C12.9993 16.4484 12.5522 16.0013 12.0006 16.0013C11.4491 16.0013 11.002 16.4484 11.002 17C11.002 17.5515 11.4491 17.9986 12.0006 17.9986C12.5522 17.9986 12.9993 17.5515 12.9993 17ZM12.7401 9.1467C12.6901 8.78066 12.3761 8.49876 11.9964 8.49906C11.5822 8.49939 11.2467 8.83545 11.247 9.24966L11.2506 13.7513L11.2575 13.853C11.3075 14.2191 11.6215 14.501 12.0012 14.5007C12.4154 14.5003 12.7509 14.1643 12.7506 13.7501L12.747 9.24846L12.7401 9.1467ZM13.9693 3.65888C13.113 2.11108 10.8878 2.1111 10.0316 3.65893L2.28634 17.6604C1.45678 19.16 2.5414 20.9995 4.25518 20.9995H19.7462C21.46 20.9995 22.5446 19.16 21.715 17.6603L13.9693 3.65888ZM11.3442 4.38501C11.6296 3.86907 12.3713 3.86906 12.6567 4.38499L20.4025 18.3865C20.679 18.8863 20.3175 19.4995 19.7462 19.4995H4.25518C3.68392 19.4995 3.32238 18.8863 3.5989 18.3865L11.3442 4.38501Z",
    fill: "#222222"
  }));
};

export { IconWarning, IconWarning as default };
