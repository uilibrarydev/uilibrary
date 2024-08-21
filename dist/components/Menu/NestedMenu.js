import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
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
import 'framer-motion';
import { CollapseGroup } from '../Collapse/CollapseGroup/CollapseGroup.js';
import { OptionItem } from '../../helperComponents/OptionItem/OptionItem.js';
import 'react-syntax-highlighter';
import '../../typeof-3b51e673.js';
import '../../consts/index.js';
import '../../toConsumableArray-0b5aa713.js';
import '../Collapse/CollapseItem/CollapseItem.js';
import '../../extends-a63feb99.js';
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../SVGIcons/IconChevronRight.js';
import '../Divider/Divider.js';
import '../../helperComponents/AnimatePresenceWrapper/AnimatePresenceWrapper.js';
import '../SVGIcons/IconChevronDown.js';
import '../Checkbox/Checkbox.js';
import '../Popover/Popover.js';
import '../../hooks/useGetTooltipStyles.js';
import '../Tooltip/types.js';
import '../Link/Link.js';
import '../SVGIcons/IconInfo.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import '../Avatar/Avatar.js';
import '../FileUpload/FileUpload.js';
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var NestedMenu = function NestedMenu(_ref) {
  var _ref$menuItems = _ref.menuItems,
    menuItems = _ref$menuItems === void 0 ? [] : _ref$menuItems,
    parentRef = _ref.parentRef,
    onClose = _ref.onClose,
    isOpen = _ref.isOpen,
    _ref$position = _ref.position,
    position = _ref$position === void 0 ? 'bottom-right' : _ref$position,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? '' : _ref$className;
  var _useState = useState(null),
    _useState2 = _slicedToArray(_useState, 2),
    menuRef = _useState2[0],
    setMenuRef = _useState2[1];
  useOnOutsideClick(menuRef, onClose, !!isOpen, useId());
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
        right: 0,
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
  var _menuItems = menuItems.map(function (item, index) {
    return _objectSpread(_objectSpread({}, item), {}, {
      content: item.subItems ? /*#__PURE__*/React.createElement("div", {
        className: "nested-menu__sub-items select"
      }, item.subItems.map(function (_ref2) {
        var label = _ref2.label,
          meta = _ref2.meta,
          value = _ref2.value,
          handler = _ref2.handler,
          iconProps = _ref2.iconProps,
          disabled = _ref2.disabled,
          dataId = _ref2.dataId;
        return /*#__PURE__*/React.createElement(OptionItem, {
          dataId: dataId,
          disabled: disabled,
          key: "".concat(index, "-").concat(value),
          data: {
            label: label,
            value: value,
            meta: meta
          },
          labelLeftIconProps: iconProps,
          onClick: function onClick() {
            onClose();
            handler === null || handler === void 0 || handler();
          },
          className: "nested-menu__sub-item"
        });
      })) : null
    });
  });
  return /*#__PURE__*/ReactDOM.createPortal( /*#__PURE__*/React.createElement("div", {
    className: classNames('nested-menu', className),
    style: menuStyles,
    ref: setMenuRef
  }, /*#__PURE__*/React.createElement(CollapseGroup, {
    items: _menuItems
  })), parentRef);
};

export { NestedMenu };
