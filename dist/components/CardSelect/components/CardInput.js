import { _ as _extends } from '../../../extends-a63feb99.js';
import React from 'react';
import { Input } from '../../Input/Input.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'classnames';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../Text/Text.js';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../../hooks/useScreenSize.js';
import '../../../slicedToArray-c937067d.js';
import '../../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';

var CardInput = function CardInput(props) {
  var inputProps = props.inputProps,
    disabled = props.disabled;
  return inputProps ? /*#__PURE__*/React.createElement(Input, _extends({}, inputProps, {
    className: 'mt-16',
    disabled: disabled
  })) : null;
};

export { CardInput };
