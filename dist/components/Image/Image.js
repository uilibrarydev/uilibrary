import React from 'react';

var Image = function Image(props) {
  var name = props.name,
    _props$imagePath = props.imagePath,
    imagePath = _props$imagePath === void 0 ? 'static/media/src/assets/images/image-placeholder.png' : _props$imagePath,
    isBackgroundImage = props.isBackgroundImage,
    backgroundSize = props.backgroundSize,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    isFullWidth = props.isFullWidth,
    isFullHeight = props.isFullHeight,
    ratio = props.ratio;
  return isBackgroundImage ? /*#__PURE__*/React.createElement("div", {
    className: "image image--bg ".concat(className),
    style: {
      backgroundImage: "".concat(imagePath ? "url(".concat(imagePath, ")") : ''),
      backgroundSize: backgroundSize,
      aspectRatio: ratio
    }
  }) : /*#__PURE__*/React.createElement("img", {
    className: "image ".concat(className),
    src: imagePath,
    alt: name,
    style: {
      aspectRatio: ratio,
      width: isFullWidth ? '100%' : '',
      height: isFullHeight ? '100%' : ''
    }
  });
};

export { Image };
