import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useState } from 'react';
import { Button } from '../../Button/Button.js';
import { Menu } from '../../Menu/Menu.js';
import 'react-dom';
import 'dayjs';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import 'classnames';
import 'framer-motion';
import { Text } from '../../Text/Text.js';
import 'react-syntax-highlighter';
import { IconMore } from '../../SVGIcons/IconMore.js';
import '../../../extends-a63feb99.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../../consts/index.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../hooks/useOnOutsideClick.js';
import '../../../helperComponents/OptionItem/OptionItem.js';
import '../../Checkbox/Checkbox.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../Tooltip/types.js';
import '../../Link/Link.js';
import '../../../utils/helpers.js';
import '../../SVGIcons/IconInfo.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../FileUpload/types.js';
import '../../../helperComponents/Label/Label.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';

var Actions = function Actions(props) {
  var selectActions = props.selectActions,
    innerLabel = props.innerLabel;
  var _useState = useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isMenuOpen = _useState2[0],
    setIsMenuOpen = _useState2[1];
  var _useState3 = useState(null),
    _useState4 = _slicedToArray(_useState3, 2),
    buttonRef = _useState4[0],
    setButtonRef = _useState4[1];
  var open = function open() {
    return setIsMenuOpen(true);
  };
  var close = function close() {
    return setIsMenuOpen(false);
  };
  return selectActions.length ? /*#__PURE__*/React.createElement("div", {
    className: "action-bar"
  }, innerLabel ? /*#__PURE__*/React.createElement(Text, {
    size: "xsmall",
    type: "secondary",
    className: "action-bar__label"
  }, innerLabel) : null, /*#__PURE__*/React.createElement("div", {
    ref: setButtonRef,
    className: "action-bar__right"
  }, /*#__PURE__*/React.createElement(Button, {
    type: "tertiary",
    onClick: open,
    iconProps: {
      Component: IconMore
    },
    size: "small"
  }), buttonRef ? /*#__PURE__*/React.createElement(Menu, {
    menuItems: selectActions,
    parentRef: buttonRef,
    onClose: close,
    position: "bottom-left",
    isOpen: isMenuOpen
  }) : null)) : null;
};

export { Actions };
