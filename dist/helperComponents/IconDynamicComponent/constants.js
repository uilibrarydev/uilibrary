import { lazy } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */
var IconComponentMapping = {
  warningFilled: /*#__PURE__*/lazy(function () {
    return import('../../components/SVGIcons/IconWarningFilled.js');
  }),
  checkmarkCircleFilled: /*#__PURE__*/lazy(function () {
    return import('../../components/SVGIcons/IconCheckmarkCircleFilled.js');
  }),
  errorCircleFilled: /*#__PURE__*/lazy(function () {
    return import('../../components/SVGIcons/IconErrorCircleFilled.js');
  }),
  infoFilled: /*#__PURE__*/lazy(function () {
    return import('../../components/SVGIcons/IconInfoFilled.js');
  }),
  checkmark: /*#__PURE__*/lazy(function () {
    return import('../../components/SVGIcons/IconCheckmark.js');
  })
};

export { IconComponentMapping };
