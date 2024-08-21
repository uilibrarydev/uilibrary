import { useContext } from 'react';
import { FormContext } from '../context/types.js';
import '../utils/helpers.js';
import 'dayjs';

var useFormProps = function useFormProps() {
  return useContext(FormContext);
};

export { useFormProps };
