import { useMemo } from 'react';
import { useGetElemSizes } from './useGetElemSizes.js';
import { useGetElemPositions } from './useGetElemPositions.js';
import { useGetTooltipPosition } from './useGetTooltipPosition.js';
import { Positions } from '../components/Tooltip/types.js';

var TOOLTIP_GAP = 8;
var useGetTooltipStyles = function useGetTooltipStyles(_ref) {
  var initialPosition = _ref.initialPosition,
    elemRef = _ref.elemRef,
    tooltipRef = _ref.tooltipRef,
    toolTipCurrentWidth = _ref.toolTipCurrentWidth;
  var _useGetElemPositions = useGetElemPositions(elemRef),
    top = _useGetElemPositions.top,
    left = _useGetElemPositions.left,
    right = _useGetElemPositions.right;
  var _useGetElemSizes = useGetElemSizes(elemRef),
    width = _useGetElemSizes.width,
    height = _useGetElemSizes.height;
  var _useGetElemSizes2 = useGetElemSizes(tooltipRef),
    tooltipHeight = _useGetElemSizes2.height,
    tooltipWitdh = _useGetElemSizes2.width;
  var TOOLTIP_WIDTH = toolTipCurrentWidth || tooltipWitdh;
  var tooltipPosition = useGetTooltipPosition({
    tooltipRef: tooltipRef,
    elemRef: elemRef,
    initialPosition: initialPosition
  });
  var tooltipStyles = useMemo(function () {
    if (tooltipPosition === Positions.BOTTOM_LEFT) {
      return {
        top: top + (height + TOOLTIP_GAP),
        left: left
      };
    }
    if (tooltipPosition === Positions.TOP_LEFT) {
      return {
        top: top - (tooltipHeight + TOOLTIP_GAP),
        left: left
      };
    }
    if (tooltipPosition === Positions.BOTTOM_RIGHT) {
      return {
        top: top + (height + TOOLTIP_GAP),
        left: right - TOOLTIP_WIDTH - TOOLTIP_GAP
      };
    }
    if (tooltipPosition === Positions.TOP_RIGHT) {
      return {
        top: top - tooltipHeight - TOOLTIP_GAP,
        left: right - TOOLTIP_WIDTH - TOOLTIP_GAP
      };
    }
    if (tooltipPosition === Positions.BOTTOM_CENTER) {
      return {
        top: top + (height + TOOLTIP_GAP),
        left: left - (TOOLTIP_WIDTH - width) / 2
      };
    }
    if (tooltipPosition === Positions.TOP_CENTER) {
      return {
        top: top - (tooltipHeight + TOOLTIP_GAP),
        left: left - (TOOLTIP_WIDTH - width) / 2
      };
    }
    if (tooltipPosition === Positions.MIDDLE_LEFT) {
      return {
        top: top + height / 2 - tooltipHeight / 2,
        left: left - TOOLTIP_WIDTH - TOOLTIP_GAP
      };
    }
    if (tooltipPosition === Positions.MIDDLE_RIGHT) {
      return {
        top: top + height / 2 - tooltipHeight / 2,
        left: left + width + TOOLTIP_GAP
      };
    }
    return {
      left: left,
      top: top
    };
  }, [top, left, width, height, tooltipPosition, TOOLTIP_WIDTH]);
  return {
    tooltipStyles: tooltipStyles,
    tooltipPosition: tooltipPosition
  };
};

export { useGetTooltipStyles };
