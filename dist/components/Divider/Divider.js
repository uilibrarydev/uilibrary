import React from 'react';
import classNames from 'classnames';

var Divider = function Divider(props) {
  var type = props.type,
    isHorizontal = props.isHorizontal,
    className = props.className;
  return /*#__PURE__*/React.createElement("hr", {
    className: classNames('divider', "divider--".concat(type), {
      'divider--horizontal': isHorizontal,
      'divider--vertical': !isHorizontal
    }, className)
  });
};

export { Divider };
