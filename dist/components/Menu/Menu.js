import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useState, useId, useMemo } from 'react';
import ReactDOM from 'react-dom';
import { useGetElemSizes } from '../../hooks/useGetElemSizes.js';
import { useGetElemPositions } from '../../hooks/useGetElemPositions.js';
import { useGetTooltipPosition } from '../../hooks/useGetTooltipPosition.js';
import { useHideOnScroll } from '../../hooks/useHideOnScroll.js';
import 'dayjs';
import { useOnOutsideClick } from '../../hooks/useOnOutsideClick.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import classNames from 'classnames';
import { OptionItem } from '../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import '../../consts/index.js';
import '../../extends-a63feb99.js';
import '../Checkbox/Checkbox.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../Popover/Popover.js';
import '../../hooks/useGetTooltipStyles.js';
import '../Tooltip/types.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../Link/Link.js';
import '../SVGIcons/IconInfo.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../Avatar/Avatar.js';
import '../FileUpload/FileUpload.js';
import '../../toConsumableArray-0b5aa713.js';
import '../FileUpload/types.js';
import '../Button/Button.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../Button/consts.js';
import '../../helperComponents/Label/Label.js';
import '../FileUpload/UploadItems.js';
import '../../hooks/useFormProps.js';
import '../../context/types.js';
import '../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../SVGIcons/IconDelete.js';
import '../SVGIcons/IconEditFilled.js';
import '../SVGIcons/IconEdit.js';
import '../SVGIcons/IconAttach.js';
import '../Tooltip/Tooltip.js';
import '../SVGIcons/IconCheckmark.js';

var Menu = function Menu(props) {
  var _props$menuItems = props.menuItems,
    menuItems = _props$menuItems === void 0 ? [] : _props$menuItems,
    parentRef = props.parentRef,
    onClose = props.onClose,
    isOpen = props.isOpen,
    _props$position = props.position,
    position = _props$position === void 0 ? 'bottom-right' : _props$position,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    menuRef = _useState2[0],
    setMenuRef = _useState2[1];
  useOnOutsideClick(menuRef, onClose, isOpen, useId());
  useHideOnScroll(onClose);
  var _useGetElemPositions = useGetElemPositions(parentRef),
    left = _useGetElemPositions.left,
    top = _useGetElemPositions.top;
  var _useGetElemSizes = useGetElemSizes(parentRef),
    width = _useGetElemSizes.width,
    height = _useGetElemSizes.height;
  var _useGetElemSizes2 = useGetElemSizes(menuRef),
    menuWidth = _useGetElemSizes2.width,
    menuHeight = _useGetElemSizes2.height;
  var tooltipPosition = useGetTooltipPosition({
    tooltipRef: menuRef,
    elemRef: parentRef,
    initialPosition: position,
    hasTriangle: false
  });
  var menuStyles = useMemo(function () {
    if (tooltipPosition === 'bottom-right') {
      return {
        left: left + 4,
        top: top + 4 + height
      };
    }
    if (tooltipPosition === 'bottom-left') {
      return {
        left: left - menuWidth + width,
        top: top + 4 + height
      };
    }
    if (tooltipPosition === 'top-right') {
      return {
        left: left + 4,
        top: top - menuHeight - 4
      };
    }
    if (tooltipPosition === 'top-left') {
      return {
        left: left - menuWidth + width,
        top: top - menuHeight - 4
      };
    }
    return {
      left: left,
      top: top + 4 + height
    };
  }, [left, top, width, tooltipPosition, menuWidth, height, menuHeight]);
  if (!parentRef || !isOpen) {
    return null;
  }
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    className: classNames('select', 'select--menu', className),
    style: menuStyles,
    ref: setMenuRef
  }, menuItems.map(function (_ref) {
    var label = _ref.label,
      meta = _ref.meta,
      value = _ref.value,
      handler = _ref.handler,
      iconProps = _ref.iconProps,
      disabled = _ref.disabled,
      dataId = _ref.dataId;
    return /*#__PURE__*/React.createElement(OptionItem, {
      dataId: dataId,
      disabled: disabled,
      key: value,
      data: {
        label: label,
        value: value,
        meta: meta
      },
      labelLeftIconProps: iconProps,
      onClick: function onClick() {
        onClose();
        if (handler) {
          handler();
        }
      }
    });
  })), parentRef);
};

export { Menu };
