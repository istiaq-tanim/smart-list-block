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

/***/ "./src/smart-list-block/assets/ListClickIcon.js"
/*!******************************************************!*\
  !*** ./src/smart-list-block/assets/ListClickIcon.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function ListClickIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("svg", {
    width: "24",
    height: "22",
    viewBox: "0 0 24 22",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z",
      fill: "#3A292C"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M15.2899 9.29L10.9999 13.58L8.70995 11.29C8.31995 10.9 7.68995 10.9 7.29995 11.29C6.90995 11.68 6.90995 12.31 7.29995 12.7L10.2999 15.7C10.4999 15.9 10.7499 15.99 11.0099 15.99C11.2699 15.99 11.5199 15.89 11.7199 15.7L16.7199 10.7C17.1099 10.31 17.1099 9.68 16.7199 9.29C16.3299 8.9 15.6999 8.9 15.3099 9.29H15.2899Z",
      fill: "#3A292C"
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListClickIcon);

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

function TelevisionIcon() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    width: "14",
    height: "12",
    viewBox: "0 0 14 12",
    fill: "none",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("path", {
      d: "M12.5714 0H1.14286C0.511905 0 0 0.503906 0 1.125V8.625C0 9.24609 0.511905 9.75 1.14286 9.75H5.71428L5.33333 10.875H3.61905C3.30238 10.875 3.04762 11.1258 3.04762 11.4375C3.04762 11.7492 3.30238 12 3.61905 12H10.0952C10.4119 12 10.6667 11.7492 10.6667 11.4375C10.6667 11.1258 10.4119 10.875 10.0952 10.875H8.38095L8.00001 9.75H12.5714C13.2024 9.75 13.7143 9.24609 13.7143 8.625V1.125C13.7143 0.503906 13.2024 0 12.5714 0ZM12.1905 8.25H1.52381V1.5H12.1905V8.25Z",
      fill: "#8C8F94"
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TelevisionIcon);

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

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/smart-list-block","version":"1.0.0","title":"Smart List Block","category":"smart-list","icon":{"src":"list-view","foreground":"#641DD7"},"description":"Smart List is block to show list","example":{},"supports":{"html":false},"attributes":{"presetsType":{"type":"string","default":"list"},"listOrientation":{"type":"string","default":"vertical"},"alignment":{"type":"string","default":"left"},"previewWidth":{"type":"string","default":"100%"},"spaceBetween":{"type":"number","default":24},"iconGap":{"type":"number","default":12},"divider":{"type":"object","default":{"show":false,"width":1,"style":"solid","color":"#f05e31"}},"border":{"type":"object","default":{"show":false,"width":1,"style":"solid","color":"#f05e31"}},"showConnectionLine":{"type":"boolean","default":false},"backgroundStyle":{"type":"object","default":{"type":"solid","background":"","image":"","backgroundSize":"auto","backgroundOverlay":{"enabled":false,"color":"#f05e31","opacity":50}}},"color":{"type":"string","default":"#000"},"padding":{"type":"object","default":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}},"margin":{"type":"object","default":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}},"radius":{"type":"object","default":{"top":0,"right":0,"bottom":0,"left":0,"linked":true}},"title":{"type":"boolean","default":true},"description":{"type":"boolean","default":false}},"textdomain":"smart-list-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js"}');

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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);



function General() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_0__["default"])();
  const {
    title,
    description
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Title",
      checked: title,
      onChange: value => setAttributes({
        title: value
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Description",
      checked: description,
      onChange: value => setAttributes({
        description: value
      })
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
/* harmony import */ var _common_Typography_Typography__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/Typography/Typography */ "./src/smart-list-block/components/InspectorControl/common/Typography/Typography.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function Style() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_common_Typography_Typography__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: "Title Typography"
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
/* harmony import */ var _common_Label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../common/Label */ "./src/smart-list-block/components/InspectorControl/common/Label/index.js");
/* harmony import */ var _common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/RangeControl/CustomRangeControl */ "./src/smart-list-block/components/InspectorControl/common/RangeControl/CustomRangeControl.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





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
    opacity: 50
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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Overlay",
      checked: enabled,
      onChange: handleToggle
    }), enabled && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_0__["default"], {
          label: "Overlay Color",
          value: color,
          onChange: handleColorChange
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
          label: "opacity",
          attributeKey: "backgroundStyle",
          max: 100,
          defaultValue: 50,
          subKey: "backgroundOverlay",
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
    backgroundStyle
  } = attributes;
  const selectedTab = backgroundStyle.type || "solid";
  const {
    backgroundOverlay
  } = backgroundStyle;
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
      backgroundStyle: {
        ...backgroundStyle,
        backgroundOverlay: value
      }
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
      subKey: "width"
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
      variant: "icon"
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
/* harmony import */ var _common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/CustomColorPicker/CustomColorPicker */ "./src/smart-list-block/components/InspectorControl/common/CustomColorPicker/CustomColorPicker.js");
/* harmony import */ var _common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/SpacingControl/SpacingControl */ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/SpacingControl.js");
/* harmony import */ var _common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/ToggleButton/ToggleButton */ "./src/smart-list-block/components/InspectorControl/common/ToggleButton/ToggleButton.js");
/* harmony import */ var _GeneralStyle_BackgroundStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GeneralStyle/BackgroundStyle */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/GeneralStyle/BackgroundStyle.js");
/* harmony import */ var _Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Styles/BorderSettings/BorderSettings */ "./src/smart-list-block/components/InspectorControl/GeneralControlPanel/GeneralPanelItems/Styles/BorderSettings/BorderSettings.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_GeneralStyle_BackgroundStyle__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Background Style"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
      label: "Color",
      onChange: handleChange,
      value: attributes.color
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_ToggleButton_ToggleButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Border",
      checked: border.show,
      onChange: value => setAttributes({
        border: {
          ...border,
          show: value
        }
      })
    }), border.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Styles_BorderSettings_BorderSettings__WEBPACK_IMPORTED_MODULE_5__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      values: attributes.radius,
      label: "Border Radius",
      onChange: values => setAttributes({
        radius: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      values: attributes.padding,
      label: "Padding",
      onChange: values => setAttributes({
        padding: values
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_common_SpacingControl_SpacingControl__WEBPACK_IMPORTED_MODULE_2__["default"], {
      values: attributes.margin,
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






function BorderSetting() {
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_1__["default"])();
  const {
    border
  } = attributes;
  const handleBorderColor = value => {
    setAttributes({
      border: {
        ...border,
        color: value
      }
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_Selection_Selection__WEBPACK_IMPORTED_MODULE_4__["default"], {
      label: "Border Style",
      options: _const__WEBPACK_IMPORTED_MODULE_0__.dividerStyle,
      attributeKey: "border",
      subKey: "style"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_RangeControl_CustomRangeControl__WEBPACK_IMPORTED_MODULE_3__["default"], {
      label: "Border Width",
      attributeKey: "border",
      min: 0,
      max: 10,
      defaultValue: 1,
      subKey: "width"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_common_CustomColorPicker_CustomColorPicker__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: "Border Color",
      value: border.color,
      onChange: handleBorderColor
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BorderSetting);

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
      position: "middle right",
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
/* harmony import */ var _assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../assets/TelevisionIcon */ "./src/smart-list-block/assets/TelevisionIcon.js");
/* harmony import */ var _assets_ResetIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/ResetIcon */ "./src/smart-list-block/assets/ResetIcon.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function CustomRangeControl({
  label = "Space Between Lists",
  attributeKey = "spaceBetween",
  min = 0,
  max = 100,
  defaultValue = 0,
  subKey = null,
  nestedKey = null
}) {
  var _attributes$attribute, _attributes$attribute2, _attributes$attribute3;
  const {
    attributes,
    setAttributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_3__["default"])();
  const value = nestedKey && subKey ? (_attributes$attribute = attributes?.[attributeKey]?.[subKey]?.[nestedKey]) !== null && _attributes$attribute !== void 0 ? _attributes$attribute : defaultValue : subKey ? (_attributes$attribute2 = attributes?.[attributeKey]?.[subKey]) !== null && _attributes$attribute2 !== void 0 ? _attributes$attribute2 : defaultValue : (_attributes$attribute3 = attributes?.[attributeKey]) !== null && _attributes$attribute3 !== void 0 ? _attributes$attribute3 : defaultValue;

  //Handle Both primitive and nonPrimitive attributes

  const handleChange = (attributeKey, newValue, subKey) => {
    if (nestedKey && subKey) {
      setAttributes({
        [attributeKey]: {
          ...attributes[attributeKey],
          [subKey]: {
            ...attributes[attributeKey][subKey],
            [nestedKey]: newValue
          }
        }
      });
    } else if (subKey) {
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

  //Reset the value with default value

  const handleReset = () => {
    handleChange(attributeKey, defaultValue, subKey);
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "range-label",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: label
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "desktop",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "range-measure",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_ResetIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {
              style: {
                cursor: "pointer"
              },
              onClick: handleReset
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "pixel",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                children: "px"
              })
            })]
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "input-range",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__.RangeControl, {
        max: max,
        min: min,
        value: value,
        onChange: newValue => handleChange(attributeKey, newValue, subKey)
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
/* harmony import */ var _assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../assets/TelevisionIcon */ "./src/smart-list-block/assets/TelevisionIcon.js");
/* harmony import */ var _assets_Unlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../assets/Unlink */ "./src/smart-list-block/assets/Unlink.js");
/* harmony import */ var _NumberControl__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./NumberControl */ "./src/smart-list-block/components/InspectorControl/common/SpacingControl/NumberControl.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__);






function SpacingControl({
  label,
  values = {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    linked: true
  },
  onChange = () => {}
}) {
  const handleValueChange = (position, value) => {
    if (values.linked) {
      onChange({
        ...values,
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      onChange({
        ...values,
        [position]: value
      });
    }
  };
  const handleReset = () => {
    onChange({
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      linked: true
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
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_TelevisionIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
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
      className: "control-input-group",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxs)("div", {
        className: "control-input-group",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: values.top,
          step: 4,
          min: 0,
          onChange: val => {
            handleValueChange("top", val);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: values.right,
          step: 4,
          onChange: val => {
            handleValueChange("right", val);
          },
          min: 0
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: values.left,
          min: 0,
          step: 4,
          onChange: val => {
            handleValueChange("left", val);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_NumberControl__WEBPACK_IMPORTED_MODULE_4__["default"], {
          value: values.bottom,
          min: 0,
          step: 4,
          onChange: val => {
            handleValueChange("bottom", val);
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("div", {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)("button", {
            onClick: () => onChange({
              ...values,
              linked: !values.linked
            }),
            className: `link-btn ${values.linked ? "" : "is-unlinked "}`,
            children: values.linked ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_Link__WEBPACK_IMPORTED_MODULE_0__["default"], {}) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_assets_Unlink__WEBPACK_IMPORTED_MODULE_3__["default"], {})
          })
        })]
      })
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
  variant
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    role: "button",
    className: `tab tab--${variant} ${isActive ? "active" : ""}`,
    onClick: () => onHandleTab(tab.name),
    children: [tab.icon && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span", {
      className: "tab-icon",
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
  variant = "underline"
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    className: `tabs tabs--${variant}`,
    children: tabItems.map((tab, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_SingleTab__WEBPACK_IMPORTED_MODULE_0__["default"], {
      tab: tab,
      isActive: selectedTab === tab.name,
      onHandleTab: onHandleTab,
      variant: variant
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

function Typography({
  label
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
    className: "custom-range-control",
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
      className: "range-control",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
        className: "content",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", {
          className: "range-label",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("p", {
            children: label
          })
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(Popover, {
      position: "middle right",
      onClose: () => setIsOpen(false),
      className: "color-popover",
      usePortal: false,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(ColorPicker, {
        color: value,
        onChangeComplete: handleColorChange,
        enableAlpha: true
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




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
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
      children: "List Orientation"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_InspectorControl_common_Tabs_Tabs__WEBPACK_IMPORTED_MODULE_1__["default"], {
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
/* harmony import */ var _assets_ListClickIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../assets/ListClickIcon */ "./src/smart-list-block/assets/ListClickIcon.js");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/smart-list-block/const/index.js");
/* harmony import */ var _hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useBlockContext */ "./src/smart-list-block/hooks/useBlockContext.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "./src/smart-list-block/utils/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function ListPreview() {
  const {
    attributes
  } = (0,_hooks_useBlockContext__WEBPACK_IMPORTED_MODULE_2__["default"])();
  const {
    listOrientation,
    alignment,
    presetsType,
    spaceBetween,
    iconGap,
    divider,
    backgroundStyle,
    color: textColor,
    border,
    padding,
    margin,
    radius,
    title,
    description
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
    backgroundSize,
    backgroundOverlay
  } = backgroundStyle;
  const orientationClass = `is-${listOrientation || "vertical"}`;
  const alignmentClass = `alignment-${alignment || "left"}`;
  const dividerClass = show ? "has-divider" : "";
  const borderClass = borderShow ? "has-border" : "";
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
    style: {
      "--marginTop": `${margin.top}px`,
      "--marginRight": `${margin.right}px`,
      "--marginBottom": `${margin.bottom}px`,
      "--marginLeft": `${margin.left}px`
    },
    class: "smart-list-wrapper",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
      className: `smart-list ${orientationClass} ${alignmentClass} ${dividerClass} ${borderClass}`,
      style: {
        "--spaceBetween": `${spaceBetween}px`,
        "--color": textColor,
        "--iconGap": `${iconGap}px`,
        "--dividerColor": color,
        "--dividerStyle": style,
        "--dividerWidth": `${width}`,
        "--borderColor": borderColor,
        "--borderStyle": borderStyle,
        "--borderWidth": `${borderWidth}`,
        "--paddingTop": `${padding.top}px`,
        "--paddingRight": `${padding.right}px`,
        "--paddingBottom": `${padding.bottom}px`,
        "--paddingLeft": `${padding.left}px`,
        "--radiusTop": `${radius.top}px`,
        "--radiusRight": `${radius.right}px`,
        "--radiusBottom": `${radius.bottom}px`,
        "--radiusLeft": `${radius.left}px`,
        "--backgroundImage": type === "image" && image ? `url(${image})` : "none",
        "--backgroundGradient": type === "gradient" && background ? background : "none",
        "--backgroundSize": type === "image" ? backgroundSize : "auto",
        "--overlayColor": backgroundOverlay?.enabled && type === "image" ? (0,_utils__WEBPACK_IMPORTED_MODULE_3__.hexToRgba)(backgroundOverlay.color || "#f05e31", backgroundOverlay.opacity || 50) : "transparent"
      },
      children: _const__WEBPACK_IMPORTED_MODULE_1__.listItems.map((item, index) => {
        return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
          className: "smart-item",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_assets_ListClickIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            children: [title && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("strong", {
              children: item.title
            }), (presetsType !== "list" || description) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              style: {
                margin: "5px 0 0",
                fontSize: "14px",
                color: "#666"
              },
              children: item.description
            })]
          })]
        }, index);
      })
    })
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListPreview);

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
/* harmony export */   contentTabItems: () => (/* binding */ contentTabItems),
/* harmony export */   dividerStyle: () => (/* binding */ dividerStyle),
/* harmony export */   generalTabItems: () => (/* binding */ generalTabItems),
/* harmony export */   imageScales: () => (/* binding */ imageScales),
/* harmony export */   listItems: () => (/* binding */ listItems),
/* harmony export */   orientationTabItems: () => (/* binding */ orientationTabItems),
/* harmony export */   presetTabItems: () => (/* binding */ presetTabItems)
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__);











const generalTabItems = [{
  name: "presets",
  title: "Presets",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  name: "styles",
  title: "Style",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}];
const contentTabItems = [{
  name: "general",
  title: "General",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_PresetIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {})
}, {
  name: "styles",
  title: "Style",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_StylesIcon__WEBPACK_IMPORTED_MODULE_1__["default"], {})
}];
const presetTabItems = [{
  name: "list",
  title: "List",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "descriptionList",
  title: "Description List",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const orientationTabItems = [{
  name: "horizontal",
  title: "Horizontal",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_NormalListIcon__WEBPACK_IMPORTED_MODULE_2__["default"], {})
}, {
  name: "vertical",
  title: "Vertical",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_DescriptionListIcon__WEBPACK_IMPORTED_MODULE_3__["default"], {})
}];
const alignmentTabItems = [{
  name: "left",
  title: "Left",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_LeftAlign__WEBPACK_IMPORTED_MODULE_6__["default"], {})
}, {
  name: "center",
  title: "Center",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_MiddleAlign__WEBPACK_IMPORTED_MODULE_5__["default"], {})
}, {
  name: "right",
  title: "Right",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_RightAlign__WEBPACK_IMPORTED_MODULE_4__["default"], {})
}];
const listItems = [{
  icon: "🎯",
  title: "List Item 1",
  description: "This is the firsts item description"
}, {
  icon: "✨",
  title: "List Item 2",
  description: "This is the second item description"
}, {
  icon: "🚀",
  title: "List Item 3",
  description: "This is the thirds item description"
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
const backGroundStyles = [{
  name: "solid",
  title: "solid",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Solid__WEBPACK_IMPORTED_MODULE_7__["default"], {})
}, {
  name: "gradient",
  title: "gradient",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Gradient__WEBPACK_IMPORTED_MODULE_8__["default"], {})
}, {
  name: "image",
  title: "image",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {})
}];
const imageScales = [{
  name: "auto",
  title: "None",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Solid__WEBPACK_IMPORTED_MODULE_7__["default"], {})
}, {
  name: "cover",
  title: "Cover",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Gradient__WEBPACK_IMPORTED_MODULE_8__["default"], {})
}, {
  name: "contain",
  title: "Contain",
  icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_assets_Image__WEBPACK_IMPORTED_MODULE_9__["default"], {})
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
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_InspectorControl_ContentControlPanel_ContentControlPanel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/InspectorControl/ContentControlPanel/ContentControlPanel */ "./src/smart-list-block/components/InspectorControl/ContentControlPanel/ContentControlPanel.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__);










function Edit({
  attributes,
  setAttributes
}) {
  const {
    previewWidth
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
    style: {
      maxWidth: previewWidth,
      margin: "0 auto"
    }
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_Provider_BlockProvider__WEBPACK_IMPORTED_MODULE_5__["default"], {
    attributes: attributes,
    setAttributes: setAttributes,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.BlockControls, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarGroup, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
          icon: "align-center",
          label: "Default",
          isActive: previewWidth === "100%",
          onClick: () => setAttributes({
            previewWidth: "100%"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_6__.ToolbarButton, {
          icon: "align-wide",
          label: "Wide",
          isActive: previewWidth === "1200px",
          onClick: () => setAttributes({
            previewWidth: "1200px"
          })
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InspectorControl_GeneralControlPanel_GeneralControlPanel__WEBPACK_IMPORTED_MODULE_3__["default"], {}), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_InspectorControl_ContentControlPanel_ContentControlPanel__WEBPACK_IMPORTED_MODULE_7__["default"], {})]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_components_ListPreview__WEBPACK_IMPORTED_MODULE_4__["default"], {})
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
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
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
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */


/**
 * The save function defines the way in which the different attributes should
 * be combined into the final markup, which is then serialized by the block
 * editor into `post_content`.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#save
 *
 * @return {Element} Element to render.
 */

function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: 'Smart List Block – hello from the saved content!'
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
/* harmony export */   hexToRgba: () => (/* binding */ hexToRgba)
/* harmony export */ });
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