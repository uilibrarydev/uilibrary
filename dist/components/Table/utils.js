import { _ as _toConsumableArray } from '../../toConsumableArray-0b5aa713.js';
import React from 'react';
import { IndeterminateCheckbox } from './IndeterminateCheckbox.js';
import '../../slicedToArray-c937067d.js';
import '../Checkbox/Checkbox.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../extends-a63feb99.js';
import 'classnames';
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
import '../Text/Text.js';
import '../../utils/helpers.js';
import '../Link/Link.js';
import '../SVGIcons/IconInfo.js';
import '../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../helperComponents/IconDynamicComponent/constants.js';
import 'react-syntax-highlighter';

var CHECKBOX_HEADER_ID = 'selection';
var CHECKBOX_DEFAULT_WIDTH = 48;
function setSelectedRows(hooks, withSelect) {
  if (withSelect) {
    hooks.visibleColumns.push(function (columns) {
      return [{
        id: CHECKBOX_HEADER_ID,
        Header: function Header(_ref) {
          var getToggleAllRowsSelectedProps = _ref.getToggleAllRowsSelectedProps;
          return /*#__PURE__*/React.createElement(IndeterminateCheckbox, getToggleAllRowsSelectedProps());
        },
        Cell: function Cell(_ref2) {
          var row = _ref2.row;
          return /*#__PURE__*/React.createElement(IndeterminateCheckbox, row.getToggleRowSelectedProps());
        }
      }].concat(_toConsumableArray(columns));
    });
  }
}
function calcColumnWidth(percent, tableWidth) {
  return percent * tableWidth / 100;
}

export { CHECKBOX_DEFAULT_WIDTH, CHECKBOX_HEADER_ID, calcColumnWidth, setSelectedRows };
