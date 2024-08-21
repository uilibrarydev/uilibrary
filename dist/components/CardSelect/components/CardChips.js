import { _ as _extends } from '../../../extends-a63feb99.js';
import React from 'react';
import { Chips } from '../../Chips/Chips.js';
import '../../Text/Text.js';
import 'classnames';
import '../../../utils/helpers.js';
import 'dayjs';
import '../../Chips/types.js';
import '../../SVGIcons/IconDismissCircleFilled.js';
import '../../../defineProperty-d5787266.js';
import '../../../typeof-3b51e673.js';

var CardChips = function CardChips(props) {
  var chips = props.chips,
    disabled = props.disabled;
  return /*#__PURE__*/React.createElement(React.Fragment, null, chips.map(function (chip) {
    return /*#__PURE__*/React.createElement(Chips, _extends({}, chip, {
      key: chip.id,
      disabled: disabled,
      className: 'mt-8 mr-8',
      onClick: chip.onClick,
      withAction: chip.withAction
    }));
  }));
};

export { CardChips };
