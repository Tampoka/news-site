"use strict";
(() => {
var exports = {};
exports.id = 300;
exports.ids = [300];
exports.modules = {

/***/ 4684:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "a": () => (/* reexport */ Loader)
});

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
;// CONCATENATED MODULE: ./components/Loader/style.ts

const Container = external_styled_components_default().div.withConfig({
  displayName: "style__Container",
  componentId: "sc-1le255u-0"
})(["font-family:", ";"], p => p.theme.fonts.accent);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Loader/Loader.tsx


const Loader = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: "Loading..."
  });
};
;// CONCATENATED MODULE: ./components/Loader/index.ts


/***/ }),

/***/ 1567:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _id_),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: ./components/Loader/index.ts + 2 modules
var Loader = __webpack_require__(4684);
// EXTERNAL MODULE: ./components/Section/index.ts + 2 modules
var Section = __webpack_require__(1423);
// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(4809);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);
// EXTERNAL MODULE: ./api/config.ts
var config = __webpack_require__(9487);
;// CONCATENATED MODULE: ./api/category.ts


async function fetchPosts(categoryId) {
  const res = await external_node_fetch_default()(`${config/* config.baseUrl */.v.baseUrl}/categories/${categoryId}`);
  return await res.json();
}
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(2188);
// EXTERNAL MODULE: ./store/categoryPosts.ts
var store_categoryPosts = __webpack_require__(7098);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(6022);
// EXTERNAL MODULE: ./store/category.ts
var store_category = __webpack_require__(1848);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./pages/category/[id].tsx








const getServerSideProps = store/* store.getServerSideProps */.h.getServerSideProps(store => async ({
  params
}) => {
  if (typeof (params === null || params === void 0 ? void 0 : params.id) !== "string") throw new Error("Unexpected id");
  const categoryPosts = await fetchPosts(params.id);
  const category = params.id;
  store.dispatch({
    type: store_category/* UPDATE_CATEGORY_ACTION */.Q,
    category
  });
  store.dispatch({
    type: store_categoryPosts/* UPDATE_CATEGORY_POSTS_ACTION */.v,
    categoryPosts
  });
  return {
    props: {
      categoryPosts,
      category
    }
  };
});

const Category = () => {
  const {
    categoryPosts,
    category
  } = (0,external_react_redux_.useSelector)(state => state);
  if (!categoryPosts) return /*#__PURE__*/jsx_runtime_.jsx(Loader/* Loader */.a, {});
  return /*#__PURE__*/jsx_runtime_.jsx(Section/* Section */.$, {
    posts: categoryPosts,
    title: String(category)
  });
};

/* harmony default export */ const _id_ = (Category);

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 4809:
/***/ ((module) => {

module.exports = require("node-fetch");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6022:
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 6695:
/***/ ((module) => {

module.exports = require("redux");

/***/ }),

/***/ 7518:
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,675,181,188,423], () => (__webpack_exec__(1567)));
module.exports = __webpack_exports__;

})();