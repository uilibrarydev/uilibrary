import React from 'react';

var Breadcrumb = function Breadcrumb(props) {
  var selectedValue = props.selectedValue,
    breadCrumbItems = props.breadCrumbItems,
    _props$className = props.className,
    className = _props$className === void 0 ? '' : _props$className,
    onSelect = props.onSelect;
  return /*#__PURE__*/React.createElement("div", {
    className: "breadcrumb ".concat(className)
  }, breadCrumbItems.map(function (itemInfo) {
    return /*#__PURE__*/React.createElement("span", {
      className: "breadcrumb__item",
      key: itemInfo.value
    }, /*#__PURE__*/React.createElement("span", {
      className: "breadcrumb__item__inner ".concat(selectedValue === itemInfo.value ? 'selected' : ''),
      onClick: function onClick() {
        return onSelect(itemInfo.value);
      }
    }, itemInfo.label));
  }));
};

export { Breadcrumb };
