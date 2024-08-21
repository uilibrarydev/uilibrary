import React from 'react';
import 'classnames';
import { noop, getYearOptions } from '../../../utils/helpers.js';
import '../../../hooks/useScreenSize.js';
import 'react-hook-form';
import '../../Input/Input.js';
import 'react-syntax-highlighter';
import 'react-dom';
import 'framer-motion';
import { IconChevronRight } from '../../SVGIcons/IconChevronRight.js';
import '../../Select/SharedComponents/ContentTop.js';
import { IconChevronLeft } from '../../SVGIcons/IconChevronLeft.js';
import { ButtonSelect } from '../../Select/ButtonSelect/ButtonSelect.js';
import 'dayjs';
import '../../../slicedToArray-c937067d.js';
import '../../../consts/index.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';
import '../../../extends-a63feb99.js';
import '../../../objectWithoutProperties-b86e0c22.js';
import 'react-input-mask';
import 'react-number-format';
import '../../../helperComponents/Label/Label.js';
import '../../Text/Text.js';
import '../../../helperComponents/ErrorMessage/ErrorMessage.js';
import '../../../helperComponents/IconDynamicComponent/IconDynamicComponent.js';
import '../../../helperComponents/IconDynamicComponent/constants.js';
import '../../SVGIcons/IconCheckmarkCircleFilled.js';
import '../../../toConsumableArray-0b5aa713.js';
import '../../Select/SharedComponents/Actions.js';
import '../../Button/Button.js';
import '../../../helperComponents/Loader/Loader.js';
import '../../Button/consts.js';
import '../../Menu/Menu.js';
import '../../../hooks/useGetElemSizes.js';
import '../../../hooks/useGetElemPositions.js';
import '../../../hooks/useGetTooltipPosition.js';
import '../../../hooks/useHideOnScroll.js';
import '../../../hooks/useOnOutsideClick.js';
import '../../../helperComponents/OptionItem/OptionItem.js';
import '../../Checkbox/Checkbox.js';
import '../../Popover/Popover.js';
import '../../../hooks/useGetTooltipStyles.js';
import '../../Tooltip/types.js';
import '../../Link/Link.js';
import '../../SVGIcons/IconInfo.js';
import '../../Avatar/Avatar.js';
import '../../FileUpload/FileUpload.js';
import '../../FileUpload/types.js';
import '../../FileUpload/UploadItems.js';
import '../../../hooks/useFormProps.js';
import '../../../context/types.js';
import '../../SVGIcons/IconDelete.js';
import '../../SVGIcons/IconEditFilled.js';
import '../../SVGIcons/IconEdit.js';
import '../../SVGIcons/IconAttach.js';
import '../../Tooltip/Tooltip.js';
import '../../SVGIcons/IconCheckmark.js';
import '../../SVGIcons/IconMore.js';
import '../../SVGIcons/IconDismissFilled.js';
import '../../SVGIcons/IconSearchFilled.js';
import '../../SVGIcons/IconSelectAllOff.js';
import '../../Select/SharedComponents/Loading.js';
import '../../Select/SharedComponents/ButtonSelectWrapper/ButtonSelectWrapper.js';
import '../../Select/SharedComponents/ButtonSelectWrapper/Button/Button.js';
import '../../SVGIcons/IconCaretDownFilled.js';
import '../../SVGIcons/IconCaretUpFilled.js';
import '../../../hooks/useGetHasBottomSpace.js';
import '../../../hooks/useChangePositionsOnScroll.js';

var CustomHeader = function CustomHeader(props) {
  var months = props.months,
    date = props.date,
    dataPrefix = props.dataPrefix,
    changeYear = props.changeYear,
    changeMonth = props.changeMonth,
    decreaseMonth = props.decreaseMonth,
    increaseMonth = props.increaseMonth,
    startYear = props.startYear,
    endYear = props.endYear,
    prevMonthButtonDisabled = props.prevMonthButtonDisabled,
    nextMonthButtonDisabled = props.nextMonthButtonDisabled;
  var getMonthLabel = function getMonthLabel(month) {
    var selectMonth = months.find(function (item) {
      return item.value === month;
    });
    return selectMonth === null || selectMonth === void 0 ? void 0 : selectMonth.label.toString();
  };
  var month = date === null || date === void 0 ? void 0 : date.getMonth();
  var year = date === null || date === void 0 ? void 0 : date.getFullYear();
  return /*#__PURE__*/React.createElement("div", {
    className: "flexbox custom_header_container"
  }, /*#__PURE__*/React.createElement(IconChevronLeft, {
    size: "small",
    className: "cursor-pointer",
    dataId: dataPrefix ? "".concat(dataPrefix, "-prev-month-button") : '',
    onClick: prevMonthButtonDisabled ? noop : decreaseMonth,
    type: prevMonthButtonDisabled ? 'disabled' : 'primary'
  }), /*#__PURE__*/React.createElement("div", {
    className: "selects_container"
  }, /*#__PURE__*/React.createElement(ButtonSelect, {
    size: "small",
    type: "tertiary",
    className: "date_picker_select",
    offsets: {
      top: 42,
      left: 48
    },
    placeHolder: getMonthLabel(month),
    dataId: dataPrefix ? "".concat(dataPrefix, "-month-select") : '',
    options: months,
    selectedItem: month,
    setSelectedItem: function setSelectedItem(m) {
      return changeMonth(m);
    },
    dropdownWidth: 150
  }), /*#__PURE__*/React.createElement(ButtonSelect, {
    type: "tertiary",
    className: "date_picker_select",
    offsets: {
      top: 42,
      left: 138
    },
    placeHolder: year.toString(),
    dataId: dataPrefix ? "".concat(dataPrefix, "-year-select") : '',
    size: "small",
    options: getYearOptions(startYear, endYear),
    selectedItem: year,
    setSelectedItem: function setSelectedItem(y) {
      return changeYear(y);
    },
    dropdownWidth: 100
  })), /*#__PURE__*/React.createElement(IconChevronRight, {
    size: "small",
    className: "cursor-pointer",
    dataId: dataPrefix ? "".concat(dataPrefix, "-next-month-button") : '',
    onClick: nextMonthButtonDisabled ? noop : increaseMonth,
    type: nextMonthButtonDisabled ? 'disabled' : 'primary'
  }));
};

export { CustomHeader };
