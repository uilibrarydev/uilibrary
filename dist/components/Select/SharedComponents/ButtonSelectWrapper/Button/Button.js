import React from 'react';
import classNames from 'classnames';
import { Text } from '../../../../Text/Text.js';
import { IconCaretDownFilled } from '../../../../SVGIcons/IconCaretDownFilled.js';
import { IconCaretUpFilled } from '../../../../SVGIcons/IconCaretUpFilled.js';
import '../../../../../utils/helpers.js';
import 'dayjs';
import '../../../../../defineProperty-d5787266.js';
import '../../../../../typeof-3b51e673.js';

var Button = function Button(props) {
  var type = props.type,
    buttonText = props.buttonText,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    isOpen = props.isOpen,
    disabled = props.disabled,
    _props$dataId = props.dataId,
    dataId = _props$dataId === void 0 ? '' : _props$dataId,
    onClick = props.onClick,
    _props$refHandler = props.refHandler,
    refHandler = _props$refHandler === void 0 ? null : _props$refHandler,
    selectedItemsLabels = props.selectedItemsLabels;
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    ref: refHandler,
    "data-id": dataId,
    disabled: disabled,
    className: classNames('btn', "btn--".concat(type), "btn--".concat(size), "btn--".concat(size), className),
    onClick: onClick
  }, /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Text, {
    className: "btn__text mr-4",
    type: selectedItemsLabels ? 'tertiary' : 'secondary'
  }, "".concat(buttonText).concat(selectedItemsLabels ? '  |' : '')), selectedItemsLabels ? /*#__PURE__*/React.createElement(Text, {
    className: "btn__text ml-4"
  }, selectedItemsLabels) : null, isOpen ? /*#__PURE__*/React.createElement(IconCaretUpFilled, {
    size: "xsmall"
  }) : /*#__PURE__*/React.createElement(IconCaretDownFilled, {
    size: "xsmall"
  })));
};

export { Button };
