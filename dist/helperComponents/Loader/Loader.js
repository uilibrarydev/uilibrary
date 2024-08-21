import React from 'react';

var Loader = function Loader(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    _props$type = props.type,
    type = _props$type === void 0 ? 'lite' : _props$type;
  return /*#__PURE__*/React.createElement("div", {
    className: "loader loader--".concat(type, " loader--").concat(size)
  }, /*#__PURE__*/React.createElement("span", {
    className: "loader__inner"
  }));
};

export { Loader };
