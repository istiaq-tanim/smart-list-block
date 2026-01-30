/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/smart-list-block/Provider/BlockProvider.js"
/*!********************************************************!*\
  !*** ./src/smart-list-block/Provider/BlockProvider.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../context */ "./src/smart-list-block/context/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function BlockProvider({
  children,
  attributes,
  setAttributes
}) {
  const value = {
    attributes,
    setAttributes
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_context__WEBPACK_IMPORTED_MODULE_0__.BlockContext.Provider, {
    value: value,
    children: children
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlockProvider);

/***/ },

/***/ "./src/smart-list-block/assets/BottomAlignment.js"
/*!********************************************************!*\
  !*** ./src/smart-list-block/assets/BottomAlignment.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function BottomAlignment() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M19.8002 19.8L19.8002 10.9L18.3002 10.9L18.3002 19.8L19.8002 19.8ZM4.2002 10.9L4.2002 19.8L5.7002 19.8L5.7002 10.9L4.2002 10.9ZM11.2002 19.8L12.7002 19.8L12.7002 3.79999L11.2002 3.79999L11.2002 19.8Z",
      fill: "#757575"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BottomAlignment);

/***/ },

/***/ "./src/smart-list-block/assets/Circle.js"
/*!***********************************************!*\
  !*** ./src/smart-list-block/assets/Circle.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Circle({
  fill
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: fill,
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "12",
      cy: "12",
      r: "11.5",
      fill: fill,
      stroke: "#DDDDDD"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Circle);

/***/ },

/***/ "./src/smart-list-block/assets/CircleCurve.js"
/*!****************************************************!*\
  !*** ./src/smart-list-block/assets/CircleCurve.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function CircleCurve({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 22 23",
    fill: "none",
    style: {
      color
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10.7567 0.0990666C10.8658 -0.032998 11.0682 -0.0329982 11.1773 0.0990665L11.8392 0.900519C11.9338 1.01506 12.1027 1.03281 12.2191 0.940442L13.0332 0.294134C13.1673 0.187634 13.3653 0.229714 13.4446 0.381572L13.9254 1.30314C13.9942 1.43485 14.1557 1.48733 14.2887 1.42117L15.2194 0.958249C15.3728 0.881968 15.5576 0.964288 15.6036 1.1293L15.8823 2.13071C15.9222 2.27383 16.0692 2.35874 16.2131 2.32168L17.2197 2.06239C17.3856 2.01966 17.5493 2.13862 17.56 2.30958L17.6244 3.34706C17.6336 3.49534 17.7598 3.60897 17.9083 3.60263L18.9468 3.55829C19.1179 3.55098 19.2533 3.70139 19.2282 3.87082L19.0755 4.89903C19.0537 5.04598 19.1535 5.18337 19.3 5.20803L20.3251 5.38058C20.494 5.40901 20.5952 5.58429 20.5354 5.74479L20.1723 6.71879C20.1204 6.858 20.1895 7.01313 20.3276 7.06771L21.2944 7.44962C21.4537 7.51255 21.5163 7.70503 21.4244 7.84958L20.8667 8.72681C20.787 8.85219 20.8223 9.01829 20.9461 9.10041L21.8124 9.67497C21.9551 9.76965 21.9763 9.97093 21.8563 10.0932L21.1285 10.8353C21.0244 10.9414 21.0244 11.1112 21.1285 11.2173L21.8563 11.9594C21.9763 12.0817 21.9551 12.283 21.8124 12.3776L20.9461 12.9522C20.8223 13.0343 20.787 13.2004 20.8667 13.3258L21.4244 14.203C21.5163 14.3476 21.4537 14.5401 21.2944 14.603L20.3276 14.9849C20.1895 15.0395 20.1204 15.1946 20.1723 15.3338L20.5354 16.3078C20.5952 16.4683 20.494 16.6436 20.3251 16.672L19.3 16.8446C19.1535 16.8692 19.0537 17.0066 19.0755 17.1536L19.2282 18.1818C19.2533 18.3512 19.1179 18.5016 18.9468 18.4943L17.9083 18.45C17.7598 18.4436 17.6336 18.5573 17.6244 18.7055L17.56 19.743C17.5493 19.914 17.3856 20.0329 17.2197 19.9902L16.2131 19.7309C16.0692 19.6939 15.9222 19.7788 15.8823 19.9219L15.6036 20.9233C15.5576 21.0883 15.3728 21.1706 15.2194 21.0944L14.2887 20.6314C14.1557 20.5653 13.9942 20.6178 13.9254 20.7495L13.4446 21.671C13.3653 21.8229 13.1673 21.865 13.0332 21.7585L12.2191 21.1122C12.1027 21.0198 11.9338 21.0375 11.8392 21.1521L11.1773 21.9535C11.0682 22.0856 10.8658 22.0856 10.7567 21.9535L10.0947 21.1521C10.0001 21.0375 9.83124 21.0198 9.71489 21.1122L8.90076 21.7585C8.7666 21.865 8.56863 21.8229 8.48939 21.671L8.00853 20.7495C7.9398 20.6178 7.7783 20.5653 7.64528 20.6314L6.71456 21.0944C6.5612 21.1706 6.37631 21.0883 6.33037 20.9233L6.05162 19.9219C6.01178 19.7788 5.86471 19.6939 5.72085 19.7309L4.71422 19.9902C4.54835 20.0329 4.38461 19.914 4.37399 19.743L4.30953 18.7055C4.30032 18.5573 4.17412 18.4436 4.0257 18.45L2.98716 18.4943C2.81603 18.5016 2.6806 18.3512 2.70576 18.1818L2.85841 17.1536C2.88023 17.0066 2.78041 16.8692 2.63391 16.8446L1.60885 16.672C1.43994 16.6436 1.33874 16.4683 1.39857 16.3078L1.76167 15.3338C1.81356 15.1946 1.74449 15.0395 1.60632 14.9849L0.639537 14.603C0.480228 14.5401 0.417685 14.3476 0.509579 14.203L1.06725 13.3258C1.14695 13.2004 1.11164 13.0343 0.987837 12.9522L0.121581 12.3776C-0.0211621 12.283 -0.0423179 12.0817 0.0776213 11.9594L0.805489 11.2173C0.909516 11.1112 0.909516 10.9414 0.805489 10.8353L0.0776214 10.0932C-0.0423179 9.97093 -0.0211623 9.76965 0.121581 9.67497L0.987837 9.10041C1.11164 9.01829 1.14695 8.85219 1.06725 8.72681L0.509579 7.84958C0.417686 7.70503 0.480228 7.51255 0.639536 7.44962L1.60632 7.06771C1.74449 7.01313 1.81356 6.858 1.76167 6.71879L1.39857 5.74479C1.33874 5.58429 1.43994 5.40901 1.60885 5.38058L2.63391 5.20803C2.78041 5.18337 2.88023 5.04598 2.85841 4.89903L2.70576 3.87082C2.6806 3.70139 2.81603 3.55098 2.98716 3.55829L4.0257 3.60263C4.17412 3.60897 4.30032 3.49534 4.30953 3.34706L4.37399 2.30958C4.38461 2.13862 4.54835 2.01966 4.71422 2.06239L5.72085 2.32168C5.86471 2.35874 6.01178 2.27383 6.05162 2.13071L6.33037 1.1293C6.37631 0.964289 6.5612 0.881968 6.71456 0.958249L7.64528 1.42117C7.7783 1.48733 7.9398 1.43485 8.00853 1.30314L8.48939 0.381572C8.56863 0.229714 8.7666 0.187634 8.90076 0.294134L9.71489 0.940442C9.83124 1.03281 10.0001 1.01506 10.0947 0.900519L10.7567 0.0990666Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleCurve);

/***/ },

/***/ "./src/smart-list-block/assets/CircleSolid.js"
/*!****************************************************!*\
  !*** ./src/smart-list-block/assets/CircleSolid.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function CircleSolid({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 22 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      color
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "10.7143",
      cy: "10.7143",
      r: "10.7143",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CircleSolid);

/***/ },

/***/ "./src/smart-list-block/assets/Close.js"
/*!**********************************************!*\
  !*** ./src/smart-list-block/assets/Close.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Close() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M5.11475 10.8849L10.8847 5.11493",
      stroke: "#757575",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10.8847 10.8849L5.11475 5.11493",
      stroke: "#757575",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Close);

/***/ },

/***/ "./src/smart-list-block/assets/DecreaseButton.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/assets/DecreaseButton.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function DecreaseButton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M10 0L5.00002 5L0 1.32951e-06L5.00002 6.64752e-07L9.99855 2.6551e-07L10 0Z",
      fill: "#2F2F2F"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DecreaseButton);

/***/ },

/***/ "./src/smart-list-block/assets/DescriptionListIcon.js"
/*!************************************************************!*\
  !*** ./src/smart-list-block/assets/DescriptionListIcon.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function DescriptionListIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "78",
    height: "50",
    viewBox: "0 0 78 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.6",
      y: "0.6",
      width: "76.8",
      height: "48.8",
      rx: "2.4",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.6",
      y: "0.6",
      width: "76.8",
      height: "48.8",
      rx: "2.4",
      stroke: "currentColor",
      "stroke-width": "1.2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "17",
      cy: "10.5",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "7.75",
      width: "22",
      height: "2",
      rx: "1",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "11.75",
      width: "40",
      height: "1.5",
      rx: "0.75",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "14",
      y: "17.5",
      width: "50",
      height: "0.5",
      rx: "0.25",
      fill: "#9EA9B2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "17",
      cy: "25",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "22.25",
      width: "22",
      height: "2",
      rx: "1",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "26.25",
      width: "40",
      height: "1.5",
      rx: "0.75",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "14",
      y: "32",
      width: "50",
      height: "0.5",
      rx: "0.25",
      fill: "#9EA9B2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "17",
      cy: "39.5",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "36.75",
      width: "22",
      height: "2",
      rx: "1",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "24",
      y: "40.75",
      width: "40",
      height: "1.5",
      rx: "0.75",
      fill: "#58707F"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DescriptionListIcon);

/***/ },

/***/ "./src/smart-list-block/assets/Diamond.js"
/*!************************************************!*\
  !*** ./src/smart-list-block/assets/Diamond.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Diamond({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 20 23",
    fill: "none",
    style: {
      color
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M9.68377 0L19.3675 5.59091V16.7727L9.68377 22.3636L3.24249e-05 16.7727V5.59091L9.68377 0Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Diamond);

/***/ },

/***/ "./src/smart-list-block/assets/Gradient.js"
/*!*************************************************!*\
  !*** ./src/smart-list-block/assets/Gradient.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Gradient() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("defs", {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("linearGradient", {
        id: "gradientBox",
        x1: "0%",
        y1: "0%",
        x2: "100%",
        y2: "100%",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: "0%",
          stopColor: "#808080"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("stop", {
          offset: "100%",
          stopColor: "#cccccc"
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      width: "16",
      height: "16",
      rx: "2",
      fill: "url(#gradientBox)"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gradient);

/***/ },

/***/ "./src/smart-list-block/assets/Image.js"
/*!**********************************************!*\
  !*** ./src/smart-list-block/assets/Image.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Image() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.65",
      y: "0.65",
      width: "14.7",
      height: "14.7",
      rx: "1.35",
      stroke: "#8C8F94",
      "stroke-width": "1.3"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M6.64645 8.35355L0.853553 14.1464C0.538571 14.4614 0.761654 15 1.20711 15H12.7929C13.2383 15 13.4614 14.4614 13.1464 14.1464L7.35355 8.35355C7.15829 8.15829 6.84171 8.15829 6.64645 8.35355Z",
      fill: "#8C8F94"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M11.6096 10.488L8.64988 14.1877C8.38797 14.515 8.62106 15 9.04031 15H14.9597C15.3789 15 15.612 14.515 15.3501 14.1877L12.3904 10.488C12.1903 10.2378 11.8097 10.2378 11.6096 10.488Z",
      fill: "#8C8F94"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "11",
      cy: "5",
      r: "2",
      fill: "#8C8F94"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Image);

/***/ },

/***/ "./src/smart-list-block/assets/IncreaseButton.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/assets/IncreaseButton.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function IncreaseButton() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "10",
    height: "5",
    viewBox: "0 0 10 5",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M0 5L4.99998 -2.2764e-07L10 5L4.99998 5L0.00145305 5L0 5Z",
      fill: "#2F2F2F"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IncreaseButton);

/***/ },

/***/ "./src/smart-list-block/assets/LeftAlign.js"
/*!**************************************************!*\
  !*** ./src/smart-list-block/assets/LeftAlign.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function LeftAlign() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M4 19.8H12.9V18.3H4V19.8ZM12.9 4.20001H4V5.70001H12.9V4.20001ZM4 11.2V12.7H20V11.2H4Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (LeftAlign);

/***/ },

/***/ "./src/smart-list-block/assets/Link.js"
/*!*********************************************!*\
  !*** ./src/smart-list-block/assets/Link.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Link() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "18",
    height: "11",
    viewBox: "0 0 18 11",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M12.4 0H10.8V1.5H12.4C14.4 1.5 16.1 3.2 16.1 5.2C16.1 7.2 14.4 8.9 12.4 8.9H10.8V10.4H12.4C15.2 10.4 17.6 8.1 17.6 5.2C17.6 2.3 15.3 0 12.4 0ZM1.5 5.2C1.5 3.2 3.2 1.5 5.2 1.5H6.8V0H5.2C2.3 0 0 2.3 0 5.2C0 8.1 2.3 10.4 5.2 10.4H6.8V8.9H5.2C3.2 8.9 1.5 7.2 1.5 5.2ZM6.1 6.1H11.4V4.6H6.1V6.1Z",
      fill: "white"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);

/***/ },

/***/ "./src/smart-list-block/assets/MiddleAlign.js"
/*!****************************************************!*\
  !*** ./src/smart-list-block/assets/MiddleAlign.js ***!
  \****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function MiddleAlign() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M16.4 4.20001H7.6V5.70001H16.5V4.20001H16.4ZM4 11.2V12.7H20V11.2H4ZM7.6 19.8H16.5V18.3H7.6V19.8Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiddleAlign);

/***/ },

/***/ "./src/smart-list-block/assets/MiddleAlignMent.js"
/*!********************************************************!*\
  !*** ./src/smart-list-block/assets/MiddleAlignMent.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function MiddleAlignMent() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M19.7998 16.3999L19.7998 7.59994L18.2998 7.59994L18.2998 16.4999L19.7998 16.4999L19.7998 16.3999ZM12.7998 3.99994L11.2998 3.99994L11.2998 19.9999L12.7998 19.9999L12.7998 3.99994ZM4.19981 7.59994L4.1998 16.4999L5.6998 16.4999L5.69981 7.59994L4.19981 7.59994Z",
      fill: "#757575"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MiddleAlignMent);

/***/ },

/***/ "./src/smart-list-block/assets/MobileIcon.js"
/*!***************************************************!*\
  !*** ./src/smart-list-block/assets/MobileIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function MobileIcon({
  color = "#8C8F94"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M6.286 0H1.714C1.082 0 .571.67.571 1.5v9c0 .83.51 1.5 1.143 1.5h4.572c.632 0 1.142-.67 1.142-1.5v-9c0-.83-.51-1.5-1.142-1.5ZM4.762 11H3.238v-.5h1.524v.5Zm2-1.5H1.238v-8h5.524v8Z",
      fill: color
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MobileIcon);

/***/ },

/***/ "./src/smart-list-block/assets/NormalListIcon.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/assets/NormalListIcon.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ListIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "78",
    height: "50",
    viewBox: "0 0 78 50",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.6",
      y: "0.6",
      width: "76.8",
      height: "48.8",
      rx: "2.4",
      fill: "white"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.6",
      y: "0.6",
      width: "76.8",
      height: "48.8",
      rx: "2.4",
      stroke: "currentColor",
      "stroke-width": "1.2"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "12.5",
      cy: "14",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "19.5",
      y: "13",
      width: "43",
      height: "2",
      rx: "1",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "12.5",
      cy: "25",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "19.5",
      y: "24",
      width: "36",
      height: "2",
      rx: "1",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("circle", {
      cx: "12.5",
      cy: "36",
      r: "3",
      fill: "#58707F"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "19.5",
      y: "35",
      width: "49",
      height: "2",
      rx: "1",
      fill: "#58707F"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListIcon);

/***/ },

/***/ "./src/smart-list-block/assets/PlusIcon.js"
/*!*************************************************!*\
  !*** ./src/smart-list-block/assets/PlusIcon.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function PlusIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "36",
    height: "36",
    viewBox: "0 0 97 97",
    fill: "none",
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M48.4375 0C21.6797 0 0 21.6797 0 48.4375C0 75.1953 21.6797 96.875  48.4375 96.875C75.1953 96.875 96.875 75.1953 96.875 48.4375C96.875 21.6797  75.1953 0 48.4375 0ZM76.5625 53.9062C76.5625 55.1953 75.5078 56.25 74.2188  56.25H56.25V74.2188C56.25 75.5078 55.1953 76.5625 53.9062  76.5625H42.9688C41.6797 76.5625 40.625 75.5078 40.625  74.2188V56.25H22.6562C21.3672 56.25 20.3125 55.1953  20.3125 53.9062V42.9688C20.3125 41.6797 21.3672  40.625 22.6562 40.625H40.625V22.6562C40.625 21.3672 41.6797 20.3125 42.9688 20.3125H53.9062C55.1953  20.3125 56.25 21.3672 56.25 22.6562V40.625H74.2188C75.5078 40.625 76.5625 41.6797 76.5625 42.9688V53.9062Z",
      fill: "#ccc"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PlusIcon);

/***/ },

/***/ "./src/smart-list-block/assets/PresetIcon.js"
/*!***************************************************!*\
  !*** ./src/smart-list-block/assets/PresetIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function PresetIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("svg", {
    width: "15",
    height: "16",
    viewBox: "0 0 15 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M7.3623 11.3125C5.5358 11.3125 4.0498 9.82653 4.0498 8C4.0498 6.17347 5.5358 4.6875 7.3623 4.6875C9.1888 4.6875 10.6748 6.17347 10.6748 8C10.6748 9.82653 9.18884 11.3125 7.3623 11.3125ZM7.3623 6.25C6.39734 6.25 5.6123 7.03506 5.6123 8C5.6123 8.96494 6.39734 9.75 7.3623 9.75C8.32727 9.75 9.1123 8.96494 9.1123 8C9.1123 7.03506 8.32727 6.25 7.3623 6.25Z",
      fill: "currentColor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M13.7269 8.9685C13.8241 8.32649 13.8241 7.67351 13.7269 7.0315C14.7198 6.4375 14.9951 5.21484 14.4467 4.27063L14.1342 3.72937C13.5786 2.76709 12.3491 2.43122 11.3827 2.97272C10.8756 2.5672 10.3103 2.24033 9.70585 2.00313C9.69079 0.895938 8.78545 0 7.67479 0H7.04979C5.93914 0 5.03379 0.895938 5.01873 2.00313C4.4143 2.24033 3.84902 2.5672 3.34192 2.97272C2.37545 2.43122 1.14595 2.76709 0.590353 3.72937L0.277853 4.27063C-0.270522 5.21484 0.0048219 6.4375 0.997635 7.0315C0.900465 7.67351 0.900465 8.32649 0.997635 8.9685C0.0459469 9.535 -0.277584 10.7673 0.277853 11.7294L0.590353 12.2706C1.14595 13.2329 2.37545 13.5688 3.34192 13.0273C3.84902 13.4328 4.4143 13.7597 5.01873 13.9969C5.03382 15.1041 5.93914 16 7.04979 16H7.67479C8.78545 16 9.69079 15.1041 9.70585 13.9969C10.3103 13.7597 10.8756 13.4328 11.3827 13.0273C12.3491 13.5688 13.5786 13.233 14.1342 12.2707L14.4467 11.7294C15.0022 10.7673 14.6786 9.535 13.7269 8.9685ZM13.0936 10.9481L12.7811 11.4894C12.6519 11.7132 12.3646 11.7902 12.1408 11.6609L11.6793 11.3945C11.5324 11.3097 11.3619 11.275 11.1936 11.2956C11.0253 11.3163 10.8683 11.3911 10.7462 11.5088C10.1734 12.0614 9.46914 12.4686 8.70942 12.6865C8.54636 12.7333 8.40295 12.8319 8.30087 12.9674C8.19878 13.1028 8.14357 13.2679 8.14357 13.4375V13.9688C8.14357 14.2272 7.93329 14.4375 7.67482 14.4375H7.04982C6.79135 14.4375 6.58107 14.2272 6.58107 13.9688V13.4375C6.58107 13.2679 6.52586 13.1028 6.42378 12.9674C6.32169 12.8319 6.17829 12.7333 6.01523 12.6865C5.25551 12.4686 4.5512 12.0614 3.97842 11.5088C3.85637 11.3911 3.69933 11.3163 3.53102 11.2956C3.3627 11.275 3.19224 11.3097 3.04538 11.3945L2.58385 11.6609C2.36007 11.7902 2.07279 11.7132 1.94354 11.4894L1.63104 10.9481C1.50179 10.7243 1.57876 10.437 1.8026 10.3078L2.26298 10.042C2.40975 9.95724 2.52499 9.82709 2.59132 9.67114C2.65765 9.51519 2.67147 9.3419 2.6307 9.17741C2.53557 8.79359 2.48732 8.39747 2.48732 7.99997C2.48732 7.60247 2.53557 7.20634 2.6307 6.82256C2.67147 6.65807 2.65766 6.48479 2.59133 6.32884C2.52501 6.17289 2.40977 6.04273 2.26301 5.958L1.8026 5.69219C1.56154 5.54688 1.52248 5.25781 1.63104 5.05188L1.94354 4.51062C2.07279 4.28678 2.36004 4.20988 2.58385 4.33906L3.04538 4.6055C3.19224 4.69028 3.36269 4.72498 3.531 4.70436C3.69931 4.68374 3.85634 4.60891 3.97838 4.49119C4.5512 3.93862 5.25551 3.53138 6.01523 3.31347C6.17829 3.2667 6.32169 3.16812 6.42378 3.03264C6.52586 2.89716 6.58107 2.73214 6.58107 2.5625V2.03125C6.58107 1.77278 6.79135 1.5625 7.04982 1.5625H7.67482C7.93329 1.5625 8.14357 1.77278 8.14357 2.03125V2.5625C8.14357 2.73214 8.19878 2.89716 8.30087 3.03264C8.40295 3.16812 8.54636 3.2667 8.70942 3.31347C9.46914 3.53138 10.1734 3.93862 10.7463 4.49119C10.8683 4.60891 11.0253 4.68374 11.1936 4.70436C11.362 4.72498 11.5324 4.69028 11.6793 4.6055L12.1408 4.33906C12.3646 4.20988 12.6519 4.28678 12.7811 4.51062L13.0936 5.05188C13.2022 5.25781 13.1631 5.54688 12.922 5.69219L12.4616 5.958C12.3149 6.04273 12.1996 6.17289 12.1333 6.32884C12.067 6.48479 12.0532 6.65807 12.0939 6.82256C12.1892 7.20778 12.2374 7.60314 12.2373 7.99997C12.2373 8.39744 12.1891 8.79359 12.0939 9.17741C12.0532 9.3419 12.067 9.51519 12.1333 9.67114C12.1997 9.82709 12.3149 9.95724 12.4617 10.042L12.9221 10.3078C13.1459 10.437 13.2228 10.7243 13.0936 10.9481Z",
      fill: "currentColor"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PresetIcon);

/***/ },

/***/ "./src/smart-list-block/assets/ResetIcon.js"
/*!**************************************************!*\
  !*** ./src/smart-list-block/assets/ResetIcon.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ResetIcon(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "13",
    height: "13",
    viewBox: "0 0 13 13",
    fill: "none",
    ...props,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M1.47543 3.53343C2.5876 1.70998 4.70777 0.619144 6.95929 0.926746C9.99167 1.34103 12.1141 4.13513 11.6998 7.16754C11.2855 10.1999 8.49141 12.3224 5.45902 11.9081C3.20751 11.6005 1.45767 9.98092 0.875319 7.92598M1.23174 1.91051L1.25557 3.78305L3.05722 3.63178",
      stroke: "#949494",
      "stroke-width": "1.75",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ResetIcon);

/***/ },

/***/ "./src/smart-list-block/assets/RightAlign.js"
/*!***************************************************!*\
  !*** ./src/smart-list-block/assets/RightAlign.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function RightAlign() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M20 4.19993L11.1 4.19993L11.1 5.69993L20 5.69993L20 4.19993ZM11.1 19.7999L20 19.7999L20 18.2999L11.1 18.2999L11.1 19.7999ZM20 12.7999L20 11.2999L4 11.2999L4 12.7999L20 12.7999Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RightAlign);

/***/ },

/***/ "./src/smart-list-block/assets/Solid.js"
/*!**********************************************!*\
  !*** ./src/smart-list-block/assets/Solid.js ***!
  \**********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Solid() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("rect", {
      width: "16",
      height: "16",
      rx: "2",
      fill: "#8C8F94"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Solid);

/***/ },

/***/ "./src/smart-list-block/assets/Square.js"
/*!***********************************************!*\
  !*** ./src/smart-list-block/assets/Square.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Square({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 16 16",
    fill: "none",
    style: {
      color
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M15.6 1.2V14.4C15.6 15.0628 15.0628 15.6 14.4 15.6H1.2C0.537192 15.6 0 15.0628 0 14.4V1.2C0 0.537192 0.537192 0 1.2 0H14.4C15.0628 0 15.6 0.537192 15.6 1.2Z",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Square);

/***/ },

/***/ "./src/smart-list-block/assets/StylesIcon.js"
/*!***************************************************!*\
  !*** ./src/smart-list-block/assets/StylesIcon.js ***!
  \***************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function StylesIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 16 16",
    fill: "currentColor",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M3.75 8.93762C3.23306 8.93762 2.8125 8.51706 2.8125 8.00012C2.8125 7.48318 3.23306 7.06262 3.75 7.06262C4.26694 7.06262 4.6875 7.48318 4.6875 8.00012C4.6875 8.51706 4.26694 8.93762 3.75 8.93762ZM8 4.68762C7.48306 4.68762 7.0625 4.26706 7.0625 3.75012C7.0625 3.23319 7.48306 2.81262 8 2.81262C8.51694 2.81262 8.9375 3.23319 8.9375 3.75012C8.9375 4.26706 8.51694 4.68762 8 4.68762ZM11.0047 5.9329C10.4878 5.9329 10.0672 5.51234 10.0672 4.9954C10.0672 4.47847 10.4878 4.0579 11.0047 4.0579C11.5217 4.0579 11.9422 4.47847 11.9422 4.9954C11.9422 5.51234 11.5217 5.9329 11.0047 5.9329ZM4.99528 5.9329C4.47834 5.9329 4.05778 5.51234 4.05778 4.9954C4.05778 4.47847 4.47834 4.0579 4.99528 4.0579C5.51222 4.0579 5.93278 4.47847 5.93278 4.9954C5.93278 5.51234 5.51222 5.9329 4.99528 5.9329Z",
      fill: "currentColor"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M6.75278 15.8696C6.61103 15.8696 6.46825 15.8547 6.32638 15.8246C4.56169 15.4488 2.95691 14.4689 1.80766 13.0655C0.641969 11.642 0 9.843 0 8.00003C0 5.866 0.83025 3.85891 2.33781 2.3485C3.84516 0.838344 5.85025 0.00431224 7.98372 3.09944e-05L7.99988 0C12.3909 0 15.9782 3.56728 15.9999 7.95959C16.0001 8.00278 16 8.04594 15.9995 8.08906C15.9883 9.11397 15.5767 10.0751 14.8406 10.7953C14.1083 11.5118 13.1406 11.9063 12.1158 11.9063H9.875C9.27191 11.9063 8.78125 12.397 8.78125 13.0001V13.8377C8.78125 14.4536 8.50669 15.0291 8.02797 15.4166C7.66188 15.7129 7.21309 15.8696 6.75278 15.8696ZM7.99988 1.5625H7.98684C4.44447 1.56959 1.5625 4.45747 1.5625 8.00003C1.5625 11.0203 3.70288 13.6683 6.65181 14.2963C6.8425 14.337 6.97988 14.2547 7.04488 14.202C7.10981 14.1495 7.21875 14.0322 7.21875 13.8377V13C7.21875 11.5353 8.41034 10.3438 9.875 10.3438H12.1158C13.3821 10.3438 14.4234 9.32463 14.4371 8.07194V8.07187C14.4375 8.03712 14.4376 8.0023 14.4374 7.96741C14.4199 4.43316 11.533 1.5625 7.99988 1.5625Z",
      fill: "currentColor"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (StylesIcon);

/***/ },

/***/ "./src/smart-list-block/assets/TabIcon.js"
/*!************************************************!*\
  !*** ./src/smart-list-block/assets/TabIcon.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TabIcon({
  color = "#8C8F94"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": "true",
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "currentColor",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M9.428 0H2.571C1.623 0 .857.67.857 1.5v9c0 .83.766 1.5 1.714 1.5h6.857c.949 0 1.715-.67 1.715-1.5v-9c0-.83-.766-1.5-1.715-1.5ZM7.143 11H4.857v-.5h2.286v.5Zm3-1.5H1.857v-8h8.286v8Z",
      fill: color
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TabIcon);

/***/ },

/***/ "./src/smart-list-block/assets/TelevisionIcon.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/assets/TelevisionIcon.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function TelevisionIcon({
  color = "#8C8F94"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M12.5714 0H1.14286C0.511905 0 0 0.503906 0 1.125V8.625C0 9.24609 0.511905 9.75 1.14286 9.75H5.71428L5.33333 10.875H3.61905C3.30238 10.875 3.04762 11.1258 3.04762 11.4375C3.04762 11.7492 3.30238 12 3.61905 12H10.0952C10.4119 12 10.6667 11.7492 10.6667 11.4375C10.6667 11.1258 10.4119 10.875 10.0952 10.875H8.38095L8.00001 9.75H12.5714C13.2024 9.75 13.7143 9.24609 13.7143 8.625V1.125C13.7143 0.503906 13.2024 0 12.5714 0ZM12.1905 8.25H1.52381V1.5H12.1905V8.25Z",
      fill: color
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TelevisionIcon);

/***/ },

/***/ "./src/smart-list-block/assets/TopAlignment.js"
/*!*****************************************************!*\
  !*** ./src/smart-list-block/assets/TopAlignment.js ***!
  \*****************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function TopAlignment() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M4.19981 3.99994L4.1998 12.8999L5.6998 12.8999L5.69981 3.99994L4.19981 3.99994ZM19.7998 12.8999L19.7998 3.99994L18.2998 3.99994L18.2998 12.8999L19.7998 12.8999ZM12.7998 3.99994L11.2998 3.99994L11.2998 19.9999L12.7998 19.9999L12.7998 3.99994Z",
      fill: "#757575"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TopAlignment);

/***/ },

/***/ "./src/smart-list-block/assets/Triangle.js"
/*!*************************************************!*\
  !*** ./src/smart-list-block/assets/Triangle.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Triangle({
  size = 16,
  color = "currentColor"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    width: size,
    height: size,
    viewBox: "0 0 23 23",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    style: {
      color
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      y: "11.2263",
      width: "15.8763",
      height: "15.8763",
      transform: "rotate(-45 0 11.2263)",
      fill: "currentColor"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Triangle);

/***/ },

/***/ "./src/smart-list-block/assets/Typo.js"
/*!*********************************************!*\
  !*** ./src/smart-list-block/assets/Typo.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Typo({
  onClick,
  active
}) {
  const strokeColor = active ? "#6f22dd" : "#2F2F2F";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    onClick: onClick,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("rect", {
      x: "0.8",
      y: "0.8",
      width: "22.4",
      height: "22.4",
      rx: "3.2",
      stroke: strokeColor,
      "stroke-width": "1.6"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M13.0315 16.75L11.0684 11.1504C10.1567 8.55012 9.70094 7.25 8.9601 7.25C8.21926 7.25 7.76345 8.55012 6.85184 11.1504L4.88867 16.75M6.5851 12H11.3351",
      stroke: strokeColor,
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M19.0884 13.3159V16.3695M19.0884 13.3159C19.1204 12.7574 19.1217 12.3319 19.0546 11.9846C18.8965 11.166 18.0411 10.6727 17.2134 10.5723C16.4212 10.4763 15.7853 10.6802 15.142 11.6175M19.0884 13.3159H17.1588C16.8624 13.3159 16.5634 13.3302 16.2778 13.4096C14.532 13.8949 14.66 16.3431 16.4108 16.6449C16.6053 16.6784 16.8039 16.6928 17.0008 16.6839C17.4606 16.6634 17.8848 16.4413 18.249 16.1597C18.6754 15.8299 19.0884 15.3695 19.0884 14.6731V13.3159Z",
      stroke: strokeColor,
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typo);

/***/ },

/***/ "./src/smart-list-block/assets/Unlink.js"
/*!***********************************************!*\
  !*** ./src/smart-list-block/assets/Unlink.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Unlink() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "24",
    height: "24",
    viewBox: "0 0 24 24",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
      d: "M8.39981 16.7L9.09981 16.7L7.49981 20.2L8.39981 20.6L12.2998 12.1L14.9998 12.1L14.9998 10.6L12.9998 10.6L14.2998 7.80001L15.5998 7.80001C17.5998 7.80001 19.2998 9.50001 19.2998 11.5C19.2998 13.5 17.5998 15.2 15.5998 15.2L13.9998 15.2L13.9998 16.7L15.5998 16.7C18.4998 16.7 20.7998 14.4 20.7998 11.5C20.7998 8.60001 18.4998 6.30001 15.5998 6.30001L14.9998 6.30001L16.3998 3.10001L15.4998 2.70001L9.79981 15.2L8.39981 15.2C6.39981 15.2 4.69981 13.5 4.69981 11.5C4.69981 9.50001 6.39981 7.80001 8.39981 7.80001L9.99981 7.80001L9.99981 6.30001L8.3998 6.30001C5.4998 6.30001 3.19981 8.60001 3.19981 11.5C3.19981 14.4 5.59981 16.7 8.39981 16.7Z",
      fill: "#2F2F2F"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Unlink);

/***/ },

/***/ "./src/smart-list-block/block.json"
/*!*****************************************!*\
  !*** ./src/smart-list-block/block.json ***!
  \*****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/smart-list-block","version":"1.0.0","title":"Smart List Block","category":"smart-list","icon":{"src":"list-view","foreground":"#641DD7"},"description":"Smart List is block to show list","example":{},"supports":{"html":false,"anchor":true,"className":true,"innerBlocks":true},"allowedBlocks":["create-block/smart-list-item"],"attributes":{"presetsType":{"type":"string","default":"list"},"listOrientation":{"type":"string","default":"vertical"},"alignment":{"type":"string","default":"left"},"previewWidth":{"type":"string","default":"100%"},"spaceBetween":{"type":"object","default":{"desktop":4,"tablet":4,"mobile":4}},"iconGap":{"type":"object","default":{"desktop":12,"tablet":12,"mobile":12}},"divider":{"type":"object","default":{"show":false,"width":{"desktop":1,"tablet":1,"mobile":1},"style":"solid","color":"#f05e31"}},"border":{"type":"object","default":{"show":false,"width":{"desktop":1,"tablet":1,"mobile":1},"style":"solid","color":"#f05e31"}},"showConnectionLine":{"type":"boolean","default":false},"backgroundStyle":{"type":"object","default":{"type":"solid","background":"","image":"","backgroundSize":"auto"}},"backgroundOverlay":{"type":"object","default":{"enabled":false,"color":"#f05e31","opacity":{"desktop":50,"tablet":30,"mobile":30}}},"color":{"type":"string","default":"#fff"},"padding":{"type":"object","default":{"desktop":{"top":12,"right":12,"bottom":12,"left":12,"linked":true},"tablet":{"top":8,"right":8,"bottom":8,"left":8,"linked":true},"mobile":{"top":4,"right":4,"bottom":4,"left":4,"linked":true}}},"margin":{"type":"object","default":{"desktop":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"tablet":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"mobile":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}}},"radius":{"type":"object","default":{"desktop":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"tablet":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"mobile":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}}},"title":{"type":"object","default":{"show":true,"tags":"p","family":"Roboto","fontSize":16,"weight":400,"height":1.5,"spacing":0,"text":"List item title","titleColor":"#757575","titleHoverColor":"#757575"}},"description":{"type":"object","default":{"show":false,"tags":"p","family":"Roboto","fontSize":11,"weight":400,"height":1.5,"spacing":0,"text":"List item title","descriptionColor":"#757575","descriptionHoverColor":"#757575"}},"contentEffect":{"type":"string","default":"normal"},"iconEffect":{"type":"string","default":"normal"},"gapTitleToDescription":{"type":"object","default":{"desktop":6,"tablet":3,"mobile":1}},"icon":{"type":"object","default":{"show":true,"type":"iconSet","imageSource":"","iconSourceId":"star","width":{"desktop":24,"tablet":20,"mobile":16},"height":{"desktop":24,"tablet":20,"mobile":16},"size":{"desktop":24,"tablet":20,"mobile":16},"position":"left","alignment":"center"}},"iconStyle":{"type":"object","default":{"show":false,"type":"square","iconBackGroundStyle":"solid","iconBgColor":"#EEEEEE","iconHoverBgColor":"#EEEEEE","iconColor":"#757575","iconHoverColor":"#757575","effect":"normal"}},"iconBorderStyle":{"type":"object","default":{"show":false,"width":{"desktop":1,"tablet":1,"mobile":1},"style":"solid","color":"#f05e31"}},"paddingIcon":{"type":"object","default":{"desktop":{"top":4,"right":4,"bottom":4,"left":4,"linked":true},"tablet":{"top":4,"right":4,"bottom":4,"left":4,"linked":true},"mobile":{"top":4,"right":4,"bottom":4,"left":4,"linked":true}}},"radiusIcon":{"type":"object","default":{"desktop":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"tablet":{"top":0,"right":0,"bottom":0,"left":0,"linked":true},"mobile":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}}}},"providesContext":{"title":"title","description":"description","icon":"icon","iconStyle":"iconStyle","iconBorderStyle":"iconBorderStyle","radiusIcon":"radiusIcon","paddingIcon":"paddingIcon","presetsType":"presetsType"},"textdomain":"smart-list-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/ContentControlPanel.js"
/*!*****************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/ContentControlPanel/ContentControlPanel.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _General_General__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./General/General */ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/General/General.js");
/* harmony import */ var _Style_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Style/Style */ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/Style/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function ContentControlPanel() {
  const [selectedTab, setSelectedTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_const__WEBPACK_IMPORTED_MODULE_4__.contentTabItems[0].name);
  const handleTab = tabName => {
    setSelectedTab(tabName);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Content", "smart-list-block"),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_4__.contentTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab
    }), selectedTab === "general" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_General_General__WEBPACK_IMPORTED_MODULE_5__["default"], {}), selectedTab === "styles" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Style_Style__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentControlPanel);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/General/General.js"
/*!*************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/ContentControlPanel/General/General.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function General() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    title,
    description
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Title",
      checked: title.show,
      onChange: value => setAttributes({
        title: {
          ...title,
          show: value
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Description",
      checked: description.show,
      onChange: value => setAttributes({
        description: {
          ...description,
          show: value
        }
      })
    }), description.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Title to Description Gap",
      attributeKey: "gapTitleToDescription",
      min: 0,
      max: 100,
      defaultValue: 6
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/Style/Style.js"
/*!*********************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/ContentControlPanel/Style/Style.js ***!
  \*********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Typography_Typography__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Typography/Typography */ "./src/smart-list-block/components/InspectorControl/common/Typography/Typography.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function Style() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    title,
    description,
    contentEffect
  } = attributes;
  const selectedTab = contentEffect;
  const handleTextColor = value => {
    if (contentEffect === "normal") {
      setAttributes({
        title: {
          ...title,
          titleColor: value
        }
      });
    } else if (contentEffect === "hover") {
      setAttributes({
        title: {
          ...title,
          titleHoverColor: value
        }
      });
    }
  };
  const handleDescriptionColor = value => {
    if (contentEffect === "normal") {
      setAttributes({
        description: {
          ...description,
          descriptionColor: value
        }
      });
    } else if (contentEffect === "hover") {
      setAttributes({
        description: {
          ...description,
          descriptionHoverColor: value
        }
      });
    }
  };
  const handleTab = tabName => {
    setAttributes({
      contentEffect: tabName
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Typography_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Title Typography",
      attributeKey: "title",
      onChange: value => setAttributes({
        title: value
      }),
      values: title
    }), description.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Typography_Typography__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Description Typography",
      attributeKey: "description",
      onChange: value => setAttributes({
        description: value
      }),
      values: description
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_3__.contentEffectItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "only-text"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Title Color",
      value: contentEffect === "normal" ? title.titleColor : title.titleHoverColor,
      onChange: handleTextColor
    }), description.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Description Color",
      value: contentEffect === "normal" ? description.descriptionColor : description.descriptionHoverColor,
      onChange: handleDescriptionColor
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralControlPanel.js"
/*!*****************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralControlPanel.js ***!
  \*****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _GeneralPanelItems_Presets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./GeneralPanelItems/Presets */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets.js");
/* harmony import */ var _GeneralPanelItems_Styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GeneralPanelItems/Styles */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles.js");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function GeneralControlPanel() {
  const [selectedTab, setSelectedTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_3__.useState)(_const__WEBPACK_IMPORTED_MODULE_4__.generalTabItems[0].name);
  const handleTab = tabName => {
    setSelectedTab(tabName);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_5__.__)("General", "smart-list-block"),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_4__.generalTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab
    }), selectedTab === "presets" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_GeneralPanelItems_Presets__WEBPACK_IMPORTED_MODULE_1__["default"], {}), selectedTab === "styles" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_GeneralPanelItems_Styles__WEBPACK_IMPORTED_MODULE_2__["default"], {})]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GeneralControlPanel);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundOverlay.js"
/*!**********************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundOverlay.js ***!
  \**********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function BackgroundOverlay({
  value,
  onChange
}) {
  const {
    enabled,
    color,
    opacity
  } = value || {
    enabled: false,
    color: "#f05e31",
    opacity: {
      desktop: 50,
      mobile: 30,
      tablet: 30
    }
  };
  const handleToggle = newEnabled => {
    onChange({
      ...value,
      enabled: newEnabled
    });
  };
  const handleColorChange = newColor => {
    onChange({
      ...value,
      color: newColor
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Overlay",
      checked: enabled,
      onChange: handleToggle
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
          label: "Overlay Color",
          value: color,
          onChange: handleColorChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_1__["default"], {
          label: "opacity",
          attributeKey: "backgroundOverlay",
          max: 100,
          defaultValue: 50,
          nestedKey: "opacity"
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundOverlay);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundStyle.js"
/*!********************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundStyle.js ***!
  \********************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _BackgroundOverlay__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./BackgroundOverlay */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundOverlay.js");
/* harmony import */ var _GradientStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GradientStyle */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/GradientStyle.js");
/* harmony import */ var _ImageScale__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ImageScale */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageScale.js");
/* harmony import */ var _ImageUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ImageUpload */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function BackgroundStyle() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    backgroundStyle,
    backgroundOverlay
  } = attributes;
  const selectedTab = backgroundStyle.type || "solid";
  const handleTab = tabName => {
    setAttributes({
      backgroundStyle: {
        ...backgroundStyle,
        type: tabName
      }
    });
  };
  const handleGradientChange = value => {
    setAttributes({
      backgroundStyle: {
        ...backgroundStyle,
        background: value
      }
    });
  };
  const handleImageChange = value => {
    setAttributes({
      backgroundStyle: {
        ...backgroundStyle,
        image: value
      }
    });
  };
  const handleOverlayChange = value => {
    setAttributes({
      backgroundOverlay: value
    });
  };
  const renderBackgroundControl = () => {
    switch (selectedTab) {
      case "gradient":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_GradientStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
          value: backgroundStyle.background,
          onChange: handleGradientChange
        });
      case "image":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ImageUpload__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onChange: handleImageChange,
            value: backgroundStyle.image || ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ImageScale__WEBPACK_IMPORTED_MODULE_6__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_BackgroundOverlay__WEBPACK_IMPORTED_MODULE_4__["default"], {
            value: backgroundOverlay,
            onChange: handleOverlayChange
          })]
        });
      case "solid":
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("div", {
      className: "background-style",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "Background Style"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
        tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.backGroundStyles,
        onHandleTab: handleTab,
        selectedTab: selectedTab,
        variant: "smallIcon"
      })]
    }), renderBackgroundControl()]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BackgroundStyle);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/GradientStyle.js"
/*!******************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/GradientStyle.js ***!
  \******************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function GradientBackground({
  value,
  onChange
}) {
  const DEFAULT_GRADIENT = "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)";
  const gradientValue = value && typeof value === "string" && value.includes("gradient") ? value : DEFAULT_GRADIENT;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: "background-gradient-picker",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.GradientPicker, {
      value: gradientValue,
      clearable: false,
      onChange: onChange,
      gradients: [{
        name: "JShine",
        gradient: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
        slug: "jshine"
      }, {
        name: "Moonlit Asteroid",
        gradient: "linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)",
        slug: "moonlit-asteroid"
      }, {
        name: "Rastafarie",
        gradient: "linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)",
        slug: "rastafari"
      }, {
        gradient: "linear-gradient(135deg,rgb(74,234,220) 0%,rgb(151,120,209) 20%,rgb(207,42,186) 40%,rgb(238,44,130) 60%,rgb(251,105,98) 80%,rgb(254,248,76) 100%)",
        name: "Cool to warm spectrum",
        slug: "cool-to-warm-spectrum"
      }, {
        gradient: "linear-gradient(135deg,hsl(200, 100%, 50%) 0%,hsl(280, 100%, 60%) 100%)",
        name: "HSL blue to purple",
        slug: "hsl-blue-to-purple"
      }, {
        gradient: "linear-gradient(135deg,hsla(120, 100%, 40%, 0.85) 0%,hsla(0, 100%, 50%, 0.85) 100%)",
        name: "HSLA green to red",
        slug: "hsla-green-to-red"
      }]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GradientBackground);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageScale.js"
/*!***************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageScale.js ***!
  \***************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ImageScale() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    backgroundStyle
  } = attributes;
  const selectedTab = backgroundStyle.backgroundSize || "auto";
  const handleTab = value => {
    setAttributes({
      backgroundStyle: {
        ...backgroundStyle,
        backgroundSize: value
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Image Scale"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.imageScales,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "only-text"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageScale);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload.js"
/*!****************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload.js ***!
  \****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _UploadButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UploadButton */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/UploadButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ImageUpload({
  onChange,
  value
}) {
  const ALLOWED_MEDIA_TYPES = ["image"];
  const handleImageSelect = media => {
    if (media?.url) {
      onChange(media.url);
    }
  };
  const handleRemove = () => {
    onChange("");
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "background-image-upload",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUploadCheck, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.MediaUpload, {
        allowedTypes: ALLOWED_MEDIA_TYPES,
        onSelect: handleImageSelect,
        value: value,
        render: ({
          open
        }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_UploadButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
          onClick: open,
          imageUrl: value,
          onRemove: handleRemove
        })
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageUpload);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/UploadButton.js"
/*!*****************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/UploadButton.js ***!
  \*****************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_Close__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../assets/Close */ "./src/smart-list-block/assets/Close.js");
/* harmony import */ var _assets_PlusIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../assets/PlusIcon */ "./src/smart-list-block/assets/PlusIcon.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function UploadButton({
  onClick,
  imageUrl,
  onRemove
}) {
  const handleRemove = e => {
    e.stopPropagation();
    e.preventDefault();
    onRemove();
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    style: {
      cursor: "pointer"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Image"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      onClick: !imageUrl ? onClick : undefined,
      className: "image-upload",
      children: imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
        style: {
          position: "relative",
          width: "100%",
          height: "100%"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("img", {
          src: imageUrl,
          style: {
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
          onClick: handleRemove,
          type: "button",
          style: {
            position: "absolute",
            top: "8px",
            right: "8px",
            zIndex: 10,
            cursor: "pointer"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_assets_Close__WEBPACK_IMPORTED_MODULE_0__["default"], {})
        })]
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_assets_PlusIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (UploadButton);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets.js"
/*!***********************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets.js ***!
  \***********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _ListOrientation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../ListOrientation */ "./src/smart-list-block/components/ListOrientation.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _Presets_Alignment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Presets/Alignment */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/Alignment.js");
/* harmony import */ var _Presets_DividerSettings_DividerSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Presets/DividerSettings/DividerSettings */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/DividerSettings/DividerSettings.js");
/* harmony import */ var _Presets_ListPresets__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Presets/ListPresets */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/ListPresets.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);









function Presets() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    listOrientation,
    divider,
    showConnectionLine,
    presetsType
  } = attributes;
  const prevListRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(divider.show);
  // Handle user preset list when divider on and of
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    if (presetsType !== "list") {
      // Save user's list preference before forcing
      prevListRef.current = divider.show;
      if (!divider.show) {
        setAttributes({
          divider: {
            ...divider,
            show: true
          }
        });
      }
    } else {
      // Restore user's list preference
      setAttributes({
        divider: {
          ...divider,
          show: prevListRef.current
        }
      });
    }
  }, [presetsType]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Presets_ListPresets__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_ListOrientation__WEBPACK_IMPORTED_MODULE_2__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Presets_Alignment__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Space Between Lists",
      attributeKey: "spaceBetween",
      min: 0,
      max: 100,
      defaultValue: 24
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Icon to Content Gap",
      attributeKey: "iconGap",
      min: 0,
      max: 100,
      defaultValue: 12
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Divider",
      checked: divider.show,
      onChange: value => setAttributes({
        divider: {
          ...divider,
          show: value
        }
      })
    }), divider.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_Presets_DividerSettings_DividerSettings__WEBPACK_IMPORTED_MODULE_6__["default"], {}), listOrientation === "vertical" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Connection Line",
      checked: showConnectionLine,
      onChange: value => setAttributes({
        showConnectionLine: value
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Presets);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/Alignment.js"
/*!*********************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/Alignment.js ***!
  \*********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Alignment() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    alignment
  } = attributes;
  const selectedTab = alignment;
  const handleTab = tabName => {
    setAttributes({
      alignment: tabName
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      style: {
        paddingTop: "8px"
      },
      children: "Alignment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_2__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.alignmentTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "alignment"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alignment);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/DividerSettings/DividerSettings.js"
/*!*******************************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/DividerSettings/DividerSettings.js ***!
  \*******************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/Selection/Selection */ "./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function DividerSetting() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    divider
  } = attributes;
  const handleDividerColor = value => {
    setAttributes({
      divider: {
        ...divider,
        color: value
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Divider Style",
      options: _const__WEBPACK_IMPORTED_MODULE_0__.dividerStyle,
      attributeKey: "divider",
      subKey: "style"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Divider Width",
      attributeKey: "divider",
      min: 0,
      max: 10,
      defaultValue: 1,
      nestedKey: "width"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Divider Color",
      value: divider.color,
      onChange: handleDividerColor
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DividerSetting);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/ListPresets.js"
/*!***********************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Presets/ListPresets.js ***!
  \***********************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function ListPresets() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    presetsType
  } = attributes;
  const selectedTab = presetsType;
  const handleTab = tabName => {
    setAttributes({
      presetsType: tabName
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: "List Presets"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.presetTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "icon",
      activeColor: "#1A74E4"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPresets);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles.js"
/*!**********************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles.js ***!
  \**********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/SpacingControl/SpacingControl */ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/SpacingControl.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _GeneralStyle_BackgroundStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./GeneralStyle/BackgroundStyle */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundStyle.js");
/* harmony import */ var _Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Styles/BorderSettings/BorderSettings */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function Styles() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    border
  } = attributes;
  const handleChange = newColor => {
    setAttributes({
      color: newColor
    });
  };
  const deviceType = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.useDeviceType)();
  const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_GeneralStyle_BackgroundStyle__WEBPACK_IMPORTED_MODULE_5__["default"], {
      label: "Background Style"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Color",
      onChange: handleChange,
      value: attributes.color
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Border",
      checked: border.show,
      onChange: value => setAttributes({
        border: {
          ...border,
          show: value
        }
      })
    }), border.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_6__["default"], {
      attributeKey: "border"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      values: attributes.radius,
      deviceType: normalizedDeviceType,
      label: "Border Radius",
      onChange: values => setAttributes({
        radius: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      values: attributes.padding,
      deviceType: normalizedDeviceType,
      label: "Padding",
      onChange: values => setAttributes({
        padding: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      values: attributes.margin,
      deviceType: normalizedDeviceType,
      label: "Margin",
      onChange: values => setAttributes({
        margin: values
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Styles);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings.js"
/*!****************************************************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings.js ***!
  \****************************************************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/Selection/Selection */ "./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function BorderSetting({
  attributeKey
}) {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const value = attributes?.[attributeKey]?.color;
  const handleBorderColor = value => {
    setAttributes({
      [attributeKey]: {
        ...attributes[attributeKey],
        color: value
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Border Style",
      options: _const__WEBPACK_IMPORTED_MODULE_0__.dividerStyle,
      attributeKey: attributeKey,
      subKey: "style"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Border Width",
      attributeKey: attributeKey,
      min: 0,
      max: 10,
      defaultValue: 1,
      nestedKey: "width"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Border Color",
      value: value,
      onChange: handleBorderColor
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderSetting);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/Alignment.js"
/*!************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/IconControlPanel/General/Alignment.js ***!
  \************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Alignment() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    icon
  } = attributes;
  const selectedTab = icon?.alignment;
  const handleTab = tabName => {
    setAttributes({
      icon: {
        ...icon,
        alignment: tabName
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Alignment"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_3__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.iconAlignmentTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "alignment"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Alignment);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/General.js"
/*!**********************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/IconControlPanel/General/General.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Selection/Selection */ "./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _GeneralControlPanel_GeneralPanelItems_GeneralStyle_ImageUpload__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/ImageUpload.js");
/* harmony import */ var _Alignment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Alignment */ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/Alignment.js");
/* harmony import */ var _IconUpload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./IconUpload */ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/IconUpload.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











function General() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    icon
  } = attributes;
  const selectedTab = icon.type;
  const handleTab = tabName => {
    setAttributes({
      icon: {
        ...icon,
        type: tabName
      }
    });
  };
  const handleImageChange = value => {
    setAttributes({
      icon: {
        ...icon,
        imageSource: value
      }
    });
  };
  const renderBackgroundControl = () => {
    switch (selectedTab) {
      case "iconSet":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_IconUpload__WEBPACK_IMPORTED_MODULE_9__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Icon Size",
            attributeKey: "icon",
            nestedKey: "size",
            min: 0,
            max: 100,
            defaultValue: 24
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "Icon Position",
            options: _const__WEBPACK_IMPORTED_MODULE_0__.iconPosition,
            attributeKey: "icon",
            subKey: "position"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Alignment__WEBPACK_IMPORTED_MODULE_8__["default"], {})]
        });
      case "custom":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_GeneralControlPanel_GeneralPanelItems_GeneralStyle_ImageUpload__WEBPACK_IMPORTED_MODULE_7__["default"], {
            onChange: handleImageChange,
            value: icon.imageSource || ""
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Width",
            attributeKey: "icon",
            nestedKey: "width",
            min: 0,
            max: 50,
            defaultValue: 20
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Height",
            attributeKey: "icon",
            nestedKey: "height",
            min: 0,
            max: 50,
            defaultValue: 20
          })]
        });
      default:
        return null;
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      label: "Icon",
      checked: icon.show,
      onChange: value => setAttributes({
        icon: {
          ...icon,
          show: value
        }
      })
    }), icon.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: "Icon Source"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_5__["default"], {
        tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.iconTabItems,
        onHandleTab: handleTab,
        selectedTab: selectedTab,
        variant: "only-text"
      }), renderBackgroundControl()]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (General);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/IconUpload.js"
/*!*************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/IconControlPanel/General/IconUpload.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_PlusIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/PlusIcon */ "./src/smart-list-block/assets/PlusIcon.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _const_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../const/icons */ "./src/smart-list-block/const/icons.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function IconUpload() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_5__["default"])();
  const {
    icon
  } = attributes;
  const iconSourceId = icon?.iconSourceId;
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const iconList = (0,_const_icons__WEBPACK_IMPORTED_MODULE_4__.getIcons)();
  const handleIconSelect = selectedIcon => {
    setAttributes({
      icon: {
        ...icon,
        iconSourceId: selectedIcon.id
      }
    });
    setIsOpen(false);
  };
  const getIconComponent = () => {
    if (!iconSourceId) return null;
    const iconItem = iconList.find(item => item.id === iconSourceId);
    return iconItem?.component;
  };
  const SelectedIconComponent = getIconComponent();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    style: {
      cursor: "pointer"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Icon Sources"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "icon-upload",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        onClick: () => setIsOpen(!isOpen),
        children: [SelectedIconComponent ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          style: {
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "8px",
            border: "1px solid #ddd",
            borderRadius: "4px"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(SelectedIconComponent, {
            size: 24
          })
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_PlusIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {}), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
          placement: "top-start",
          onClose: () => setIsOpen(false),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: {
              display: "grid",
              gridTemplateColumns: "repeat(6, 1fr)",
              gap: "4px",
              width: "420px",
              justifyItems: "center",
              padding: "8px",
              overflow: "hidden"
            },
            children: iconList.map((iconItem, index) => {
              const IconComponent = iconItem.component;
              const isSelected = iconSourceId === iconItem.id;
              return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "icon-option-svg",
                onClick: e => {
                  e.stopPropagation();
                  handleIconSelect(iconItem);
                },
                style: {
                  padding: "8px",
                  borderRadius: "4px",
                  backgroundColor: isSelected ? "#F05D31" : "transparent",
                  cursor: "pointer",
                  transition: "all 0.2s ease"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(IconComponent, {
                  size: 24,
                  color: isSelected ? "#fff" : "#757575"
                })
              }, index);
            })
          })
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (IconUpload);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/IconControlPanel/IconControlPanel.js"
/*!***********************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/IconControlPanel/IconControlPanel.js ***!
  \***********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _IconControlPanel_General_General__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../IconControlPanel/General/General */ "./src/smart-list-block/components/InspectorControl/IconControlPanel/General/General.js");
/* harmony import */ var _IconControlPanel_Style_Style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../IconControlPanel/Style/Style */ "./src/smart-list-block/components/InspectorControl/IconControlPanel/Style/Style.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function ContentControlPanel() {
  const [selectedTab, setSelectedTab] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useState)(_const__WEBPACK_IMPORTED_MODULE_3__.iconImageTabItems[0].name);
  const handleTab = tabName => {
    setSelectedTab(tabName);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.PanelBody, {
    title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__.__)("Icon/Image", "smart-list-block"),
    initialOpen: false,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_4__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_3__.iconImageTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab
    }), selectedTab === "general" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_IconControlPanel_General_General__WEBPACK_IMPORTED_MODULE_5__["default"], {}), selectedTab === "styles" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_IconControlPanel_Style_Style__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ContentControlPanel);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/IconControlPanel/Style/Style.js"
/*!******************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/IconControlPanel/Style/Style.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/SpacingControl/SpacingControl */ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/SpacingControl.js");
/* harmony import */ var _common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _GeneralControlPanel_GeneralPanelItems_Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function Style() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    iconStyle,
    iconBorderStyle,
    iconEffect
  } = attributes;
  const selectedTab = iconStyle.type;
  const selectedEffectTab = iconEffect;
  console.log(selectedEffectTab, iconStyle);
  const handleTab = tabName => {
    setAttributes({
      iconStyle: {
        ...iconStyle,
        type: tabName
      }
    });
  };
  const handleEffectTab = tabName => {
    setAttributes({
      iconEffect: tabName
    });
  };
  const handleIconBackgroundColor = value => {
    if (iconEffect === "normal") {
      setAttributes({
        iconStyle: {
          ...iconStyle,
          iconBgColor: value
        }
      });
    } else if (iconEffect === "hover") {
      setAttributes({
        iconStyle: {
          ...iconStyle,
          iconHoverBgColor: value
        }
      });
    }
  };
  const handleIconColor = value => {
    if (iconEffect === "normal") {
      setAttributes({
        iconStyle: {
          ...iconStyle,
          iconColor: value
        }
      });
    } else if (iconEffect === "hover") {
      setAttributes({
        iconStyle: {
          ...iconStyle,
          iconHoverColor: value
        }
      });
    }
  };
  const deviceType = (0,_utils__WEBPACK_IMPORTED_MODULE_2__.useDeviceType)();
  const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "Icon Background",
      checked: iconStyle.show,
      onChange: value => setAttributes({
        iconStyle: {
          ...iconStyle,
          show: value
        }
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.iconEffectTabItems,
      onHandleTab: handleEffectTab,
      selectedTab: selectedEffectTab,
      variant: "only-text"
    }), iconStyle.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_Label__WEBPACK_IMPORTED_MODULE_4__["default"], {
        label: "Choose Background Shape"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_6__["default"], {
        tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.iconBackgroundTabsItems,
        onHandleTab: handleTab,
        selectedTab: selectedTab,
        variant: "alignment",
        color: "#757575"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: "Icon Background",
        value: iconEffect === "normal" ? iconStyle.iconBgColor : iconStyle.iconHoverBgColor,
        onChange: handleIconBackgroundColor,
        defaultValue: "#EEEEEE"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Icon Color",
      value: iconEffect === "normal" ? iconStyle.iconColor : iconStyle.iconHoverColor,
      onChange: handleIconColor,
      defaultValue: "#757575"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_7__["default"], {
      label: "Border",
      checked: iconBorderStyle.show,
      onChange: value => setAttributes({
        iconBorderStyle: {
          ...iconBorderStyle,
          show: value
        }
      })
    }), iconBorderStyle.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_GeneralControlPanel_GeneralPanelItems_Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_8__["default"], {
      attributeKey: "iconBorderStyle"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      values: attributes.radiusIcon,
      deviceType: normalizedDeviceType,
      label: "Border Radius",
      onChange: values => setAttributes({
        radiusIcon: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
      values: attributes.paddingIcon,
      deviceType: normalizedDeviceType,
      label: "Padding",
      onChange: values => setAttributes({
        paddingIcon: values
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Style);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js"
/*!********************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js ***!
  \********************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/Circle */ "./src/smart-list-block/assets/Circle.js");
/* harmony import */ var _assets_ResetIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/ResetIcon */ "./src/smart-list-block/assets/ResetIcon.js");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CustomColorPicker({
  label,
  value,
  onChange,
  defaultValue = "#f05e31"
}) {
  const [isOpen, setIsOpen] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const anchorRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  const handleColorChange = value => {
    onChange(value.hex);
  };
  const handleReset = () => {
    onChange(defaultValue);
    setIsOpen(false);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "range-label",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: label
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "range-measure",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_ResetIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              style: {
                cursor: "pointer"
              },
              onClick: handleReset
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "color",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                onClick: () => {
                  setIsOpen(!isOpen);
                },
                ref: anchorRef,
                style: {
                  cursor: "pointer"
                },
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_Circle__WEBPACK_IMPORTED_MODULE_1__["default"], {
                  fill: value
                })
              })
            })]
          })
        })]
      })
    }), isOpen && anchorRef.current && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Popover, {
      placement: "left-start",
      onClose: () => setIsOpen(false),
      className: "color-popover",
      usePortal: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
        color: value,
        onChangeComplete: handleColorChange,
        enableAlpha: true
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomColorPicker);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Input/Input.js"
/*!********************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Input/Input.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Input({
  label,
  value,
  onChange = () => {},
  step = 1
}) {
  const handleChange = e => {
    const newValue = e.target.value;
    onChange(newValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    style: {
      marginTop: "16px"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("label", {
      style: {
        display: "block",
        marginBottom: "8px",
        fontSize: "13px",
        fontWeight: "500",
        color: "#1e1e1e"
      },
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", {
      type: "number",
      step: step,
      value: value,
      onChange: handleChange,
      style: {
        width: "100%",
        border: "1px solid #ddd",
        fontSize: "14px",
        outline: "none",
        transition: "border-color 0.2s"
      },
      onFocus: e => {
        e.target.style.borderColor = "#6f22dd";
        e.target.style.boxShadow = "0 0 0 1px #6f22dd";
      },
      onBlur: e => {
        e.target.style.borderColor = "#ddd";
        e.target.style.boxShadow = "none";
      }
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Input);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Label/index.js"
/*!********************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Label/index.js ***!
  \********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Label({
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
    className: "label",
    children: label
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Label);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js"
/*!****************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js ***!
  \****************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_ResetIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/ResetIcon */ "./src/smart-list-block/assets/ResetIcon.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var _ResponsibeDropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ResponsibeDropdown */ "./src/smart-list-block/components/ResponsibeDropdown.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function CustomRangeControl({
  label = "Space Between Lists",
  attributeKey = "spaceBetween",
  min = 0,
  max = 100,
  defaultValue = 0,
  nestedKey = null
}) {
  var _attributes$attribute, _attributes$attribute2, _attributes$attribute3;
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const deviceType = (0,_utils__WEBPACK_IMPORTED_MODULE_3__.useDeviceType)();
  const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
  const activeSubKey = normalizedDeviceType;
  const value = nestedKey && activeSubKey ? (_attributes$attribute = attributes?.[attributeKey]?.[nestedKey]?.[activeSubKey]) !== null && _attributes$attribute !== void 0 ? _attributes$attribute : defaultValue : activeSubKey ? (_attributes$attribute2 = attributes?.[attributeKey]?.[activeSubKey]) !== null && _attributes$attribute2 !== void 0 ? _attributes$attribute2 : defaultValue : (_attributes$attribute3 = attributes?.[attributeKey]) !== null && _attributes$attribute3 !== void 0 ? _attributes$attribute3 : defaultValue;
  const handleChange = (attributeKey, newValue, deviceSubKey) => {
    if (nestedKey && deviceSubKey) {
      setAttributes({
        [attributeKey]: {
          ...attributes[attributeKey],
          [nestedKey]: {
            ...attributes[attributeKey]?.[nestedKey],
            [deviceSubKey]: newValue
          }
        }
      });
    } else if (deviceSubKey) {
      setAttributes({
        [attributeKey]: {
          ...attributes[attributeKey],
          [deviceSubKey]: newValue
        }
      });
    } else {
      setAttributes({
        [attributeKey]: newValue
      });
    }
  };
  const handleReset = () => {
    handleChange(attributeKey, defaultValue, activeSubKey);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "range-label",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "desktop",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ResponsibeDropdown__WEBPACK_IMPORTED_MODULE_4__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "range-measure",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_ResetIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
              style: {
                cursor: "pointer"
              },
              onClick: handleReset
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "pixel",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: "px"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "input-range",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        max: max,
        min: min,
        value: value,
        onChange: newValue => handleChange(attributeKey, newValue, activeSubKey)
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CustomRangeControl);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js"
/*!****************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js ***!
  \****************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function SectionControlButton({
  label,
  options,
  inline = true,
  attributeKey,
  subKey
}) {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const handleChange = newValue => {
    if (subKey) {
      setAttributes({
        [attributeKey]: {
          ...attributes[attributeKey],
          [subKey]: newValue
        }
      });
    } else {
      setAttributes({
        [attributeKey]: newValue
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    className: `selector-control custom-selector ${inline ? "inline" : ""}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      className: "selector-label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
      options: options,
      onChange: value => handleChange(value),
      value: attributes[attributeKey][subKey]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SectionControlButton);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/NumberControl.js"
/*!*************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/SpacingControl/NumberControl.js ***!
  \*************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_IncreaseButton__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/IncreaseButton */ "./src/smart-list-block/assets/IncreaseButton.js");
/* harmony import */ var _assets_DecreaseButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/DecreaseButton */ "./src/smart-list-block/assets/DecreaseButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function NumberControl({
  value = 0,
  onChange = () => {},
  min,
  max,
  step = 1
}) {
  const handleChange = e => {
    const inputValue = e.target.value;

    // Allow empty input for better UX
    if (inputValue === "") {
      onChange(0);
      return;
    }
    let newValue = parseInt(inputValue, 10);

    // Handle Invalid value minimum value and maximum value
    if (isNaN(newValue)) {
      newValue = 0;
    }
    if (min !== undefined && newValue < min) {
      newValue = min;
    }
    if (max !== undefined && newValue > max) {
      newValue = max;
    }
    onChange(newValue);
  };
  const increment = () => {
    let newValue = value + step;
    if (max !== undefined && newValue > max) {
      newValue = max;
    }
    onChange(newValue);
  };
  const decrement = () => {
    let newValue = value - step;
    if (min !== undefined && newValue < min) {
      newValue = min;
    }
    onChange(newValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    className: "input-box",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
      className: "input-with-spinner",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("input", {
        type: "number",
        value: value,
        onChange: handleChange,
        min: min,
        max: max,
        step: step
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
        className: "spinner-control",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: increment,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_assets_IncreaseButton__WEBPACK_IMPORTED_MODULE_0__["default"], {})
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("button", {
          type: "button",
          onClick: decrement,
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_assets_DecreaseButton__WEBPACK_IMPORTED_MODULE_1__["default"], {})
        })]
      })]
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NumberControl);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/SpacingControl.js"
/*!**************************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/SpacingControl/SpacingControl.js ***!
  \**************************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _assets_Link__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../assets/Link */ "./src/smart-list-block/assets/Link.js");
/* harmony import */ var _assets_ResetIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/ResetIcon */ "./src/smart-list-block/assets/ResetIcon.js");
/* harmony import */ var _assets_Unlink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/Unlink */ "./src/smart-list-block/assets/Unlink.js");
/* harmony import */ var _ResponsibeDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../ResponsibeDropdown */ "./src/smart-list-block/components/ResponsibeDropdown.js");
/* harmony import */ var _NumberControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberControl */ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/NumberControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function SpacingControl({
  label,
  values = {
    desktop: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      linked: true
    },
    tablet: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      linked: true
    },
    mobile: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      linked: true
    }
  },
  onChange = () => {},
  deviceType = "desktop"
}) {
  const currentValues = values[deviceType] || {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    linked: true
  };
  const handleValueChange = (position, value) => {
    const updateDeviceValue = currentValues.linked ? {
      ...currentValues,
      top: value,
      right: value,
      bottom: value,
      left: value
    } : {
      ...currentValues,
      [position]: value
    };
    onChange({
      ...values,
      [deviceType]: updateDeviceValue
    });
  };
  const handleReset = () => {
    onChange({
      ...values,
      [deviceType]: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        linked: true
      }
    });
  };
  const handleLinkToggle = () => {
    onChange({
      ...values,
      [deviceType]: {
        ...currentValues,
        linked: !currentValues.linked
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
          className: "range-label",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
            children: label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
            className: "desktop",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ResponsibeDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          className: "range-measure",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_ResetIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {
              style: {
                cursor: "pointer"
              },
              onClick: handleReset
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
              className: "pixel",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("p", {
                children: "px"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
      className: "control-input-group",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentValues.top,
        step: 4,
        min: 0,
        onChange: val => {
          handleValueChange("top", val);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentValues.right,
        step: 4,
        onChange: val => {
          handleValueChange("right", val);
        },
        min: 0
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentValues.left,
        min: 0,
        step: 4,
        onChange: val => {
          handleValueChange("left", val);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
        value: currentValues.bottom,
        min: 0,
        step: 4,
        onChange: val => {
          handleValueChange("bottom", val);
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
          onClick: handleLinkToggle,
          className: `link-btn ${currentValues.linked ? "" : "is-unlinked "}`,
          children: currentValues.linked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_Link__WEBPACK_IMPORTED_MODULE_0__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_Unlink__WEBPACK_IMPORTED_MODULE_2__["default"], {})
        })
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SpacingControl);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Tabs/SingleTab.js"
/*!***********************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Tabs/SingleTab.js ***!
  \***********************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function SingleTab({
  tab,
  onHandleTab,
  isActive,
  variant,
  activeColor = "#fff",
  inactiveColor = "#757575"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    role: "button",
    className: `tab tab--${variant} ${isActive ? "active" : ""}`,
    onClick: () => onHandleTab(tab.name),
    children: [tab.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "tab-icon",
      style: {
        color: isActive ? activeColor : inactiveColor
      },
      children: tab.icon
    }), tab.title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "tab-title",
      children: tab.title
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SingleTab);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js"
/*!******************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js ***!
  \******************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _SingleTab__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SingleTab */ "./src/smart-list-block/components/InspectorControl/common/Tabs/SingleTab.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Tabs({
  tabItems,
  onHandleTab,
  selectedTab,
  variant = "underline",
  activeColor
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `tabs tabs--${variant}`,
    children: tabItems.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SingleTab__WEBPACK_IMPORTED_MODULE_0__["default"], {
      tab: tab,
      isActive: selectedTab === tab.name,
      onHandleTab: onHandleTab,
      variant: variant,
      activeColor: activeColor
    }, index))
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Tabs);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js"
/*!**********************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js ***!
  \**********************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ToggleControlButton({
  label,
  checked,
  onChange
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    className: "toggle-control custom-toggle",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
      className: "toggle-label",
      children: label
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ToggleControl, {
      checked: checked,
      onChange: onChange
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ToggleControlButton);

/***/ },

/***/ "./src/smart-list-block/components/InspectorControl/common/Typography/Typography.js"
/*!******************************************************************************************!*\
  !*** ./src/smart-list-block/components/InspectorControl/common/Typography/Typography.js ***!
  \******************************************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_Typo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/Typo */ "./src/smart-list-block/assets/Typo.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Selection_Selection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Selection/Selection */ "./src/smart-list-block/components/InspectorControl/common/Selection/Selection.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _Input_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Input/Input */ "./src/smart-list-block/components/InspectorControl/common/Input/Input.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Typography({
  label,
  onChange = () => {},
  values,
  attributeKey
}) {
  const [isOpen, setIsOpen] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleChange = (name, value) => {
    const newValue = {
      ...values,
      [name]: value
    };
    onChange(newValue);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "range-label",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
            children: label
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
          className: "range-measure",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: {
              cursor: "pointer"
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_assets_Typo__WEBPACK_IMPORTED_MODULE_1__["default"], {
              onClick: handleToggle,
              active: isOpen
            })
          })
        })]
      })
    }), isOpen && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Popover, {
      onClose: () => setIsOpen(false),
      placement: "left-start",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
        style: {
          padding: "20px",
          minWidth: "450px"
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h3", {
          style: {
            marginTop: 0,
            marginBottom: "16px"
          },
          children: [label, " Typography"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Selection_Selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Select Global Style",
          inline: false,
          options: _const__WEBPACK_IMPORTED_MODULE_4__.tags,
          attributeKey: attributeKey,
          subKey: "tags"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Selection_Selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Font Family",
          inline: false,
          options: _const__WEBPACK_IMPORTED_MODULE_4__.fontFamilyOptions,
          attributeKey: attributeKey,
          subKey: "family"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Selection_Selection__WEBPACK_IMPORTED_MODULE_3__["default"], {
          label: "Font Weight",
          inline: false,
          options: _const__WEBPACK_IMPORTED_MODULE_4__.fontWeight,
          attributeKey: attributeKey,
          subKey: "weight"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            display: "flex",
            gap: "5px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            value: values.fontSize,
            label: "Font Size",
            onChange: value => handleChange("fontSize", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            value: values.height,
            step: 0.1,
            label: "Height",
            onChange: value => handleChange("height", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Input_Input__WEBPACK_IMPORTED_MODULE_5__["default"], {
            value: values.spacing,
            label: "Spacing",
            onChange: value => handleChange("spacing", value)
          })]
        })]
      })
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Typography);

/***/ },

/***/ "./src/smart-list-block/components/ListOrientation.js"
/*!************************************************************!*\
  !*** ./src/smart-list-block/components/ListOrientation.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _InspectorControl_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./InspectorControl/common/Tabs/Tabs */ "./src/smart-list-block/components/InspectorControl/common/Tabs/Tabs.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _components_InspectorControl_common_Label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/InspectorControl/common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ListOrientation() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    listOrientation
  } = attributes;
  const selectedTab = listOrientation;
  const handleTab = tabName => {
    setAttributes({
      listOrientation: tabName
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_InspectorControl_common_Label__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "List Orientation"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("br", {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_InspectorControl_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
      tabItems: _const__WEBPACK_IMPORTED_MODULE_0__.orientationTabItems,
      onHandleTab: handleTab,
      selectedTab: selectedTab,
      variant: "only-text"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListOrientation);

/***/ },

/***/ "./src/smart-list-block/components/ListPreview.js"
/*!********************************************************!*\
  !*** ./src/smart-list-block/components/ListPreview.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function ListPreview({
  attributes
}) {
  const {
    listOrientation,
    alignment,
    spaceBetween,
    iconGap,
    divider,
    backgroundStyle,
    color: backgroundColor,
    border,
    padding,
    margin,
    radius,
    title,
    description,
    contentEffect,
    gapTitleToDescription,
    backgroundOverlay,
    iconEffect
  } = attributes;
  const ALLOWED_BLOCKS = ["create-block/smart-list-item"];
  const TEMPLATE = [["create-block/smart-list-item"], ["create-block/smart-list-item"], ["create-block/smart-list-item"]];
  const {
    width,
    style,
    color,
    show
  } = divider;
  const {
    width: borderWidth,
    style: borderStyle,
    color: borderColor,
    show: borderShow
  } = border;
  const {
    background,
    image,
    type,
    backgroundSize
  } = backgroundStyle;
  const orientationClass = `is-${listOrientation || "vertical"}`;
  const alignmentClass = `alignment-${alignment || "left"}`;
  const dividerClass = show ? "has-divider" : "";
  const borderClass = borderShow ? "has-border" : "";
  const hasHoverClass = contentEffect === "hover" ? "has-hover" : "has-normal";
  const hasIconHoverClass = iconEffect === "hover" ? "has-Icon-hover" : "has-Icon-normal";
  const device = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.useDeviceType)()?.toLowerCase() || "desktop";
  const getResponsiveValue = (obj, fallback = 0) => {
    var _ref, _obj$device;
    return (_ref = (_obj$device = obj?.[device]) !== null && _obj$device !== void 0 ? _obj$device : obj?.desktop) !== null && _ref !== void 0 ? _ref : fallback;
  };
  const getResponsiveObjectValue = (obj, key, fallback = 0) => {
    var _ref2, _obj$key$device;
    return (_ref2 = (_obj$key$device = obj?.[key]?.[device]) !== null && _obj$key$device !== void 0 ? _obj$key$device : obj?.[key]?.desktop) !== null && _ref2 !== void 0 ? _ref2 : fallback;
  };

  // NEW: Helper to get responsive spacing values
  const getResponsiveSpacing = (spacingObj, fallback = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }) => {
    if (spacingObj?.[device]) {
      return spacingObj[device];
    }
    if (spacingObj?.desktop) {
      return spacingObj.desktop;
    }
    return fallback;
  };
  const overlayOpacity = getResponsiveValue(backgroundOverlay?.opacity, 50);

  // Get responsive spacing values
  const responsivePadding = getResponsiveSpacing(padding);
  const responsiveMargin = getResponsiveSpacing(margin);
  const responsiveRadius = getResponsiveSpacing(radius);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    style: {
      "--marginTop": `${responsiveMargin.top}px`,
      "--marginRight": `${responsiveMargin.right}px`,
      "--marginBottom": `${responsiveMargin.bottom}px`,
      "--marginLeft": `${responsiveMargin.left}px`
    },
    class: "smart-list-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      className: `smart-list ${orientationClass} ${alignmentClass} ${dividerClass} 
				${borderClass} ${hasHoverClass} ${hasIconHoverClass}`,
      style: {
        "--spaceBetween": `${getResponsiveValue(spaceBetween)}px`,
        "--iconGap": `${getResponsiveValue(iconGap)}px`,
        "--dividerColor": color,
        "--dividerStyle": style,
        "--dividerWidth": `${getResponsiveObjectValue(divider, "width")}px`,
        "--borderColor": borderColor,
        "--borderStyle": borderStyle,
        "--borderWidth": `${getResponsiveObjectValue(border, "width")}px`,
        "--paddingTop": `${responsivePadding.top}px`,
        "--paddingRight": `${responsivePadding.right}px`,
        "--paddingBottom": `${responsivePadding.bottom}px`,
        "--paddingLeft": `${responsivePadding.left}px`,
        "--radiusTop": `${responsiveRadius.top}px`,
        "--radiusRight": `${responsiveRadius.right}px`,
        "--radiusBottom": `${responsiveRadius.bottom}px`,
        "--radiusLeft": `${responsiveRadius.left}px`,
        "--fontSize": `${title.fontSize}px`,
        "--weight": `${title.weight}`,
        "--font": `${title.family}`,
        "--spacing": `${title.spacing}px`,
        "--height": `${title.height}`,
        "--titleColor": `${title.titleColor}`,
        "--titleHoverColor": `${title.titleHoverColor}`,
        "--descriptionFontSize": `${description.fontSize}px`,
        "--descriptionWeight": `${description.weight}`,
        "--descriptionFont": `${description.family}`,
        "--descriptionSpacing": `${description.spacing}px`,
        "--descriptionHeight": `${description.height}`,
        "--descriptionColor": `${description.descriptionColor}`,
        "--descriptionHoverColor": `${description.descriptionHoverColor}`,
        "--gapBetweenTitleAndDescription": `${getResponsiveValue(gapTitleToDescription)}px`,
        "--backgroundColor": type === "solid" ? backgroundColor : "transparent",
        "--backgroundGradient": type === "gradient" ? background : "none",
        "--backgroundImage": type === "image" && image ? `url(${image})` : "none",
        "--overlayColor": type === "image" && backgroundOverlay?.enabled ? (0,_utils__WEBPACK_IMPORTED_MODULE_0__.hexToRgba)(backgroundOverlay.color || "#000", overlayOpacity) : "transparent",
        "--backgroundSize": type === "image" ? backgroundSize : "auto"
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks, {
        allowedBlocks: ALLOWED_BLOCKS,
        template: TEMPLATE,
        renderAppender: _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InnerBlocks.ButtonBlockAppender
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPreview);

/***/ },

/***/ "./src/smart-list-block/components/ResponsibeDropdown.js"
/*!***************************************************************!*\
  !*** ./src/smart-list-block/components/ResponsibeDropdown.js ***!
  \***************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/TelevisionIcon */ "./src/smart-list-block/assets/TelevisionIcon.js");
/* harmony import */ var _assets_TabIcon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/TabIcon */ "./src/smart-list-block/assets/TabIcon.js");
/* harmony import */ var _assets_MobileIcon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/MobileIcon */ "./src/smart-list-block/assets/MobileIcon.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__);








function DeviceDropdown() {
  const closeRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const timeoutRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  const deviceType = (0,_utils__WEBPACK_IMPORTED_MODULE_6__.useDeviceType)();
  const normalizedDeviceType = deviceType?.toLowerCase() || "desktop";
  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      closeRef.current?.();
    }, 300);
  };
  const changeDevice = device => {
    const canvas = document.getElementsByClassName("edit-site-visual-editor__editor-canvas");
    const store = canvas.length > 0 ? "core/edit-site" : "core/edit-post";
    (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_2__.dispatch)(store).__experimentalSetPreviewDeviceType(device);
  };
  const getCurrentIcon = () => {
    switch (normalizedDeviceType) {
      case "mobile":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_MobileIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {});
      case "tablet":
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_TabIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {});
      default:
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {});
    }
  };
  const getColor = device => normalizedDeviceType === device ? "#8e56e9ff" : "#8C8F94";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.Dropdown, {
    popoverProps: {
      placement: "bottom-center"
    },
    renderToggle: ({
      isOpen,
      onToggle
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
      className: "device-toggle",
      style: {
        cursor: "pointer"
      },
      onMouseEnter: () => {
        handleMouseEnter();
        if (!isOpen) onToggle();
      },
      onMouseLeave: handleMouseLeave,
      children: getCurrentIcon()
    }),
    renderContent: ({
      onClose
    }) => {
      closeRef.current = onClose;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsxs)("div", {
        className: "device-buttons",
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          onClick: () => {
            changeDevice("Desktop");
            onClose();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {
            color: getColor("desktop")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          onClick: () => {
            changeDevice("Tablet");
            onClose();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_TabIcon__WEBPACK_IMPORTED_MODULE_4__["default"], {
            color: getColor("tablet")
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)("div", {
          onClick: () => {
            changeDevice("Mobile");
            onClose();
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_7__.jsx)(_assets_MobileIcon__WEBPACK_IMPORTED_MODULE_5__["default"], {
            color: getColor("mobile")
          })
        })]
      });
    }
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DeviceDropdown);

/***/ },

/***/ "./src/smart-list-block/const/icons.js"
/*!*********************************************!*\
  !*** ./src/smart-list-block/const/icons.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   customIcons: () => (/* binding */ customIcons),
/* harmony export */   getIcon: () => (/* binding */ getIcon),
/* harmony export */   getIcons: () => (/* binding */ getIcons)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const customIcons = {
  Circle: {
    name: "circle",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M18.0996 11.7998C18.0995 8.32043 15.2792 5.5 11.7998 5.5C8.3205 5.50011 5.50011 8.3205 5.5 11.7998C5.5 15.2792 8.32043 18.0995 11.7998 18.0996V19.5996L11.3984 19.5898C7.41004 19.3876 4.21181 16.1896 4.00977 12.2012L4 11.7998C4.00011 7.49207 7.49207 4.00011 11.7998 4L12.2012 4.00977C16.3226 4.21855 19.5995 7.62655 19.5996 11.7998L19.5898 12.2012C19.381 16.3226 15.9731 19.5996 11.7998 19.5996V18.0996C15.2793 18.0996 18.0996 15.2793 18.0996 11.7998Z",
        fill: color
      })
    })
  },
  star: {
    name: "Star",
    component: ({
      size = 24,
      color = "currentColor"
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M13.4887 3.07487L14.8799 7.35743C15.089 8.00243 15.6909 8.43931 16.3687 8.43931H20.8716C22.3875 8.43931 23.0184 10.3799 21.7922 11.2706L18.149 13.9171C17.6005 14.3155 17.3709 15.0224 17.5809 15.6674L18.9721 19.9499C19.4409 21.3918 17.7899 22.5909 16.5637 21.7003L12.9205 19.0538C12.3721 18.6553 11.6286 18.6553 11.0802 19.0538L7.43699 21.7003C6.21074 22.5918 4.55987 21.3928 5.02859 19.9499L6.41985 15.6674C6.62891 15.0224 6.40016 14.3155 5.85172 13.9171L2.20756 11.2706C0.981304 10.379 1.6113 8.43931 3.12818 8.43931H7.63106C8.30886 8.43931 8.9098 8.00243 9.1198 7.35743L10.5111 3.07487C10.9798 1.633 13.02 1.633 13.4887 3.07487Z",
        fill: color
      })
    })
  },
  heart: {
    name: "Heart",
    component: ({
      size = 24,
      color = "currentColor"
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
      })
    })
  },
  circleFill: {
    name: "CircleFill",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M15.6 7.8C15.6 12.1079 12.1079 15.6 7.8 15.6C3.49211 15.6 0 12.1079 0 7.8C0 3.49211 3.49211 0 7.8 0C12.1079 0 15.6 3.49211 15.6 7.8Z",
        fill: color
      })
    })
  },
  square: {
    name: "Square",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 16 16",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M15.6 1.2V14.4C15.6 15.0628 15.0628 15.6 14.4 15.6H1.2C0.537192 15.6 0 15.0628 0 14.4V1.2C0 0.537192 0.537192 0 1.2 0H14.4C15.0628 0 15.6 0.537192 15.6 1.2Z",
        fill: color
      })
    })
  },
  triangle: {
    name: "Triangle",
    component: ({
      size = 24,
      color = "currentColor"
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: color,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("polygon", {
        points: "12 2 22 20 2 20 12 2"
      })
    })
  },
  check: {
    name: "Check",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 19 14",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M17.25 1.25L6.25 12.25L1.25 7.25",
        stroke: color,
        "stroke-width": "2.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })
    })
  },
  x: {
    name: "Close",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: strokeWidth,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "18",
        y1: "6",
        x2: "6",
        y2: "18"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("line", {
        x1: "6",
        y1: "6",
        x2: "18",
        y2: "18"
      })]
    })
  },
  arrow: {
    name: "Arrow",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M13.6162 5.36621C14.0737 4.90873 14.7971 4.88023 15.2881 5.28027L15.3838 5.36621L21.6338 11.6162C21.6751 11.6575 21.7118 11.7018 21.7461 11.7471C21.7596 11.7649 21.7736 11.7823 21.7861 11.8008L21.7939 11.8125C21.7989 11.8201 21.8028 11.8283 21.8076 11.8359C21.8439 11.8936 21.8757 11.9541 21.9023 12.0176C21.9114 12.0391 21.919 12.0611 21.9268 12.083C21.9332 12.1011 21.9397 12.1192 21.9453 12.1377C21.949 12.15 21.9518 12.1625 21.9551 12.1748C21.9628 12.2035 21.9709 12.2322 21.9766 12.2617C21.9998 12.3818 22.0054 12.5046 21.9932 12.626C21.9864 12.694 21.9724 12.7599 21.9551 12.8242C21.9518 12.8366 21.949 12.8491 21.9453 12.8613C21.9397 12.8798 21.9332 12.8979 21.9268 12.916C21.919 12.938 21.9113 12.9599 21.9023 12.9814C21.8758 13.045 21.8439 13.1054 21.8076 13.1631C21.8016 13.1727 21.7964 13.1829 21.79 13.1924C21.7763 13.213 21.761 13.2323 21.7461 13.252C21.7117 13.2974 21.6753 13.3423 21.6338 13.3838L15.3838 19.6338C14.8957 20.1219 14.1044 20.1219 13.6162 19.6338C13.1281 19.1456 13.1281 18.3544 13.6162 17.8662L17.7324 13.75H3.25C2.55966 13.75 2.00003 13.1903 2 12.5C2 11.8096 2.55964 11.25 3.25 11.25H17.7324L13.6162 7.13379L13.5303 7.03809C13.1302 6.54713 13.1587 5.82371 13.6162 5.36621Z",
        fill: color
      })
    })
  },
  npArrow: {
    name: "NpArrow",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 18 20",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M0 20L17.3688 10L0 0V20Z",
        fill: color
      })
    })
  },
  bell: {
    name: "Bell",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: color,
      strokeWidth: strokeWidth,
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M13.73 21a2 2 0 0 1-3.46 0"
      })]
    })
  },
  direction: {
    name: "Direction",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M10.0798 5.52002C8.55448 5.52002 7.51012 6.41628 6.71236 7.21502C6.23517 7.68657 5.81798 8.17034 5.27985 8.49753V7.92004C5.27985 7.66879 5.0511 7.44004 4.79985 7.44004H1.15473C0.918479 7.46254 0.718794 7.68285 0.71973 7.92004V16.56C0.71973 16.8113 0.948479 17.04 1.19973 17.04H4.79973C4.96473 17.04 5.12692 16.9491 5.21224 16.8075C6.27443 17.9822 7.71352 18.4801 9.11968 18.4801H12.9597C13.8822 18.4801 14.6397 17.7226 14.6397 16.8001C14.6397 16.5366 14.5619 16.2947 14.4522 16.0726C15.3494 16.0435 16.0797 15.3038 16.0797 14.4001C16.0797 14.1366 16.0019 13.8947 15.8922 13.6726C16.2672 13.6669 16.6656 13.6004 16.9947 13.3276C17.5197 12.9572 17.5197 11.7572 17.0697 11.2801H21.1197C22.3169 11.2707 23.2619 10.4588 23.2797 9.36008C23.2197 8.0954 22.1997 7.4504 21.1197 7.44008H15.7946C15.7421 6.94882 15.5658 6.47634 15.2021 6.13508C14.7774 5.73663 14.1624 5.52008 13.4395 5.52008L10.0798 5.52002ZM10.0798 6.48002H13.4398C13.9742 6.48002 14.3211 6.62533 14.5423 6.83253C14.7083 6.98816 14.7917 7.20192 14.8348 7.44002C14.3998 7.43721 14.1626 7.64252 14.1533 7.92002C14.1533 8.17408 14.3867 8.40376 14.6398 8.40002H21.1198C21.7967 8.41033 22.3133 8.77315 22.3198 9.36002C22.2898 10.0744 21.6758 10.3144 21.1198 10.32C19.1998 10.3172 17.0398 10.3172 15.3898 10.3425C15.2989 10.366 15.0842 10.4344 15.0073 10.695C14.9304 10.9557 15.0626 11.116 15.1198 11.1825C15.5998 11.5172 15.8858 11.4844 16.3198 11.7572C16.6686 12.2494 16.2317 12.7172 15.8398 12.72H14.3998C14.1504 12.7238 13.9264 12.9506 13.9264 13.2C13.9264 13.4494 14.1504 13.6763 14.3998 13.68C14.8067 13.68 15.1198 13.9931 15.1198 14.4C15.1198 14.8069 14.8067 15.12 14.3998 15.12H12.9598C12.7104 15.1238 12.4864 15.3506 12.4864 15.6C12.4864 15.8494 12.7104 16.0763 12.9598 16.08C13.3667 16.08 13.6798 16.3931 13.6798 16.8C13.6798 17.2069 13.3667 17.52 12.9598 17.52H9.11981C7.59169 17.52 6.16565 16.9135 5.27981 15.2175V9.4875C6.18449 9.22969 6.8042 8.49001 7.39481 7.8975C8.37733 7.12969 8.87968 6.47719 10.0798 6.48002ZM1.6798 8.40002H4.3198V16.08H1.6798V8.40002Z",
        fill: color
      })
    })
  },
  rightArrow: {
    name: "RightArrow",
    component: ({
      size = 24,
      color = "currentColor",
      strokeWidth = 2
    }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      width: size,
      height: size,
      viewBox: "0 0 9 15",
      fill: "none",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
        d: "M1.25 13.25L7.25 7.25L1.25 1.25",
        stroke: color,
        "stroke-width": "2.5",
        "stroke-linecap": "round",
        "stroke-linejoin": "round"
      })
    })
  }
};
const getIcons = () => {
  return Object.keys(customIcons).map(key => ({
    id: key,
    ...customIcons[key]
  }));
};
const getIcon = iconId => {
  return customIcons[iconId] || null;
};

/***/ },

/***/ "./src/smart-list-block/const/index.js"
/*!*********************************************!*\
  !*** ./src/smart-list-block/const/index.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   alignmentTabItems: () => (/* binding */ alignmentTabItems),
/* harmony export */   backGroundStyles: () => (/* binding */ backGroundStyles),
/* harmony export */   contentEffectItems: () => (/* binding */ contentEffectItems),
/* harmony export */   contentTabItems: () => (/* binding */ contentTabItems),
/* harmony export */   dividerStyle: () => (/* binding */ dividerStyle),
/* harmony export */   fontFamilyOptions: () => (/* binding */ fontFamilyOptions),
/* harmony export */   fontWeight: () => (/* binding */ fontWeight),
/* harmony export */   generalTabItems: () => (/* binding */ generalTabItems),
/* harmony export */   iconAlignmentTabItems: () => (/* binding */ iconAlignmentTabItems),
/* harmony export */   iconBackgroundTabsItems: () => (/* binding */ iconBackgroundTabsItems),
/* harmony export */   iconEffectTabItems: () => (/* binding */ iconEffectTabItems),
/* harmony export */   iconImageTabItems: () => (/* binding */ iconImageTabItems),
/* harmony export */   iconPosition: () => (/* binding */ iconPosition),
/* harmony export */   iconTabItems: () => (/* binding */ iconTabItems),
/* harmony export */   imageScales: () => (/* binding */ imageScales),
/* harmony export */   listItems: () => (/* binding */ listItems),
/* harmony export */   orientationTabItems: () => (/* binding */ orientationTabItems),
/* harmony export */   presetTabItems: () => (/* binding */ presetTabItems),
/* harmony export */   tags: () => (/* binding */ tags)
/* harmony export */ });
/* harmony import */ var _assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/PresetIcon */ "./src/smart-list-block/assets/PresetIcon.js");
/* harmony import */ var _assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/StylesIcon */ "./src/smart-list-block/assets/StylesIcon.js");
/* harmony import */ var _assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/NormalListIcon */ "./src/smart-list-block/assets/NormalListIcon.js");
/* harmony import */ var _assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/DescriptionListIcon */ "./src/smart-list-block/assets/DescriptionListIcon.js");
/* harmony import */ var _assets_RightAlign__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/RightAlign */ "./src/smart-list-block/assets/RightAlign.js");
/* harmony import */ var _assets_MiddleAlign__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/MiddleAlign */ "./src/smart-list-block/assets/MiddleAlign.js");
/* harmony import */ var _assets_LeftAlign__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/LeftAlign */ "./src/smart-list-block/assets/LeftAlign.js");
/* harmony import */ var _assets_Solid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/Solid */ "./src/smart-list-block/assets/Solid.js");
/* harmony import */ var _assets_Gradient__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../assets/Gradient */ "./src/smart-list-block/assets/Gradient.js");
/* harmony import */ var _assets_Image__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/Image */ "./src/smart-list-block/assets/Image.js");
/* harmony import */ var _assets_TopAlignment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/TopAlignment */ "./src/smart-list-block/assets/TopAlignment.js");
/* harmony import */ var _assets_MiddleAlignMent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/MiddleAlignMent */ "./src/smart-list-block/assets/MiddleAlignMent.js");
/* harmony import */ var _assets_BottomAlignment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../assets/BottomAlignment */ "./src/smart-list-block/assets/BottomAlignment.js");
/* harmony import */ var _assets_Circle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assets/Circle */ "./src/smart-list-block/assets/Circle.js");
/* harmony import */ var _assets_Square__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../assets/Square */ "./src/smart-list-block/assets/Square.js");
/* harmony import */ var _assets_Diamond__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../assets/Diamond */ "./src/smart-list-block/assets/Diamond.js");
/* harmony import */ var _assets_CircleCurve__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../assets/CircleCurve */ "./src/smart-list-block/assets/CircleCurve.js");
/* harmony import */ var _assets_Triangle__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../assets/Triangle */ "./src/smart-list-block/assets/Triangle.js");
/* harmony import */ var _assets_CircleSolid__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../assets/CircleSolid */ "./src/smart-list-block/assets/CircleSolid.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__);




















const generalTabItems = [{
  name: "presets",
  title: "Presets",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  name: "styles",
  title: "Style",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}];
const contentTabItems = [{
  name: "general",
  title: "General",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  name: "styles",
  title: "Style",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}];
const iconImageTabItems = [{
  name: "general",
  title: "General",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  name: "styles",
  title: "Style",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}];
const presetTabItems = [{
  name: "list",
  title: "List",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "descriptionList",
  title: "Description List",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const orientationTabItems = [{
  name: "horizontal",
  title: "Horizontal",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "vertical",
  title: "Vertical",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const iconTabItems = [{
  name: "iconSet",
  title: "Icon Set",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "custom",
  title: "Custom",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const iconEffectTabItems = [{
  name: "normal",
  title: "Normal",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "hover",
  title: "Hover",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const iconBackgroundTabsItems = [{
  name: "square",
  title: "Square",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Square__WEBPACK_IMPORTED_MODULE_14__["default"], {})
}, {
  name: "circle",
  title: "Circle",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_CircleSolid__WEBPACK_IMPORTED_MODULE_18__["default"], {})
}, {
  name: "diamond",
  title: "Diamond",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Diamond__WEBPACK_IMPORTED_MODULE_15__["default"], {})
}, {
  name: "triangle",
  title: "Triangle",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Triangle__WEBPACK_IMPORTED_MODULE_17__["default"], {})
}, {
  name: "circleCurve",
  title: "CircleCurve",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_CircleCurve__WEBPACK_IMPORTED_MODULE_16__["default"], {})
}];
const alignmentTabItems = [{
  name: "left",
  title: "Left",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_LeftAlign__WEBPACK_IMPORTED_MODULE_6__["default"], {})
}, {
  name: "center",
  title: "Center",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_MiddleAlign__WEBPACK_IMPORTED_MODULE_5__["default"], {})
}, {
  name: "right",
  title: "Right",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_RightAlign__WEBPACK_IMPORTED_MODULE_4__["default"], {})
}];
const iconAlignmentTabItems = [{
  name: "top",
  title: "Top",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_TopAlignment__WEBPACK_IMPORTED_MODULE_10__["default"], {})
}, {
  name: "center",
  title: "Center",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_MiddleAlignMent__WEBPACK_IMPORTED_MODULE_11__["default"], {})
}, {
  name: "bottom",
  title: "Bottom",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_BottomAlignment__WEBPACK_IMPORTED_MODULE_12__["default"], {})
}];
const listItems = [{
  icon: "🎯",
  title: "Bangladesh",
  description: "Beautiful Bangladesh"
}, {
  icon: "✨",
  title: "Bangladesh",
  description: "Beautiful Bangladesh"
}, {
  icon: "🚀",
  title: "Bangladesh",
  description: "Beautiful Bangladesh"
}];
const dividerStyle = [{
  label: "Solid",
  value: "solid"
}, {
  label: "Dotted",
  value: "dotted"
}, {
  label: "Dashed",
  value: "dashed"
}, {
  label: "Double",
  value: "double"
}];
const iconPosition = [{
  label: "Before",
  value: "before"
}, {
  label: "After",
  value: "after"
}, {
  label: "Top",
  value: "top"
}];
const backGroundStyles = [{
  name: "solid",
  title: "solid",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Solid__WEBPACK_IMPORTED_MODULE_7__["default"], {})
}, {
  name: "gradient",
  title: "gradient",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Gradient__WEBPACK_IMPORTED_MODULE_8__["default"], {})
}, {
  name: "image",
  title: "image",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {})
}];
const imageScales = [{
  name: "auto",
  title: "None",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Solid__WEBPACK_IMPORTED_MODULE_7__["default"], {})
}, {
  name: "cover",
  title: "Cover",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Gradient__WEBPACK_IMPORTED_MODULE_8__["default"], {})
}, {
  name: "contain",
  title: "Contain",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {})
}];
const tags = [{
  label: "Default",
  value: "p"
}, {
  label: "Heading h1",
  value: "h1"
}, {
  label: "Heading h2",
  value: "h2"
}, {
  label: "Heading h3",
  value: "h3"
}, {
  label: "Body",
  value: "body"
}];
const fontFamilyOptions = [{
  label: "Roboto",
  value: "Roboto"
}, {
  label: "Tahoma",
  value: "Tahoma"
}, {
  label: "Arial",
  value: "Arial"
}, {
  label: "Georgia",
  value: "Georgia"
}, {
  label: "Times New Roman",
  value: "Times New Roman"
}, {
  label: "Courier New",
  value: "Courier New"
}, {
  label: "Verdana",
  value: "Verdana"
}];
const fontWeight = [{
  label: "200",
  value: "200"
}, {
  label: "400",
  value: "400"
}, {
  label: "600",
  value: "600"
}, {
  label: "800",
  value: "800"
}];
const contentEffectItems = [{
  name: "normal",
  title: "Normal",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "hover",
  title: "Hover",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_19__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];

/***/ },

/***/ "./src/smart-list-block/context/index.js"
/*!***********************************************!*\
  !*** ./src/smart-list-block/context/index.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BlockContext: () => (/* binding */ BlockContext)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);

const BlockContext = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createContext)();


/***/ },

/***/ "./src/smart-list-block/edit.js"
/*!**************************************!*\
  !*** ./src/smart-list-block/edit.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor.scss */ "./src/smart-list-block/editor.scss");
/* harmony import */ var _components_InspectorControl_GeneralControlPanel_GeneralControlPanel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/InspectorControl/GeneralControlPanel/GeneralControlPanel */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralControlPanel.js");
/* harmony import */ var _components_ListPreview__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ListPreview */ "./src/smart-list-block/components/ListPreview.js");
/* harmony import */ var _Provider_BlockProvider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Provider/BlockProvider */ "./src/smart-list-block/Provider/BlockProvider.js");
/* harmony import */ var _components_InspectorControl_ContentControlPanel_ContentControlPanel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/InspectorControl/ContentControlPanel/ContentControlPanel */ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/ContentControlPanel.js");
/* harmony import */ var _components_InspectorControl_IconControlPanel_IconControlPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/InspectorControl/IconControlPanel/IconControlPanel */ "./src/smart-list-block/components/InspectorControl/IconControlPanel/IconControlPanel.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__);










function Edit({
  attributes,
  setAttributes
}) {
  const {
    previewWidth
  } = attributes;
  (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(() => {
    const root = document.querySelector(".is-root-container");
    if (!root) return;
    root.classList.remove("is-mobile-preview", "is-tablet-preview");
    if (attributes.device === "mobile") {
      root.classList.add("is-mobile-preview");
    } else if (attributes.device === "tablet") {
      root.classList.add("is-tablet-preview");
    }
  }, [attributes.device]);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      maxWidth: previewWidth,
      margin: "0 auto"
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_Provider_BlockProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InspectorControl_GeneralControlPanel_GeneralControlPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InspectorControl_IconControlPanel_IconControlPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_InspectorControl_ContentControlPanel_ContentControlPanel__WEBPACK_IMPORTED_MODULE_6__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_ListPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {
        attributes: attributes
      })
    })]
  });
}

/***/ },

/***/ "./src/smart-list-block/editor.scss"
/*!******************************************!*\
  !*** ./src/smart-list-block/editor.scss ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/smart-list-block/hooks/useBlockContext.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/hooks/useBlockContext.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./src/smart-list-block/context/index.js");


const useBlockContext = () => {
  const context = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.BlockContext);
  if (!context) {
    throw new Error("useBlockContext must be used within a BlockProvider");
  }
  return context;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useBlockContext);

/***/ },

/***/ "./src/smart-list-block/index.js"
/*!***************************************!*\
  !*** ./src/smart-list-block/index.js ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/smart-list-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/smart-list-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/smart-list-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/smart-list-block/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/smart-list-block/save.js"
/*!**************************************!*\
  !*** ./src/smart-list-block/save.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function save({
  attributes
}) {
  var _margin$desktop$top, _margin$desktop$right, _margin$desktop$botto, _margin$desktop$left, _ref, _margin$tablet$top, _ref2, _margin$tablet$right, _ref3, _margin$tablet$bottom, _ref4, _margin$tablet$left, _ref5, _ref6, _margin$mobile$top, _ref7, _ref8, _margin$mobile$right, _ref9, _ref0, _margin$mobile$bottom, _ref1, _ref10, _margin$mobile$left, _radius$desktop$top, _radius$desktop$right, _radius$desktop$botto, _radius$desktop$left, _radius$tablet$top, _radius$tablet$right, _radius$tablet$bottom, _radius$tablet$left, _radius$mobile$top, _radius$mobile$right, _radius$mobile$bottom, _radius$mobile$left, _backgroundOverlay$op, _backgroundOverlay$op2, _backgroundOverlay$op3;
  const {
    listOrientation,
    alignment,
    presetsType,
    spaceBetween,
    iconGap,
    divider,
    backgroundStyle,
    color: backgroundColor,
    border,
    padding,
    margin,
    radius,
    title,
    description,
    contentEffect,
    gapTitleToDescription,
    icon,
    iconStyle,
    iconBorderStyle,
    paddingIcon,
    radiusIcon,
    backgroundOverlay,
    iconEffect
  } = attributes;
  const {
    width,
    style,
    color,
    show
  } = divider;
  const {
    width: borderWidth,
    style: borderStyle,
    color: borderColor,
    show: borderShow
  } = border;
  const {
    background,
    image,
    type,
    backgroundSize
  } = backgroundStyle;
  const orientationClass = `is-${listOrientation || "vertical"}`;
  const alignmentClass = `alignment-${alignment || "left"}`;
  const dividerClass = show ? "has-divider" : "";
  const borderClass = borderShow ? "has-border" : "";
  const hasHoverClass = contentEffect === "hover" ? "has-hover" : "has-normal";
  const hasIconHoverClass = iconEffect === "hover" ? "has-Icon-hover" : "has-Icon-normal";
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "smart-list-wrapper",
    style: {
      /* Desktop */
      "--marginTop-desktop": `${(_margin$desktop$top = margin?.desktop?.top) !== null && _margin$desktop$top !== void 0 ? _margin$desktop$top : 0}px`,
      "--marginRight-desktop": `${(_margin$desktop$right = margin?.desktop?.right) !== null && _margin$desktop$right !== void 0 ? _margin$desktop$right : 0}px`,
      "--marginBottom-desktop": `${(_margin$desktop$botto = margin?.desktop?.bottom) !== null && _margin$desktop$botto !== void 0 ? _margin$desktop$botto : 0}px`,
      "--marginLeft-desktop": `${(_margin$desktop$left = margin?.desktop?.left) !== null && _margin$desktop$left !== void 0 ? _margin$desktop$left : 0}px`,
      /* Tablet (fallback to desktop) */
      "--marginTop-tablet": `${(_ref = (_margin$tablet$top = margin?.tablet?.top) !== null && _margin$tablet$top !== void 0 ? _margin$tablet$top : margin?.desktop?.top) !== null && _ref !== void 0 ? _ref : 0}px`,
      "--marginRight-tablet": `${(_ref2 = (_margin$tablet$right = margin?.tablet?.right) !== null && _margin$tablet$right !== void 0 ? _margin$tablet$right : margin?.desktop?.right) !== null && _ref2 !== void 0 ? _ref2 : 0}px`,
      "--marginBottom-tablet": `${(_ref3 = (_margin$tablet$bottom = margin?.tablet?.bottom) !== null && _margin$tablet$bottom !== void 0 ? _margin$tablet$bottom : margin?.desktop?.bottom) !== null && _ref3 !== void 0 ? _ref3 : 0}px`,
      "--marginLeft-tablet": `${(_ref4 = (_margin$tablet$left = margin?.tablet?.left) !== null && _margin$tablet$left !== void 0 ? _margin$tablet$left : margin?.desktop?.left) !== null && _ref4 !== void 0 ? _ref4 : 0}px`,
      /* Mobile (fallback to tablet → desktop) */
      "--marginTop-mobile": `${(_ref5 = (_ref6 = (_margin$mobile$top = margin?.mobile?.top) !== null && _margin$mobile$top !== void 0 ? _margin$mobile$top : margin?.tablet?.top) !== null && _ref6 !== void 0 ? _ref6 : margin?.desktop?.top) !== null && _ref5 !== void 0 ? _ref5 : 0}px`,
      "--marginRight-mobile": `${(_ref7 = (_ref8 = (_margin$mobile$right = margin?.mobile?.right) !== null && _margin$mobile$right !== void 0 ? _margin$mobile$right : margin?.tablet?.right) !== null && _ref8 !== void 0 ? _ref8 : margin?.desktop?.right) !== null && _ref7 !== void 0 ? _ref7 : 0}px`,
      "--marginBottom-mobile": `${(_ref9 = (_ref0 = (_margin$mobile$bottom = margin?.mobile?.bottom) !== null && _margin$mobile$bottom !== void 0 ? _margin$mobile$bottom : margin?.tablet?.bottom) !== null && _ref0 !== void 0 ? _ref0 : margin?.desktop?.bottom) !== null && _ref9 !== void 0 ? _ref9 : 0}px`,
      "--marginLeft-mobile": `${(_ref1 = (_ref10 = (_margin$mobile$left = margin?.mobile?.left) !== null && _margin$mobile$left !== void 0 ? _margin$mobile$left : margin?.tablet?.left) !== null && _ref10 !== void 0 ? _ref10 : margin?.desktop?.left) !== null && _ref1 !== void 0 ? _ref1 : 0}px`
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("ul", {
      className: `smart-list ${orientationClass} ${alignmentClass} ${dividerClass} ${borderClass} ${hasHoverClass} ${hasIconHoverClass}`,
      style: {
        "--spaceBetween": `${spaceBetween.desktop}px`,
        "--spaceBetweenTablet": `${spaceBetween.tablet}px`,
        "--spaceBetweenMobile": `${spaceBetween.mobile}px`,
        "--iconGap": `${iconGap.desktop}px`,
        "--iconGapTablet": `${iconGap.tablet}px`,
        "--iconGapMobile": `${iconGap.mobile}px`,
        "--dividerColor": color,
        "--dividerStyle": style,
        "--dividerWidth": `${width.desktop}px`,
        "--dividerWidthTablet": `${width.tablet}px`,
        "--dividerWidthMobile": `${width.mobile}px`,
        "--borderColor": borderColor,
        "--borderStyle": borderStyle,
        "--borderWidth": `${borderWidth.desktop}px`,
        "--borderWidthTablet": `${borderWidth.tablet}px`,
        "--borderWidthMobile": `${borderWidth.mobile}px`,
        "--paddingTop": `${padding.desktop.top}px`,
        "--paddingRight": `${padding.desktop.right}px`,
        "--paddingBottom": `${padding.desktop.bottom}px`,
        "--paddingLeft": `${padding.desktop.left}px`,
        "--paddingTopTablet": `${padding.tablet.top}px`,
        "--paddingRightTablet": `${padding.tablet.right}px`,
        "--paddingBottomTablet": `${padding.tablet.bottom}px`,
        "--paddingLeftTablet": `${padding.tablet.left}px`,
        "--paddingTopMobile": `${padding.mobile.top}px`,
        "--paddingRightMobile": `${padding.mobile.right}px`,
        "--paddingBottomMobile": `${padding.mobile.bottom}px`,
        "--paddingLeftMobile": `${padding.mobile.left}px`,
        "--radiusTop": `${(_radius$desktop$top = radius?.desktop?.top) !== null && _radius$desktop$top !== void 0 ? _radius$desktop$top : 0}px`,
        "--radiusRight": `${(_radius$desktop$right = radius?.desktop?.right) !== null && _radius$desktop$right !== void 0 ? _radius$desktop$right : 0}px`,
        "--radiusBottom": `${(_radius$desktop$botto = radius?.desktop?.bottom) !== null && _radius$desktop$botto !== void 0 ? _radius$desktop$botto : 0}px`,
        "--radiusLeft": `${(_radius$desktop$left = radius?.desktop?.left) !== null && _radius$desktop$left !== void 0 ? _radius$desktop$left : 0}px`,
        "--radiusTopTablet": `${(_radius$tablet$top = radius?.tablet?.top) !== null && _radius$tablet$top !== void 0 ? _radius$tablet$top : 0}px`,
        "--radiusRightTablet": `${(_radius$tablet$right = radius?.tablet?.right) !== null && _radius$tablet$right !== void 0 ? _radius$tablet$right : 0}px`,
        "--radiusBottomTablet": `${(_radius$tablet$bottom = radius?.tablet?.bottom) !== null && _radius$tablet$bottom !== void 0 ? _radius$tablet$bottom : 0}px`,
        "--radiusLeftTablet": `${(_radius$tablet$left = radius?.tablet?.left) !== null && _radius$tablet$left !== void 0 ? _radius$tablet$left : 0}px`,
        "--radiusTopMobile": `${(_radius$mobile$top = radius?.mobile?.top) !== null && _radius$mobile$top !== void 0 ? _radius$mobile$top : 0}px`,
        "--radiusRightMobile": `${(_radius$mobile$right = radius?.mobile?.right) !== null && _radius$mobile$right !== void 0 ? _radius$mobile$right : 0}px`,
        "--radiusBottomMobile": `${(_radius$mobile$bottom = radius?.mobile?.bottom) !== null && _radius$mobile$bottom !== void 0 ? _radius$mobile$bottom : 0}px`,
        "--radiusLeftMobile": `${(_radius$mobile$left = radius?.mobile?.left) !== null && _radius$mobile$left !== void 0 ? _radius$mobile$left : 0}px`,
        "--gapBetweenTitleAndDescription": `${gapTitleToDescription.desktop}px`,
        "--gapBetweenTitleAndDescriptionTablet": `${gapTitleToDescription.tablet}px`,
        "--gapBetweenTitleAndDescriptionMobile": `${gapTitleToDescription.mobile}px`,
        "--backgroundColor": type === "solid" ? backgroundColor : "transparent",
        "--backgroundGradient": type === "gradient" ? background : "none",
        "--backgroundImage": type === "image" && image ? `url(${image})` : "none",
        "--overlayColor": type === "image" && backgroundOverlay?.enabled ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hexToRgba)(backgroundOverlay.color || "#000", (_backgroundOverlay$op = backgroundOverlay.opacity?.desktop) !== null && _backgroundOverlay$op !== void 0 ? _backgroundOverlay$op : 50) : "transparent",
        "--overlayColorTablet": type === "image" && backgroundOverlay?.enabled ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hexToRgba)(backgroundOverlay.color || "#000", (_backgroundOverlay$op2 = backgroundOverlay.opacity?.tablet) !== null && _backgroundOverlay$op2 !== void 0 ? _backgroundOverlay$op2 : 50) : "transparent",
        "--backgroundSize": type === "image" ? backgroundSize : "auto",
        "--overlayColorMobile": type === "image" && backgroundOverlay?.enabled ? (0,_utils__WEBPACK_IMPORTED_MODULE_1__.hexToRgba)(backgroundOverlay.color || "#000", (_backgroundOverlay$op3 = backgroundOverlay.opacity?.mobile) !== null && _backgroundOverlay$op3 !== void 0 ? _backgroundOverlay$op3 : 50) : "transparent",
        "--showIcon": icon.show ? "flex" : "none",
        "--iconType": icon.type || "iconSet",
        "--iconSource": icon.type === "image" ? icon.imageSource : icon.iconSourceId,
        "--iconWidth": `${icon.width?.desktop || 24}px`,
        "--iconWidthTablet": `${icon.width?.tablet || 24}px`,
        "--iconWidthMobile": `${icon.width?.mobile || 24}px`,
        "--iconHeight": `${icon.height?.desktop || 24}px`,
        "--iconHeightTablet": `${icon.height?.tablet || 24}px`,
        "--iconHeightMobile": `${icon.height?.mobile || 24}px`,
        "--iconSize": `${icon.size?.desktop || 24}px`,
        "--iconSizeTablet": `${icon.size?.tablet || 24}px`,
        "--iconSizeMobile": `${icon.size?.mobile || 24}px`,
        "--iconBgColor": iconStyle.iconBgColor || "transparent",
        "--iconHoverBgColor": iconStyle.iconHoverBgColor || "transparent",
        "--iconColor": iconStyle.iconColor || "#757575",
        "--iconHoverColor": iconStyle.iconHoverColor || "#757575",
        "--showIconStyle": iconStyle.show ? "block" : "none",
        "--iconPaddingTop": `${paddingIcon.top}px`,
        "--iconPaddingRight": `${paddingIcon.right}px`,
        "--iconPaddingBottom": `${paddingIcon.bottom}px`,
        "--iconPaddingLeft": `${paddingIcon.left}px`,
        "--iconRadiusTop": `${radiusIcon.top}px`,
        "--iconRadiusRight": `${radiusIcon.right}px`,
        "--iconRadiusBottom": `${radiusIcon.bottom}px`,
        "--iconRadiusLeft": `${radiusIcon.left}px`,
        "--titleShow": title.show ? "block" : "none",
        "--titleFamily": title.family,
        "--titleFontSize": `${title.fontSize}px`,
        "--titleWeight": title.weight,
        "--titleHeight": title.height,
        "--titleSpacing": `${title.spacing}px`,
        "--titleColor": title.titleColor,
        "--titleHoverColor": title.titleHoverColor,
        "--descriptionShow": description.show ? "block" : "none",
        "--descriptionFamily": description.family,
        "--descriptionFontSize": `${description.fontSize}px`,
        "--descriptionWeight": description.weight,
        "--descriptionHeight": description.height,
        "--descriptionSpacing": `${description.spacing}px`,
        "--descriptionColor": description.descriptionColor,
        "--descriptionHoverColor": description.descriptionHoverColor
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InnerBlocks.Content, {})
    })
  });
}

/***/ },

/***/ "./src/smart-list-block/style.scss"
/*!*****************************************!*\
  !*** ./src/smart-list-block/style.scss ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ },

/***/ "./src/smart-list-block/utils/index.js"
/*!*********************************************!*\
  !*** ./src/smart-list-block/utils/index.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBackgroundValue: () => (/* binding */ getBackgroundValue),
/* harmony export */   getResponsiveObjectValue: () => (/* binding */ getResponsiveObjectValue),
/* harmony export */   getResponsiveValue: () => (/* binding */ getResponsiveValue),
/* harmony export */   hexToRgba: () => (/* binding */ hexToRgba),
/* harmony export */   useDeviceType: () => (/* binding */ useDeviceType)
/* harmony export */ });
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_0__);

const getBackgroundValue = (type, background, image) => {
  switch (type) {
    case "gradient":
      return background || "none";
    case "image":
      return image ? `url(${image})` : "";
    case "solid":
    default:
      return "none";
  }
};
const hexToRgba = (hex, opacity) => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g} , ${b} , ${opacity / 100})`;
};
const useDeviceType = () => {
  const {
    deviceType
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_0__.useSelect)(select => {
    const coreEditor = select("core/editor");
    if (!coreEditor?.getDeviceType) {
      return {
        deviceType: "Desktop"
      };
    }
    return {
      deviceType: coreEditor.getDeviceType()
    };
  }, []);
  return deviceType || "Desktop";
};
const getResponsiveValue = (obj, fallback = 0) => {
  var _ref, _obj$device;
  return (_ref = (_obj$device = obj?.[device]) !== null && _obj$device !== void 0 ? _obj$device : obj?.desktop) !== null && _ref !== void 0 ? _ref : fallback;
};
const getResponsiveObjectValue = (obj, key, fallback = 0) => {
  var _ref2, _obj$key$device;
  return (_ref2 = (_obj$key$device = obj?.[key]?.[device]) !== null && _obj$key$device !== void 0 ? _obj$key$device : obj?.[key]?.desktop) !== null && _ref2 !== void 0 ? _ref2 : fallback;
};

/***/ },

/***/ "@wordpress/block-editor"
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
(module) {

module.exports = window["wp"]["blockEditor"];

/***/ },

/***/ "@wordpress/blocks"
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
(module) {

module.exports = window["wp"]["blocks"];

/***/ },

/***/ "@wordpress/components"
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
(module) {

module.exports = window["wp"]["components"];

/***/ },

/***/ "@wordpress/data"
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["data"];

/***/ },

/***/ "@wordpress/element"
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
(module) {

module.exports = window["wp"]["element"];

/***/ },

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

/***/ },

/***/ "react"
/*!************************!*\
  !*** external "React" ***!
  \************************/
(module) {

module.exports = window["React"];

/***/ },

/***/ "react/jsx-runtime"
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
(module) {

module.exports = window["ReactJSXRuntime"];

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"smart-list-block/index": 0,
/******/ 			"smart-list-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunksmart_list_block"] = globalThis["webpackChunksmart_list_block"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["smart-list-block/style-index"], () => (__webpack_require__("./src/smart-list-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map