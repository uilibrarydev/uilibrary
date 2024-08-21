import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import ReactPaginate from 'react-paginate';
import { PAGE_RANGE_DISPLAYED } from './consts.js';
import classNames from 'classnames';
import { IconChevronRight } from '../SVGIcons/IconChevronRight.js';
import { IconChevronLeft } from '../SVGIcons/IconChevronLeft.js';
import { IconMore } from '../SVGIcons/IconMore.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';

var Pagination = function Pagination(props) {
  var _props$labels = props.labels,
    labels = _props$labels === void 0 ? {
      next: /*#__PURE__*/React.createElement(IconChevronRight, {
        size: "small"
      }),
      previous: /*#__PURE__*/React.createElement(IconChevronLeft, {
        size: "small"
      })
    } : _props$labels,
    totalCount = props.totalCount,
    handleChangePage = props.handleChangePage,
    _props$breakLabel = props.breakLabel,
    breakLabel = _props$breakLabel === void 0 ? /*#__PURE__*/React.createElement(IconMore, {
      size: "small"
    }) : _props$breakLabel,
    _props$classname = props.classname,
    classname = _props$classname === void 0 ? '' : _props$classname,
    _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    pageSize = props.pageSize,
    _props$disableInitial = props.disableInitialCallback,
    disableInitialCallback = _props$disableInitial === void 0 ? false : _props$disableInitial,
    page = props.page;
  var handlePageChange = function handlePageChange(_ref) {
    var selected = _ref.selected;
    handleChangePage(selected + 1);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "pagination-wrapper flexbox"
  }, /*#__PURE__*/React.createElement(ReactPaginate, _extends({
    pageCount: Math.ceil(totalCount / pageSize),
    disableInitialCallback: disableInitialCallback,
    pageRangeDisplayed: PAGE_RANGE_DISPLAYED,
    marginPagesDisplayed: 1,
    onPageChange: handlePageChange,
    containerClassName: classNames("pagination pagination--".concat(size), classname),
    activeClassName: classname || 'active',
    previousLabel: labels === null || labels === void 0 ? void 0 : labels.previous,
    nextLabel: labels === null || labels === void 0 ? void 0 : labels.next,
    breakClassName: "page-item",
    breakLinkClassName: "page-link",
    breakLabel: breakLabel
  }, page ? {
    forcePage: page - 1
  } : {})));
};

export { Pagination };
