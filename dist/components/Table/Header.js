import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _defineProperty } from '../../defineProperty-d5787266.js';
import React from 'react';
import classNames from 'classnames';
import { CHECKBOX_DEFAULT_WIDTH, calcColumnWidth, CHECKBOX_HEADER_ID } from './utils.js';
import { Text } from '../Text/Text.js';
import { IconArrowDown } from '../SVGIcons/IconArrowDown.js';
import { IconArrowUp } from '../SVGIcons/IconArrowUp.js';
import '../../typeof-3b51e673.js';
import '../../toConsumableArray-0b5aa713.js';
import '../../slicedToArray-c937067d.js';
import './IndeterminateCheckbox.js';
import '../Checkbox/Checkbox.js';
import '../Popover/Popover.js';
import '../../hooks/useGetTooltipStyles.js';
import '../../hooks/useGetElemSizes.js';
import '../../hooks/useGetElemPositions.js';
import '../../hooks/useGetTooltipPosition.js';
import '../Tooltip/types.js';
import '../../hooks/useHideOnScroll.js';
import '../../consts/index.js';
import 'dayjs';
import '../../hooks/useOnOutsideClick.js';
import '../../hooks/useScreenSize.js';
import 'react-hook-form';
import '../Link/Link.js';
import '../../utils/helpers.js';
import '../SVGIcons/IconInfo.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import 'react-syntax-highlighter';

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function Header(_ref) {
  var headerGroup = _ref.headerGroup,
    tableWidth = _ref.tableWidth,
    withSelect = _ref.withSelect,
    _ref$fixedHeader = _ref.fixedHeader,
    fixedHeader = _ref$fixedHeader === void 0 ? false : _ref$fixedHeader;
  return /*#__PURE__*/React.createElement("tr", _extends({}, headerGroup.getHeaderGroupProps(), {
    className: classNames({
      fixed_header: fixedHeader
    })
  }), headerGroup.headers.map(function (_ref2, i, arr) {
    var _arr;
    var id = _ref2.id,
      minWidth = _ref2.minWidth,
      maxWidth = _ref2.maxWidth,
      width = _ref2.width,
      widthInPercent = _ref2.widthInPercent,
      getHeaderProps = _ref2.getHeaderProps,
      fixed = _ref2.fixed,
      columnProps = _ref2.columnProps,
      render = _ref2.render,
      isSorted = _ref2.isSorted,
      isSortedDesc = _ref2.isSortedDesc,
      getSortByToggleProps = _ref2.getSortByToggleProps;
    var isSelection = id === CHECKBOX_HEADER_ID;
    var style = _objectSpread(_objectSpread(_objectSpread({
      width: isSelection ? CHECKBOX_DEFAULT_WIDTH : calcColumnWidth(widthInPercent, tableWidth),
      left: !isSelection && withSelect && fixed === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0
    }, !isSelection && minWidth ? {
      minWidth: minWidth
    } : {}), !isSelection && maxWidth ? {
      maxWidth: maxWidth
    } : {}), !isSelection && width ? {
      width: width
    } : {});
    return /*#__PURE__*/React.createElement("th", _extends({
      key: i
    }, getHeaderProps(columnProps !== null && columnProps !== void 0 && columnProps.sortable ? getSortByToggleProps() : undefined), {
      className: classNames({
        fixed_column_left: fixed === 'left',
        fixed_column_right: fixed === 'right',
        fixed_checkbox: isSelection && ((_arr = arr[i + 1]) === null || _arr === void 0 ? void 0 : _arr.fixed) === 'left',
        pointer: columnProps === null || columnProps === void 0 ? void 0 : columnProps.sortable
      }),
      style: style
    }), /*#__PURE__*/React.createElement("div", {
      className: "flexbox align-items--center"
    }, /*#__PURE__*/React.createElement(Text, {
      weight: "bold",
      className: "text-truncate"
    }, render('Header')), isSorted && isSortedDesc && /*#__PURE__*/React.createElement(IconArrowDown, {
      size: "xsmall",
      className: "ml-4"
    }), isSorted && !isSortedDesc && /*#__PURE__*/React.createElement(IconArrowUp, {
      size: "xsmall",
      className: "ml-4"
    }), !isSorted && (columnProps === null || columnProps === void 0 ? void 0 : columnProps.sortable) && /*#__PURE__*/React.createElement(IconArrowDown, {
      size: "xsmall",
      className: "ml-4 unsorted__icon"
    })));
  }));
}

export { Header };
