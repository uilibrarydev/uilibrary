import { _ as _extends } from '../../extends-a63feb99.js';
import React, { useMemo } from 'react';
import classNames from 'classnames';
import { CHECKBOX_HEADER_ID, CHECKBOX_DEFAULT_WIDTH } from './utils.js';
import '../../toConsumableArray-0b5aa713.js';
import '../../slicedToArray-c937067d.js';
import './IndeterminateCheckbox.js';
import '../Checkbox/Checkbox.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
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

function Row(_ref) {
  var row = _ref.row,
    selectedFlatRows = _ref.selectedFlatRows,
    withSelect = _ref.withSelect,
    handleRowClick = _ref.handleRowClick;
  var isRowSelected = useMemo(function () {
    return selectedFlatRows.find(function (r) {
      return r.id === row.id;
    });
  }, [selectedFlatRows]);
  return /*#__PURE__*/React.createElement("tr", _extends({}, row.getRowProps(), {
    className: classNames({
      selected: Boolean(isRowSelected)
    }),
    onClick: function onClick() {
      return handleRowClick === null || handleRowClick === void 0 ? void 0 : handleRowClick(row.original);
    }
  }), row.cells.map(function (_ref2, i, arr) {
    var _arr$column;
    var getCellProps = _ref2.getCellProps,
      column = _ref2.column,
      render = _ref2.render;
    var isSelection = column.id === CHECKBOX_HEADER_ID;
    return /*#__PURE__*/React.createElement("td", _extends({
      key: i
    }, getCellProps(), {
      style: {
        left: !isSelection && withSelect && (column === null || column === void 0 ? void 0 : column.fixed) === 'left' ? CHECKBOX_DEFAULT_WIDTH : 0
      },
      className: classNames({
        fixed_column_left: (column === null || column === void 0 ? void 0 : column.fixed) === 'left',
        fixed_column_right: (column === null || column === void 0 ? void 0 : column.fixed) === 'right',
        fixed_checkbox: isSelection && ((_arr$column = arr[i + 1].column) === null || _arr$column === void 0 ? void 0 : _arr$column.fixed) === 'left'
      })
    }), render('Cell'));
  }));
}

export { Row };
