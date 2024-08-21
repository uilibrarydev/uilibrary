import React, { forwardRef, useRef, useEffect } from 'react';
import { Checkbox } from '../Checkbox/Checkbox.js';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../extends-a63feb99.js';
import 'classnames';
import '../Popover/Popover.js';
import '../../slicedToArray-c937067d.js';
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

/* eslint-disable @typescript-eslint/no-explicit-any */
var CheckboxWithRef = /*#__PURE__*/forwardRef(Checkbox);
var IndeterminateCheckbox = /*#__PURE__*/forwardRef(function (_ref, ref) {
  var indeterminate = _ref.indeterminate,
    checked = _ref.checked,
    onChange = _ref.onChange;
  var defaultRef = useRef();
  var resolvedRef = ref || defaultRef;
  useEffect(function () {
    resolvedRef.current.indeterminate = indeterminate;
  }, [resolvedRef, indeterminate]);
  var handleChange = function handleChange(v) {
    onChange({
      target: {
        checked: v
      }
    });
  };
  return /*#__PURE__*/React.createElement(CheckboxWithRef, {
    value: checked,
    onClick: handleChange,
    ref: resolvedRef
  });
});
IndeterminateCheckbox.displayName = 'IndeterminateCheckbox';

export { IndeterminateCheckbox };
