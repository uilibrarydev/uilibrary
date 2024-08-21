import { _ as _extends } from '../../extends-a63feb99.js';
import { _ as _objectWithoutProperties } from '../../objectWithoutProperties-b86e0c22.js';
import React from 'react';
import { TabItem } from './TabItem.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../Badge/Badge.js';
import '../Text/Text.js';
import 'classnames';
import '../../utils/helpers.js';
import 'dayjs';

var _excluded = ["selectedValue", "tabItems", "onSelect"];
var Tab = function Tab(props) {
  var selectedValue = props.selectedValue,
    tabItems = props.tabItems,
    onSelect = props.onSelect,
    rest = _objectWithoutProperties(props, _excluded);
  return /*#__PURE__*/React.createElement("div", {
    className: "tabs-container"
  }, tabItems.map(function (tabInfo) {
    return /*#__PURE__*/React.createElement(TabItem, _extends({
      label: tabInfo.label,
      badgeProps: tabInfo.badgeProps,
      onClick: function onClick() {
        return onSelect(tabInfo.value);
      },
      key: tabInfo.value,
      val: tabInfo.value,
      isSelected: selectedValue === tabInfo.value,
      dataId: (tabInfo === null || tabInfo === void 0 ? void 0 : tabInfo.dataId) || '',
      disabled: tabInfo.disabled
    }, rest));
  }));
};

export { Tab };
