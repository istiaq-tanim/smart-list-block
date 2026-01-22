/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/smart-list-block/components/ListItemPreview.js"
/*!************************************************************!*\
  !*** ./src/smart-list-block/components/ListItemPreview.js ***!
  \************************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _RenderIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RenderIcon */ "./src/smart-list-block/components/RenderIcon.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function ListItemPreview({
  item = {
    title: "List Item",
    description: "This is the list Description"
  },
  icon,
  title,
  description,
  presetsType,
  iconStyle
}) {
  const TitleTag = title?.tags === "p" ? "p" : title?.tags;
  const DescriptionTag = description?.tags === "p" ? "p" : description?.tags;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li", {
    className: `smart-item icon-${icon.position} icon-align-${icon.alignment || "center"}`,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(_RenderIcon__WEBPACK_IMPORTED_MODULE_0__["default"], {
      icon: icon,
      iconStyle: iconStyle
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "list-content",
      children: [title.show && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(TitleTag, {
        className: title?.tags === "p" ? "title" : "title-without-size",
        children: item.title
      }), (presetsType !== "list" || description.show) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(DescriptionTag, {
        className: description?.tags === "p" ? "description" : "description-without-size",
        children: item.description
      })]
    })]
  });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItemPreview);

/***/ },

/***/ "./src/smart-list-block/components/RenderIcon.js"
/*!*******************************************************!*\
  !*** ./src/smart-list-block/components/RenderIcon.js ***!
  \*******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RenderIcon)
/* harmony export */ });
/* harmony import */ var _const_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const/icons */ "./src/smart-list-block/const/icons.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function RenderIcon({
  icon,
  iconStyle
}) {
  const hasBg = iconStyle?.show;
  if (!icon?.show) return null;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    className: `render-icon ${hasBg ? `bg-${iconStyle.type}` : ""}`,
    style: {
      "--iconSize": `${icon?.size || 20}px`
    },
    children: [icon.type === "custom" && icon.imageSource && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
      src: icon.imageSource,
      alt: "icon",
      style: {
        width: "100%",
        height: "100%",
        objectFit: "contain"
      }
    }), icon.type === "iconSet" && icon.iconSourceId && (() => {
      const {
        component
      } = (0,_const_icons__WEBPACK_IMPORTED_MODULE_0__.getIcon)(icon.iconSourceId);
      const IconComponent = component;
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(IconComponent, {
        size: icon.size || 20,
        color: icon.color || "#757575"
      });
    })()]
  });
}

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

/***/ "./src/smart-list-item/block.json"
/*!****************************************!*\
  !*** ./src/smart-list-item/block.json ***!
  \****************************************/
(module) {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/smart-list-item","version":"1.0.0","title":"Smart List Item","category":"smart-list","parent":["create-block/smart-list-block"],"icon":"minus","description":"Individual item in a Smart List","supports":{"html":false,"reusable":false},"attributes":{"title":{"type":"string","default":"List Item"}},"usesContext":["listOrientation","presetsType","title","description","icon"],"textdomain":"smart-list-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css"}');

/***/ },

/***/ "./src/smart-list-item/edit.js"
/*!*************************************!*\
  !*** ./src/smart-list-item/edit.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _smart_list_block_components_ListItemPreview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../smart-list-block/components/ListItemPreview */ "./src/smart-list-block/components/ListItemPreview.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function Edit({
  attributes,
  setAttributes,
  context
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)(),
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_smart_list_block_components_ListItemPreview__WEBPACK_IMPORTED_MODULE_2__["default"], {
      icon: context.icon,
      title: context.title,
      description: context.description,
      presetsType: context.presetsType
    })
  });
}

/***/ },

/***/ "./src/smart-list-item/index.js"
/*!**************************************!*\
  !*** ./src/smart-list-item/index.js ***!
  \**************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/smart-list-item/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/smart-list-item/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/smart-list-item/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/smart-list-item/block.json");





(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ },

/***/ "./src/smart-list-item/save.js"
/*!*************************************!*\
  !*** ./src/smart-list-item/save.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save(),
    children: "Smart List Block – hello from the saved content!"
  });
}

/***/ },

/***/ "./src/smart-list-item/style.scss"
/*!****************************************!*\
  !*** ./src/smart-list-item/style.scss ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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

/***/ "@wordpress/i18n"
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
(module) {

module.exports = window["wp"]["i18n"];

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
/******/ 			"smart-list-item/index": 0,
/******/ 			"smart-list-item/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["smart-list-item/style-index"], () => (__webpack_require__("./src/smart-list-item/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map