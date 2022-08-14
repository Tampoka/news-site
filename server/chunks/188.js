"use strict";
exports.id = 188;
exports.ids = [188];
exports.modules = {

/***/ 1848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Q": () => (/* binding */ UPDATE_CATEGORY_ACTION),
/* harmony export */   "W": () => (/* binding */ category)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_CATEGORY_ACTION = "UPDATE_CATEGORY";
const category = (state = "社会", action) => {
  var _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.category) ?? [];

    case UPDATE_CATEGORY_ACTION:
      return action.category;

    default:
      return state;
  }
};

/***/ }),

/***/ 7098:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "r": () => (/* binding */ categoryPosts),
/* harmony export */   "v": () => (/* binding */ UPDATE_CATEGORY_POSTS_ACTION)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_CATEGORY_POSTS_ACTION = "UPDATE_CATEGORY_POSTS";
const categoryPosts = (state = [], action) => {
  var _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.categoryPosts) ?? [];

    case UPDATE_CATEGORY_POSTS_ACTION:
      debugger;
      return action.categoryPosts;

    default:
      return state;
  }
};

/***/ }),

/***/ 182:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ comments),
/* harmony export */   "z": () => (/* binding */ UPDATE_COMMENTS_ACTION)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_COMMENTS_ACTION = "UPDATE_COMMENTS";
const comments = (state = [], action) => {
  var _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.comments) ?? [];

    case UPDATE_COMMENTS_ACTION:
      return action.comments;

    default:
      return state;
  }
};

/***/ }),

/***/ 2188:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ store)
/* harmony export */ });
/* harmony import */ var _comments__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(182);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8498);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6695);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _categoryPosts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7098);
/* harmony import */ var _category__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1848);






const combinedReducer = (0,redux__WEBPACK_IMPORTED_MODULE_2__.combineReducers)({
  post: _post__WEBPACK_IMPORTED_MODULE_1__/* .post */ .v,
  comments: _comments__WEBPACK_IMPORTED_MODULE_0__/* .comments */ .G,
  categoryPosts: _categoryPosts__WEBPACK_IMPORTED_MODULE_4__/* .categoryPosts */ .r,
  category: _category__WEBPACK_IMPORTED_MODULE_5__/* .category */ .W
});

const makeStore = context => (0,redux__WEBPACK_IMPORTED_MODULE_2__.legacy_createStore)(combinedReducer);

const store = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_3__.createWrapper)(makeStore, {
  debug: true
});

/***/ }),

/***/ 8498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ UPDATE_POST_ACTION),
/* harmony export */   "v": () => (/* binding */ post)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5648);
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);

const UPDATE_POST_ACTION = "UPDATE_POST";
const post = (state = null, action) => {
  var _action$payload;

  switch (action.type) {
    case next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.HYDRATE:
      return ((_action$payload = action.payload) === null || _action$payload === void 0 ? void 0 : _action$payload.post) ?? null;

    case UPDATE_POST_ACTION:
      return action.post;

    default:
      return state;
  }
};

/***/ })

};
;