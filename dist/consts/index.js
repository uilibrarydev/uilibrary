var IMAGE_MIME_TYPES = ['image/jpeg', 'image/png', 'application/pdf'];
var IMAGE_MIME_TYPES_FOR_PREVIEW = ['image/jpeg', 'image/jpg', 'image/png', 'image/heic', 'image/heif', 'application/pdf'];
var IMAGE_MIME_TYPE = ['.jpeg', '.jpg', '.png', '.heic', '.heif', '.pdf'];

//TODO as a result of discussion with the designers, it was decided to add temporary constants , in the next stage we should correct that
var SCREEN_SIZES = {
  SMALL: 768,
  MEDIUM: 992,
  LARGE: 1200
};
var FILE_UPLOAD_ERRORS = /*#__PURE__*/function (FILE_UPLOAD_ERRORS) {
  FILE_UPLOAD_ERRORS[FILE_UPLOAD_ERRORS["size"] = 0] = "size";
  FILE_UPLOAD_ERRORS[FILE_UPLOAD_ERRORS["type"] = 1] = "type";
  return FILE_UPLOAD_ERRORS;
}({});
var CARD_SELECT_TYPES = /*#__PURE__*/function (CARD_SELECT_TYPES) {
  CARD_SELECT_TYPES["cardRadio"] = "cardRadio";
  CARD_SELECT_TYPES["card"] = "card";
  return CARD_SELECT_TYPES;
}({});
var CUSTOM_SCROLL_MESSAGE = 'Custom scroll event has fired';
var CUSTOM_SCROLL_NAME = 'CUSTOM_SCROLL_EVENT';
var MONTHS = [{
  label: 'January',
  value: 0
}, {
  label: 'February',
  value: 1
}, {
  label: 'March',
  value: 2
}, {
  label: 'April',
  value: 3
}, {
  label: 'May',
  value: 4
}, {
  label: 'June',
  value: 5
}, {
  label: 'July',
  value: 6
}, {
  label: 'August',
  value: 7
}, {
  label: 'September',
  value: 8
}, {
  label: 'October',
  value: 9
}, {
  label: 'November',
  value: 10
}, {
  label: 'December',
  value: 11
}];
var DROPDOWN_AND_INPUT_GAP = 10;

export { CARD_SELECT_TYPES, CUSTOM_SCROLL_MESSAGE, CUSTOM_SCROLL_NAME, DROPDOWN_AND_INPUT_GAP, FILE_UPLOAD_ERRORS, IMAGE_MIME_TYPE, IMAGE_MIME_TYPES, IMAGE_MIME_TYPES_FOR_PREVIEW, MONTHS, SCREEN_SIZES };
