import React from 'react';

var CIRCLE_SIZES = /*#__PURE__*/function (CIRCLE_SIZES) {
  CIRCLE_SIZES[CIRCLE_SIZES["small"] = 29] = "small";
  CIRCLE_SIZES[CIRCLE_SIZES["large"] = 45] = "large";
  return CIRCLE_SIZES;
}(CIRCLE_SIZES || {});
var Progress = function Progress(props) {
  var percent = props.percent,
    stepCount = props.stepCount,
    currentStep = props.currentStep,
    _props$type = props.type,
    type = _props$type === void 0 ? 'linear' : _props$type,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    _props$noText = props.noText,
    noText = _props$noText === void 0 ? false : _props$noText,
    dimension = props.dimension,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    _props$loop = props.loop,
    loop = _props$loop === void 0 ? false : _props$loop;
  var _dimension = dimension ? dimension : CIRCLE_SIZES[size];
  var r = _dimension - 5;
  var _percent = stepCount && currentStep ? currentStep / stepCount * 100 : percent;
  var strokeDasharray = "".concat(2 * r * 3.14, "px");
  return /*#__PURE__*/React.createElement("div", {
    className: "progress-bar progress-bar--".concat(type, " progress-bar--").concat(size, " ").concat(className).concat(loop ? ' progress-bar--loop' : ''),
    style: type == 'circle' ? {
      width: 2 * _dimension,
      height: 2 * _dimension
    } : {}
  }, type == 'circle' ? /*#__PURE__*/React.createElement("svg", null, /*#__PURE__*/React.createElement("circle", {
    cx: _dimension,
    cy: _dimension,
    r: r
  }), /*#__PURE__*/React.createElement("circle", {
    cx: _dimension,
    cy: _dimension,
    r: r,
    style: {
      strokeDasharray: strokeDasharray,
      strokeDashoffset: "calc(".concat(strokeDasharray, " - (").concat(strokeDasharray, " * ").concat(_percent, ") / 100)")
    }
  })) : /*#__PURE__*/React.createElement("div", {
    className: "progress-bar__inner"
  }, /*#__PURE__*/React.createElement("div", {
    className: "progress-bar__filled",
    style: {
      width: "".concat(_percent, "%")
    }
  })), !noText ? /*#__PURE__*/React.createElement("span", {
    className: "progress-bar__percent"
  }, stepCount ? "".concat(currentStep, "/").concat(stepCount) : "".concat(percent, "%")) : null);
};

export { Progress };
