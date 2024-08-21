import React from 'react';

var Container = function Container(props) {
  var children = props.children;
  return /*#__PURE__*/React.createElement("div", {
    className: "container"
  }, children);
};

export { Container };
