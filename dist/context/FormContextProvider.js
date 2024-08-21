import { useContext } from 'react';
import { FormContext } from './types.js';
import '../utils/helpers.js';
import 'dayjs';

var WithFormFeedback = function WithFormFeedback(_ref) {
  var children = _ref.children;
  var context = useContext(FormContext);
  return children ? children(context) : null;
};

export { WithFormFeedback };
