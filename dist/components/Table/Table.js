import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _toConsumableArray } from '../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../slicedToArray-c937067d.js';
import React, { useRef, useState, useMemo, useEffect } from 'react';
import { useTable, useSortBy, useRowSelect } from 'react-table';
import { setSelectedRows } from './utils.js';
import { Row } from './Row.js';
import { Header } from './Header.js';
import classNames from 'classnames';
import { useDispatchEventOnScroll } from '../../hooks/useDispatchEventOnScroll.js';
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
import '../SVGIcons/IconArrowDown.js';
import '../SVGIcons/IconArrowUp.js';

function Table(_ref) {
  var columns = _ref.columns,
    data = _ref.data,
    onChange = _ref.onChange,
    fixedHeader = _ref.fixedHeader,
    _ref$withSelect = _ref.withSelect,
    withSelect = _ref$withSelect === void 0 ? false : _ref$withSelect,
    handleRowClick = _ref.handleRowClick,
    className = _ref.className,
    containerRefHandler = _ref.containerRefHandler;
  var tableRef = useRef(null);
  var _useState = useState(400),
    _useState2 = _slicedToArray(_useState, 2),
    tableWidth = _useState2[0],
    setTableWidth = _useState2[1];
  var dispatchScrollEvent = useDispatchEventOnScroll();
  var sortedColumns = useMemo(function () {
    var condition1 = function condition1(item) {
      return item.fixed === 'left';
    }; // Move even numbers to the start
    var condition2 = function condition2(item) {
      return item.fixed === 'right';
    }; // Move numbers greater than 5 to the end

    // Custom sorting function
    columns.sort(function (a, b) {
      if (condition1(a) && !condition1(b)) {
        return -1; // Move 'a' to the start
      } else if (!condition1(a) && condition1(b)) {
        return 1; // Move 'b' to the start
      } else if (condition2(a) && !condition2(b)) {
        return 1; // Move 'a' to the end
      } else if (!condition2(a) && condition2(b)) {
        return -1; // Move 'b' to the end
      } else {
        return 0; // Their order doesn't matter
      }
    });
    return _toConsumableArray(columns);
  }, [columns]);
  var _ref2 = useTable({
      columns: sortedColumns,
      data: data
    }, useSortBy, useRowSelect, function (hooks) {
      return setSelectedRows(hooks, withSelect);
    }),
    getTableProps = _ref2.getTableProps,
    getTableBodyProps = _ref2.getTableBodyProps,
    selectedFlatRows = _ref2.selectedFlatRows,
    headerGroups = _ref2.headerGroups,
    rows = _ref2.rows,
    prepareRow = _ref2.prepareRow,
    state = _ref2.state;
  useEffect(function () {
    onChange === null || onChange === void 0 || onChange(state);
  }, [JSON.stringify(state)]);
  var handleResize = function handleResize() {
    if (tableRef.current) {
      var _tableRef$current;
      setTableWidth((_tableRef$current = tableRef.current) === null || _tableRef$current === void 0 ? void 0 : _tableRef$current.offsetWidth);
    }
  };
  useEffect(function () {
    window.addEventListener('resize', handleResize);
    if (tableRef.current) {
      var _tableRef$current2;
      setTableWidth((_tableRef$current2 = tableRef.current) === null || _tableRef$current2 === void 0 ? void 0 : _tableRef$current2.offsetWidth);
    }
    return function () {
      window.removeEventListener('resize', handleResize);
    };
  }, [tableRef.current]);
  return /*#__PURE__*/React.createElement("div", {
    onScroll: dispatchScrollEvent,
    ref: containerRefHandler,
    className: classNames('table-wrapper scrollbar scrollbar--horizontal scrollbar--vertical', className),
    style: {
      maxHeight: fixedHeader === null || fixedHeader === void 0 ? void 0 : fixedHeader.y
    }
  }, /*#__PURE__*/React.createElement("table", _extends({}, getTableProps(), {
    ref: tableRef
  }), /*#__PURE__*/React.createElement("thead", null, headerGroups.map(function (headerGroup, i) {
    return /*#__PURE__*/React.createElement(Header, {
      key: i,
      withSelect: withSelect,
      fixedHeader: Boolean(fixedHeader),
      headerGroup: headerGroup,
      tableWidth: tableWidth
    });
  })), /*#__PURE__*/React.createElement("tbody", getTableBodyProps(), rows.map(function (row) {
    prepareRow(row);
    return /*#__PURE__*/React.createElement(Row, {
      handleRowClick: handleRowClick,
      withSelect: withSelect,
      selectedFlatRows: selectedFlatRows,
      row: row,
      key: row.id
    });
  }))));
}

export { Table };
