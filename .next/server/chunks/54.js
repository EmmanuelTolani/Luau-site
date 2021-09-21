"use strict";
exports.id = 54;
exports.ids = [54];
exports.modules = {

/***/ 3257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: ./components/Header/Header.js
var Header = __webpack_require__(3044);
// EXTERNAL MODULE: ./components/Footer/Footer.js
var Footer = __webpack_require__(3987);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/VideoHero/VideoHero.js

function VideoHero(props) {
  console.log(props.color);
  console.log(props.title);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "videohero__background",
    children: /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "videohero__foreground",
      children: /*#__PURE__*/jsx_runtime_.jsx("video", {
        loop: "true",
        autoPlay: "autoplay",
        muted: true,
        children: /*#__PURE__*/jsx_runtime_.jsx("source", {
          src: "../src/videos/new-timelapse.mp4",
          type: "video/mp4"
        })
      })
    })
  });
}
;// CONCATENATED MODULE: ./components/layouts/MainLayout.js





function MainLayout(props) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(Header/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx(VideoHero, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      children: props.children
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer/* default */.Z, {})]
  });
}

/***/ }),

/***/ 369:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SystemLayout)
/* harmony export */ });
/* harmony import */ var _Header_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3044);
/* harmony import */ var _Footer_Footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3987);
/* harmony import */ var _Hero_Hero__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1483);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);





function SystemLayout(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Header_Header__WEBPACK_IMPORTED_MODULE_0__/* .default */ .Z, {}), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Hero_Hero__WEBPACK_IMPORTED_MODULE_2__/* .default */ .Z, {
      bG: props.bG,
      title: props.title,
      color: props.color
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx("main", {
      children: props.children
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(_Footer_Footer__WEBPACK_IMPORTED_MODULE_1__/* .default */ .Z, {})]
  });
}

/***/ })

};
;