import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useRef } from 'react';
import { Button } from '../Button/Button.js';
import { Popover } from '../Popover/Popover.js';
import { IconCopy } from '../SVGIcons/IconCopy.js';
import '../../extends-a63feb99.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import 'classnames';
import 'dayjs';
import '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../Button/consts.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../Tooltip/types.js';
import '../../hooks/useHideOnScroll.js';
import '../../hooks/useOnOutsideClick.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../Link/Link.js';

var Copy = function Copy(_ref) {
  var textAfterCopy = _ref.textAfterCopy,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className,
    text = _ref.text,
    dataId = _ref.dataId;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isTooltipVisible = _useState2[0],
    setTooltipVisibility = _useState2[1];
  var copyIconRef = useRef(null);
  var copy = function copy(e) {
    e.stopPropagation();
    navigator.clipboard.writeText(text);
    setTooltipVisibility(true);
    setTimeout(function () {
      return setTooltipVisibility(false);
    }, 3000);
  };
  return /*#__PURE__*/React.createElement("div", {
    ref: copyIconRef,
    className: "copy-icon"
  }, /*#__PURE__*/React.createElement(Button, {
    dataId: dataId,
    type: "tertiary",
    iconProps: {
      Component: IconCopy
    },
    size: "small",
    className: className,
    onClick: copy
  }), isTooltipVisible ? /*#__PURE__*/React.createElement(Popover, {
    clicked: true,
    elemRef: copyIconRef.current,
    text: textAfterCopy || 'Copied',
    position: 'top-center'
  }) : null);
};

export { Copy };
