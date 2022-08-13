"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 2517:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(7518);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./components/Header/styles.ts

const Container = external_styled_components_default().header.withConfig({
  displayName: "styles__Container",
  componentId: "sc-i62jzr-0"
})(["position:fixed;top:0;left:0;right:0;height:var(--header-height,60px);padding:7px 0;background-color:#ffb2a8;box-shadow:0 1px 1px rgba(0,0,0,0.2);"]);
const Logo = external_styled_components_default().h1.withConfig({
  displayName: "styles__Logo",
  componentId: "sc-i62jzr-1"
})(["font-size:1.6rem;font-family:", ";a{text-decoration:none;color:black;}a:hover{color:", ";}"], p => p.theme.fonts.accent, p => p.theme.colors.pink);
;// CONCATENATED MODULE: ./components/Center/styles.ts

const Center = external_styled_components_default().div.withConfig({
  displayName: "styles__Center",
  componentId: "sc-mjwwff-0"
})(["max-width:1000px;padding:0 20px;margin:auto;@media (max-width:800px){max-width:520px;padding:0 15px;}"]);
;// CONCATENATED MODULE: ./components/Center/index.ts

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
;// CONCATENATED MODULE: ./components/Header/Header.tsx




const Header = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime_.jsx(Center, {
      children: /*#__PURE__*/jsx_runtime_.jsx(Logo, {
        children: /*#__PURE__*/jsx_runtime_.jsx((link_default()), {
          href: "/",
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "Next\u30CB\u30E5\u30FC\u30B9!"
          })
        })
      })
    })
  });
};
;// CONCATENATED MODULE: ./components/Header/index.ts

;// CONCATENATED MODULE: ./components/Footer/styles.ts

const styles_Container = external_styled_components_default().footer.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1epzi8-0"
})(["text-align:center;border-top:1px solid rgba(0,0,0,0.1);padding:15px;background-color:#464673;height:var(--footer-height,50px);"]);
;// CONCATENATED MODULE: ./components/Footer/Footer.tsx




const Footer = () => {
  const currentYear = new Date().getFullYear();
  return /*#__PURE__*/jsx_runtime_.jsx(styles_Container, {
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)(Center, {
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "https://github.com/Tampoka",
        target: "_blank",
        rel: "noopener noreferrer",
        children: "Tampoka"
      }), " ", currentYear]
    })
  });
};
;// CONCATENATED MODULE: ./components/Footer/index.ts

;// CONCATENATED MODULE: ./shared/theme.ts

const theme = {
  fonts: {
    basic: "Meiryo",
    accent: '"UD Digi Kyokasho NP-B", cursive'
  },
  colors: {
    orange: "#f4ae40",
    blue: "#387af5",
    pink: "#eb57a3",
    gray: "#605f5f"
  }
};
const GlobalStyle = (0,external_styled_components_.createGlobalStyle)(["body{margin:0;font-family:", ";-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}*,*::after,*::before{box-sizing:border-box;}:root{--footer-height:50px;--header-height:60px;}h1,h2,h3,h4,h5,h6{margin:0;}a{color:", "}a:hover{color:", "}.main{padding:70px 0 20px;min-height:calc(100vh - 50px);background-color:#b3e7e0;}"], ({
  theme
}) => theme.fonts.basic, ({
  theme
}) => theme.colors.blue, ({
  theme
}) => theme.colors.pink);
// EXTERNAL MODULE: ./store/index.ts
var store = __webpack_require__(2188);
;// CONCATENATED MODULE: ./pages/_app.tsx
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }












function MyApp({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(external_styled_components_.ThemeProvider, {
    theme: theme,
    children: [/*#__PURE__*/jsx_runtime_.jsx(GlobalStyle, {
      theme: theme
    }), /*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: "Next\u30CB\u30E5\u30FC\u30B9!"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Header, {}), /*#__PURE__*/jsx_runtime_.jsx("main", {
      className: "main",
      children: /*#__PURE__*/jsx_runtime_.jsx(Center, {
        children: /*#__PURE__*/jsx_runtime_.jsx(Component, _objectSpread({}, pageProps))
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Footer, {})]
  });
}

MyApp.getInitialProps = async ({
  Component,
  ctx
}) => ({
  pageProps: _objectSpread({}, Component.getInitialProps ? await Component.getInitialProps(ctx) : {})
});

/* harmony default export */ const _app = (store/* store.withRedux */.h.withRedux(MyApp));

/***/ }),

/***/ 5648:
/***/ ((module) => {

module.exports = require("next-redux-wrapper");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

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
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [922,664,188], () => (__webpack_exec__(2517)));
module.exports = __webpack_exports__;

})();