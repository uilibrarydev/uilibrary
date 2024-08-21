import { _ as _extends } from '../../extends-a63feb99.js';
import React from 'react';
import { Text } from '../Text/Text.js';
import { Image } from '../Image/Image.js';
import { Button } from '../Button/Button.js';
import classNames from 'classnames';
import '../../utils/helpers.js';
import 'dayjs';
import '../../defineProperty-d5787266.js';
import '../../typeof-3b51e673.js';
import '../../objectWithoutProperties-b86e0c22.js';
import '../../helperComponents/Loader/Loader.js';
import '../../hooks/useScreenSize.js';
import '../../slicedToArray-c937067d.js';
import '../../consts/index.js';
import 'react-hook-form';
import 'react-syntax-highlighter';
import '../Button/consts.js';

var img = "data:image/svg+xml,%3csvg width='102' height='117' viewBox='0 0 102 117' fill='none' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M51.2567 89.5C73.3101 89.5 91.1891 71.626 91.1891 49.5C91.1891 27.374 73.2313 9.5 51.2567 9.5C29.2033 9.5 11.3243 27.374 11.3243 49.5C11.3243 71.626 29.2033 89.5 51.2567 89.5Z' fill='%23EAEEF9'/%3e%3cpath d='M88.5898 23.2796C90.3733 23.2796 91.8191 21.8342 91.8191 20.0512C91.8191 18.2683 90.3733 16.8229 88.5898 16.8229C86.8064 16.8229 85.3606 18.2683 85.3606 20.0512C85.3606 21.8342 86.8064 23.2796 88.5898 23.2796Z' fill='%23EAEEF9'/%3e%3cpath d='M94.182 32.7287C95.3999 32.7287 96.3873 31.7416 96.3873 30.5239C96.3873 29.3063 95.3999 28.3192 94.182 28.3192C92.964 28.3192 91.9766 29.3063 91.9766 30.5239C91.9766 31.7416 92.964 32.7287 94.182 32.7287Z' fill='%23EAEEF9'/%3e%3cpath d='M13.4509 23.2008C14.6689 23.2008 15.6562 22.2137 15.6562 20.9961C15.6562 19.7785 14.6689 18.7914 13.4509 18.7914C12.2329 18.7914 11.2455 19.7785 11.2455 20.9961C11.2455 22.2137 12.2329 23.2008 13.4509 23.2008Z' fill='%23EAEEF9'/%3e%3cpath d='M4.7083 65.7202C6.97025 65.7202 8.80392 63.8871 8.80392 61.6257C8.80392 59.3644 6.97025 57.5312 4.7083 57.5312C2.44635 57.5312 0.612671 59.3644 0.612671 61.6257C0.612671 63.8871 2.44635 65.7202 4.7083 65.7202Z' fill='%23EAEEF9'/%3e%3cg filter='url(%23filter0_d_2133_10983)'%3e%3cpath d='M74.6148 11.9414C76.8131 11.9414 78.5995 13.7154 78.6147 15.9137L79.0598 80.2091C79.0598 81.9414 77.6421 83.28 75.9093 83.28H26.4467C24.714 83.28 23.2963 81.8627 23.2963 80.2091V15.0123C23.2963 13.28 24.714 11.9414 26.4467 11.9414H62.2835H74.6148Z' fill='url(%23paint0_linear_2133_10983)'/%3e%3c/g%3e%3cpath d='M47.3974 73.1216H45.5859C45.1921 73.1216 44.877 72.7279 44.877 72.2554C44.877 71.783 45.1921 71.3893 45.5859 71.3893H47.3974C47.7912 71.3893 48.1063 71.783 48.1063 72.2554C48.1063 72.8066 47.7912 73.1216 47.3974 73.1216Z' fill='%23CED7E2'/%3e%3cpath d='M41.8841 73.1216H31.33C30.9362 73.1216 30.6212 72.7279 30.6212 72.2554C30.6212 71.783 30.9362 71.3893 31.33 71.3893H41.8841C42.2779 71.3893 42.593 71.783 42.593 72.2554C42.593 72.8066 42.2779 73.1216 41.8841 73.1216Z' fill='%23D5DDEA'/%3e%3cpath d='M55.3523 22.5709H31.6449C31.0936 22.5709 30.621 22.0985 30.621 21.5473C30.621 20.9961 31.0936 20.5237 31.6449 20.5237H55.3523C55.9037 20.5237 56.3762 20.9961 56.3762 21.5473C56.3762 22.0985 55.9037 22.5709 55.3523 22.5709Z' fill='%23D5DDEA'/%3e%3cpath d='M40.7813 28.2401H31.6449C31.0936 28.2401 30.621 27.7677 30.621 27.2165C30.621 26.6653 31.0936 26.1929 31.6449 26.1929H40.7026C41.2539 26.1929 41.7265 26.6653 41.7265 27.2165C41.7265 27.7677 41.2539 28.2401 40.7813 28.2401Z' fill='%23D5DDEA'/%3e%3cpath d='M82.2101 84.4606C81.4225 84.4606 80.6349 84.1457 80.0048 83.437L66.8515 70.2874L66.379 70.6023C62.1258 73.752 57.1638 75.4055 52.123 75.4055C46.0584 75.4055 39.9937 72.9646 35.5043 68.7126C30.7785 64.2244 28.1794 58.1614 28.1794 51.5472C28.1794 38.3976 38.891 27.689 52.0443 27.689C61.0232 27.689 68.8994 32.4134 73.1525 40.4449C77.3269 48.3976 76.7756 57.689 71.656 65.1693L71.341 65.6417L84.573 78.8701C85.912 80.2087 85.5969 81.5472 85.3606 82.2559C84.7305 83.5157 83.4703 84.4606 82.2101 84.4606ZM52.0443 34.2244C42.4353 34.2244 34.7166 42.0197 34.7166 51.5472C34.7166 62.4134 43.6167 68.9488 52.2806 68.9488C57.5576 68.9488 62.3621 66.5866 65.7489 62.3346C69.9233 57.1378 70.6321 50.1299 67.7179 44.0669C64.725 38.0039 58.7391 34.2244 52.0443 34.2244Z' fill='%23989FB0'/%3e%3cpath d='M44.5619 54.3813C45.5858 54.3813 46.4521 53.5152 46.4521 52.4916C46.4521 51.4679 45.5858 50.6018 44.5619 50.6018C43.538 50.6018 42.6716 51.4679 42.6716 52.4916C42.6716 53.5152 43.538 54.3813 44.5619 54.3813Z' fill='%23989FB0'/%3e%3cpath d='M59.054 54.3813C60.0779 54.3813 60.9443 53.5152 60.9443 52.4916C60.9443 51.4679 60.0779 50.6018 59.054 50.6018C58.0301 50.6018 57.1638 51.4679 57.1638 52.4916C57.1638 53.5939 58.0301 54.3813 59.054 54.3813Z' fill='%23989FB0'/%3e%3cpath d='M44.4879 46.2395L40.3298 48.484L40.8911 49.5233L45.0492 47.2787L44.4879 46.2395Z' fill='%23989FB0'/%3e%3cpath d='M58.797 46.2097L58.2358 47.249L62.3944 49.4931L62.9556 48.4537L58.797 46.2097Z' fill='%23989FB0'/%3e%3cpath d='M51.8079 58.7901C53.0259 58.7901 54.0132 58.0498 54.0132 57.1366C54.0132 56.2233 53.0259 55.483 51.8079 55.483C50.5899 55.483 49.6025 56.2233 49.6025 57.1366C49.6025 58.0498 50.5899 58.7901 51.8079 58.7901Z' fill='%23989FB0'/%3e%3cdefs%3e%3cfilter id='filter0_d_2133_10983' x='1.29626' y='0.941406' width='99.7635' height='115.339' filterUnits='userSpaceOnUse' color-interpolation-filters='sRGB'%3e%3cfeFlood flood-opacity='0' result='BackgroundImageFix'/%3e%3cfeColorMatrix in='SourceAlpha' type='matrix' values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0' result='hardAlpha'/%3e%3cfeOffset dy='11'/%3e%3cfeGaussianBlur stdDeviation='11'/%3e%3cfeColorMatrix type='matrix' values='0 0 0 0 0.397708 0 0 0 0 0.47749 0 0 0 0 0.575 0 0 0 0.27 0'/%3e%3cfeBlend mode='normal' in2='BackgroundImageFix' result='effect1_dropShadow_2133_10983'/%3e%3cfeBlend mode='normal' in='SourceGraphic' in2='effect1_dropShadow_2133_10983' result='shape'/%3e%3c/filter%3e%3clinearGradient id='paint0_linear_2133_10983' x1='51.1599' y1='10.2913' x2='51.1599' y2='84.0491' gradientUnits='userSpaceOnUse'%3e%3cstop stop-color='%23FDFEFF'/%3e%3cstop offset='0.9964' stop-color='%23ECF0F5'/%3e%3c/linearGradient%3e%3c/defs%3e%3c/svg%3e";

var Empty = function Empty(props) {
  var _props$size = props.size,
    size = _props$size === void 0 ? 'large' : _props$size,
    mainMessage = props.mainMessage,
    paragraphMessage = props.paragraphMessage,
    buttonProps = props.buttonProps,
    className = props.className,
    _props$illustration = props.illustration,
    illustration = _props$illustration === void 0 ? img : _props$illustration;
  return /*#__PURE__*/React.createElement("div", {
    className: classNames("no-result ".concat(size == 'large' ? 'no-result--large' : 'no-result--small'), className)
  }, /*#__PURE__*/React.createElement("div", {
    className: "no-result__icon"
  }, /*#__PURE__*/React.createElement(Image, {
    imagePath: illustration
  })), /*#__PURE__*/React.createElement("div", {
    className: "no-result__content"
  }, /*#__PURE__*/React.createElement(Text, {
    size: size == 'large' ? 'large' : 'small',
    weight: "bold"
  }, mainMessage), paragraphMessage ? /*#__PURE__*/React.createElement(Text, {
    size: size == 'large' ? 'small' : 'xsmall'
  }, paragraphMessage) : null, buttonProps ? /*#__PURE__*/React.createElement(Button, _extends({}, buttonProps, {
    size: "medium",
    className: "mt-4"
  })) : null));
};

export { Empty };
