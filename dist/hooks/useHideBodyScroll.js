import { _ as _slicedToArray } from '../slicedToArray-c937067d.js';
import { useState, useEffect } from 'react';

var useHideBodyScroll = function useHideBodyScroll(isOpen) {
  var _useState = useState('initial'),
    _useState2 = _slicedToArray(_useState, 2),
    initialOverflow = _useState2[0],
    setInitialOverflow = _useState2[1];
  var _useState3 = useState(false),
    _useState4 = _slicedToArray(_useState3, 2),
    isHidden = _useState4[0],
    setIsHidden = _useState4[1];
  useEffect(function () {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setIsHidden(true);
    } else {
      if (isHidden) {
        document.body.style.overflow = initialOverflow;
      }
    }
  }, [isOpen]);
  useEffect(function () {
    var initial = document.body.style.overflow;
    if (initial) {
      setInitialOverflow(initial);
    }
    return function () {
      document.body.style.overflow = initialOverflow;
    };
  }, []);
  return null;
};

export { useHideBodyScroll };
