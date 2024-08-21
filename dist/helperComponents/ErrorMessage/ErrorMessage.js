import React from 'react';
import { Text } from '../../components/Text/Text.js';
import { IconDynamicComponent } from '../IconDynamicComponent/IconDynamicComponent.js';
import 'classnames';
import '../../utils/helpers.js';
import 'dayjs';
import '../IconDynamicComponent/constants.js';

var ErrorMessage = function ErrorMessage(props) {
  var message = props.message,
    icon = props.icon,
    dataId = props.dataId;
  return /*#__PURE__*/React.createElement(Text, {
    className: "error-message",
    size: "small",
    type: "danger",
    dataId: dataId ? "".concat(dataId, "-error-message") : ''
  }, /*#__PURE__*/React.createElement(React.Fragment, null, icon && /*#__PURE__*/React.createElement(IconDynamicComponent, {
    componentName: icon,
    className: "mr-4",
    size: "xsmall",
    type: "danger"
  }), /*#__PURE__*/React.createElement("span", null, message)));
};

export { ErrorMessage };
