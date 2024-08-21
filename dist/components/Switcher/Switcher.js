import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { Label } from '../../helperComponents/Label/Label.js';
import 'dayjs';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import { IconCheckmark } from '../SVGIcons/IconCheckmark.js';
import 'react-syntax-highlighter';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
var Switcher = /*#__PURE__*/forwardRef(function (props, ref) {
  var onClick = props.onClick,
    _props$id = props.id,
    id = _props$id === void 0 ? '' : _props$id,
    name = props.name,
    value = props.value,
    disabled = props.disabled,
    label = props.label,
    _props$inlineType = props.inlineType,
    inlineType = _props$inlineType === void 0 ? false : _props$inlineType,
    dataId = props.dataId,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    setFieldValue = props.setFieldValue,
    selectedValue = props.selectedValue,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    labelAddons = props.labelAddons;
  var isChecked = !!value || !!selectedValue;
  var changeHandler = function changeHandler() {
    if (name && setFieldValue) {
      setFieldValue(name, !isChecked);
    }
    if (onClick) {
      onClick(!isChecked);
    }
  };
  return /*#__PURE__*/React.createElement("div", {
    className: classNames('switcher', {
      'switcher--inline': inlineType
    })
  }, label && /*#__PURE__*/React.createElement(Label, {
    text: label,
    disabled: disabled,
    labelAddons: labelAddons,
    size: inlineType ? 'standard' : size,
    className: "switcher__label"
  }), /*#__PURE__*/React.createElement("label", {
    id: id,
    className: classNames('controller', 'controller--switch', "controller--switch-".concat(size), className, {
      'controller--disabled': disabled
    })
  }, /*#__PURE__*/React.createElement("input", {
    "data-id": dataId,
    type: "checkbox",
    tabIndex: 0,
    onChange: changeHandler,
    checked: isChecked,
    disabled: disabled
  }), /*#__PURE__*/React.createElement("span", {
    className: "controller__icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "controller__icon__inner"
  }, /*#__PURE__*/React.createElement(IconCheckmark, {
    size: "xsmall",
    className: "controller__mark"
  })))));
});
Switcher.displayName = 'Switcher';

export { Switcher };
