import dayjs from 'dayjs';

var noop = function noop() {
  return undefined;
};
var checkIsAllowedFileSize = function checkIsAllowedFileSize(allowedSize, fileSize) {
  return fileSize <= allowedSize;
};
var openFileInNewWindow = function openFileInNewWindow(_ref) {
  var e = _ref.e,
    file = _ref.file,
    handleFileClick = _ref.handleFileClick;
  e.preventDefault();
  if (handleFileClick) {
    handleFileClick(file);
  }
  if (file) {
    if (file instanceof Blob) {
      var fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } else {
      console.error('The provided object is not a File or Blob.');
    }
  } else {
    console.error('No file provided.');
  }
};
var getFormattedValues = function getFormattedValues(files) {
  var readers = [];
  var _loop = function _loop() {
    var reader = new FileReader();
    reader.onloadend = function () {
      console.log(reader.result);
    };
    reader.readAsDataURL(files[i]);
    readers.push(reader);
  };
  for (var i = 0; i < files.length; i++) {
    _loop();
  }
  return readers;
};
var uniqueFiles = function uniqueFiles(files) {
  return files.filter(function (file, index, self) {
    return index === self.findIndex(function (f) {
      return f.name === file.name;
    });
  });
};
var checkIsAllowedTypes = function checkIsAllowedTypes(allowedTypes, mimeType) {
  return allowedTypes.includes(mimeType);
};
var getStringWidth = function getStringWidth(text, fontSize) {
  var canvas = document.createElement('canvas');
  var context = canvas.getContext('2d');
  if (!context) {
    return 0;
  }
  context.font = fontSize + 'px Arial';
  return context.measureText(text).width;
};
var setTranslationValue = function setTranslationValue(translation, value) {
  return translation.replace('%s', value.toString());
};
var getYearOptions = function getYearOptions(startYear, lastYear) {
  var years = [];
  while (startYear <= lastYear) {
    years.push({
      value: lastYear,
      label: lastYear
    });
    lastYear--;
  }
  return years;
};
var isSameDay = function isSameDay(date1, date2) {
  if (!date1 || !date2) {
    return false;
  }
  return dayjs(date1).isSame(date2, 'day');
};

export { checkIsAllowedFileSize, checkIsAllowedTypes, getFormattedValues, getStringWidth, getYearOptions, isSameDay, noop, openFileInNewWindow, setTranslationValue, uniqueFiles };
