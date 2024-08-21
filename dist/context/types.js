import { createContext } from 'react';
import { noop } from '../utils/helpers.js';
import 'dayjs';

var FormContext = /*#__PURE__*/createContext({
  setValue: noop,
  isSubmitted: false,
  isSubmitting: false,
  dirtyFields: {}
});

export { FormContext };
