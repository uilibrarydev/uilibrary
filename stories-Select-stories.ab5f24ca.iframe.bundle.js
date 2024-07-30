"use strict";(self.webpackChunkdino_ui_tools=self.webpackChunkdino_ui_tools||[]).push([[2707],{"./src/stories/Select.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ButtonSelect:()=>ButtonSelect,MultiSelect:()=>MultiSelect,NestedSelect:()=>NestedSelect,Select:()=>Select,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),_index__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/index.ts"),_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/assets/images/avatar.jpg"),_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./src/components/SVGIcons/IconPerson.tsx"),_components_SVGIcons_IconInfo__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./src/components/SVGIcons/IconInfo.tsx"),_components_SVGIcons_IconCaretDownFilled__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./src/components/SVGIcons/IconCaretDownFilled.tsx"),_components_SVGIcons_IconSelectAllOff__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./src/components/SVGIcons/IconSelectAllOff.tsx"),_components_SVGIcons_IconMore__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./src/components/SVGIcons/IconMore.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/react/jsx-runtime.js");function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){(0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.A)(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}var image={src:_assets_images_avatar_jpg__WEBPACK_IMPORTED_MODULE_3__,alt:"my image"};const __WEBPACK_DEFAULT_EXPORT__={title:"Select",component:_index__WEBPACK_IMPORTED_MODULE_2__.l6P,argTypes:{size:{options:["large","small"],control:{type:"radio"}}}};var BUTTON_SELECT_OPTIONS=[{value:"jan",label:"Jan"},{value:"feb",label:"Feb"},{value:"mrch",label:"March"},{value:"apr",label:"April"},{value:"may",label:"May"},{value:"jun",label:"Jun"},{value:"jul",label:"Jul"},{value:"aug",label:"Aug"},{value:"sep",label:"Sep"},{value:"oct",label:"Oct"},{value:"nov",label:"Nov"},{value:"dec",label:"Dec"}],OPTIONS=[{value:1,label:"Armeniaaasdasdasdasdlkashdkjlashdkjasdkjashkdjhaskjdhdaskjdhaskjhdkajsdkjasdkjashdjkashdkjhaskdhaskjdhaskjdhaskjdhaskjhdkjas",meta:"AM"},{value:2,label:"Italy",meta:"IT"},{value:3,label:"France    France    France",meta:"FR"},{value:4,label:"Spain",meta:"SP"},{value:5,label:"Germany",meta:"De"},{value:6,label:"Australia",meta:"AU"},{value:7,label:"Hungary",meta:"HY"},{value:8,label:"Georgia",meta:"GE"},{value:9,label:"Brazil",meta:"BR"},{value:10,label:"Norway",meta:"NR"},{value:11,label:"Mexico",meta:"MC"}],OPTIONS_GROUPED=[{title:"Countries",data:OPTIONS},{title:"Cities",data:[{value:"yerevan",label:"Yerevan"},{value:"rome",label:"Rome"},{value:"paris",label:"Paris"},{value:"aaaa",label:"iiii"}]}],Template=function Template(args){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState2=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState,2),selectedValue=_useState2[0],setSelectedValue=_useState2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.l6P,_objectSpread(_objectSpread({},args),{},{dataId:"single-select",tooltipAddons:{position:"bottom-left"},isRequiredField:!0,options:OPTIONS,outerHelperText:"helper text",selectedItem:selectedValue,setSelectedItem:setSelectedValue,withSearch:!0,optionRightIconComponent:function optionRightIconComponent(value){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{children:value})}}))})};Template.displayName="Template";var Select=Template.bind({}),Template2=function Template2(args){var _useState3=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState4=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState3,2),selectedValue=_useState4[0],setSelectedValue=_useState4[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{display:"flex",height:"100vh",justifyContent:"center",position:"absolute",top:100},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.fHW,_objectSpread(_objectSpread({},args),{},{size:"small",placeHolder:"Select month",isRequiredField:!0,options:BUTTON_SELECT_OPTIONS,outerHelperText:"helper text",selectedItem:selectedValue,setSelectedItem:setSelectedValue,withSearch:!0,dropdownWidth:300}))})};Template2.displayName="Template2";var ButtonSelect=Template2.bind({}),ButtonMenu=function ButtonMenu(){var _useState5=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(!1),_useState6=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState5,2),isOpen=_useState6[0],setIsOpen=_useState6[1],_useState7=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null),_useState8=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState7,2),buttonRef=_useState8[0],setButtonRef=_useState8[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div",{ref:setButtonRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.$nd,{type:"tertiary",onClick:function open(e){e.preventDefault(),e.stopPropagation(),setIsOpen(!0)},iconProps:{name:"more"},size:"small"}),buttonRef?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.W1t,{menuItems:[{label:"delete",value:"delete",handler:function handler(){console.log("delete")}}],parentRef:buttonRef,onClose:function close(){return setIsOpen(!1)},isOpen}):null]})};ButtonMenu.displayName="ButtonMenu",Select.args={size:"large",disabled:!1,isLoading:!1,options:OPTIONS,withFooter:!0,label:"country",avatar:image.src,placeHolder:"Select country",labelLeftIconProps:{Component:_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__.A},optionRightIconComponent:null,labelRightIconComponent:null,labelAddons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconInfo__WEBPACK_IMPORTED_MODULE_5__.A,{size:"xsmall",type:"information",className:"ml-4"})};var MultiSelectTemplate=function MultiSelectTemplate(args){var _useState9=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),_useState10=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState9,2),selectedValues=_useState10[0],setSelectedValues=_useState10[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{width:250,height:"100vh",position:"absolute",left:500,top:10},className:"ddddd",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.KFt,_objectSpread(_objectSpread({},args),{},{isGrouped:!0,isButtonSelect:!0,buttonProps:{buttonText:"Select",type:"secondary",iconProps:{Component:_components_SVGIcons_IconCaretDownFilled__WEBPACK_IMPORTED_MODULE_6__.A,alignment:"right",size:"xsmall"}},menuOptions:[{label:"save template",value:"1",iconProps:{Component:_components_SVGIcons_IconSelectAllOff__WEBPACK_IMPORTED_MODULE_7__.A}}],dropdownWidth:400,align:"right",maxSelectCount:3,emptyListMessage:"List is Empty",selectedItems:selectedValues,setSelectedItems:function set(value,isChecked){setSelectedValues(value)},labelRightIconComponent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__.A,{size:"xsmall",className:"mr-4",onClick:function onClick(e){e.preventDefault(),e.stopPropagation()}}),translations:{innerLabel:"Group name",clearAllLabel:"Clear All",selectAllLabel:"Select All"},optionRightIconComponent:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(ButtonMenu,{})}))})};MultiSelectTemplate.displayName="MultiSelectTemplate";var MultiSelect=MultiSelectTemplate.bind({});MultiSelect.args={isLoading:!1,label:"Select",options:OPTIONS_GROUPED,avatar:image.src,placeHolder:"Select country",innerLabel:"Select",helperText:"To be filled in only for USA, Canada and European countries.",labelLeftIconProps:{Component:_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__.A},labelAddons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconInfo__WEBPACK_IMPORTED_MODULE_5__.A,{size:"xsmall",type:"information",className:"ml-4"})};var NestedSelectTemplate=function NestedSelectTemplate(args){var _useState11=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({value:3,label:"Management board"}),_useState12=(0,_babel_runtime_helpers_slicedToArray__WEBPACK_IMPORTED_MODULE_10__.A)(_useState11,2),selected=_useState12[0],setSelected=_useState12[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div",{style:{width:320,position:"absolute",left:300},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_index__WEBPACK_IMPORTED_MODULE_2__.Wr5,_objectSpread(_objectSpread({},args),{},{selected,setSelectedValue:setSelected,initialSelectedFolderIds:[1,2]}))})};NestedSelectTemplate.displayName="NestedSelectTemplate";var NestedSelect=NestedSelectTemplate.bind({});NestedSelect.args={isLoading:!1,label:"Select",options:[{value:1,label:"Ameribank",children:[{value:2,label:"BOD",children:[{value:3,label:"Managment board"},{value:4,label:"4"}]},{value:10,label:"3",children:[{value:5,label:"5"},{value:6,label:"6",children:[{value:7,label:"7"}]}]}]},{value:8,label:"8",children:[{value:9,label:"9"},{value:10,label:"10"}]}],placeHolder:"Select country",labelLeftIconProps:{Component:_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__.A},labelRightIconComponent:function labelRightIconComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconPerson__WEBPACK_IMPORTED_MODULE_4__.A,{size:"xsmall",className:"mr-4"})},optionRightIconComponent:function optionRightIconComponent(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconMore__WEBPACK_IMPORTED_MODULE_8__.A,{size:"xsmall",onClick:function onClick(e){e.preventDefault(),e.stopPropagation()}})},labelAddons:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_SVGIcons_IconInfo__WEBPACK_IMPORTED_MODULE_5__.A,{size:"xsmall",type:"information",className:"ml-4"})}},"./src/assets/images/avatar.jpg":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__.p+"static/media/avatar.bf272857.jpg"}}]);