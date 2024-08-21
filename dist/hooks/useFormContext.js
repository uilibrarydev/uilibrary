import { useContext } from 'react';
import { FormContext } from '../context/types.js';
import '../utils/helpers.js';
import 'dayjs';

var useFormContext = function useFormContext() {
  return useContext(FormContext);
};

export { useFormContext };
