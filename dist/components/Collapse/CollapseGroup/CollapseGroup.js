import { _ as _toConsumableArray } from '../../../toConsumableArray-0b5aa713.js';
import { _ as _slicedToArray } from '../../../slicedToArray-c937067d.js';
import React, { useState } from 'react';
import { CollapseItem } from '../CollapseItem/CollapseItem.js';
import '../../../extends-a63feb99.js';
import 'framer-motion';
import '../../Text/Text.js';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../SVGIcons/IconChevronRight.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../Divider/Divider.js';
import '../../../helperComponents/AnimatePresenceWrapper/AnimatePresenceWrapper.js';
import '../../SVGIcons/IconChevronDown.js';

var CollapseGroup = function CollapseGroup(props) {
  var items = props.items,
    singleSelection = props.singleSelection,
    _props$titleProps = props.titleProps,
    titleProps = _props$titleProps === void 0 ? {} : _props$titleProps;
  var size = titleProps.size,
    color = titleProps.color;
  var _useState = useState(items.filter(function (item) {
      return item.isOpen;
    }).map(function (item) {
      return item.value;
    })),
    _useState2 = _slicedToArray(_useState, 2),
    openValues = _useState2[0],
    setOpenValues = _useState2[1];
  var onCollapseSelect = function onCollapseSelect(value) {
    if (singleSelection) {
      setOpenValues([value]);
    } else {
      setOpenValues([].concat(_toConsumableArray(openValues), [value]));
    }
  };
  var onCollapseDeselect = function onCollapseDeselect(value) {
    setOpenValues(openValues.filter(function (item) {
      return item !== value;
    }));
  };
  return /*#__PURE__*/React.createElement("div", {
    className: 'collapse-group'
  }, items.map(function (_ref) {
    var id = _ref.id,
      title = _ref.title,
      value = _ref.value,
      content = _ref.content,
      dataId = _ref.dataId,
      iconProps = _ref.iconProps;
    var isOpen = openValues.indexOf(value) !== -1;
    return /*#__PURE__*/React.createElement(CollapseItem, {
      className: 'collapse-group__item',
      id: id,
      isOpen: isOpen,
      key: value,
      dataId: dataId,
      title: {
        size: size,
        color: color,
        text: title
      },
      toggle: function toggle() {
        return isOpen ? onCollapseDeselect(value) : onCollapseSelect(value);
      },
      labelLeftIconProps: iconProps
    }, content);
  }));
};

export { CollapseGroup };
